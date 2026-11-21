import { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Clock,
  Flame,
  Info,
  Minus,
  Plus,
  Sparkles,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { getWhatsAppLink } from "@/shared/utils/whatsapp";
import {
  EVENT_BASE_FEE,
  eventsData,
  eventsFaqs,
  EXTRA_HOUR_FEE,
} from "@/data/events.data";
import { WhatsappIcon } from "@/shared/ui/SocialIcons";

export const EventsPage = () => {
  const [selectedId, setSelectedId] = useState(eventsData[0].id);
  const currentModality =
    eventsData.find((m) => m.id === selectedId) || eventsData[0];

  const [guests, setGuests] = useState(currentModality.defaultGuests);
  const [extraHours, setExtraHours] = useState(0);
  const [selectedBaseId, setSelectedBaseId] = useState("hamburguesas");
  const [selectedPackageId, setSelectedPackageId] = useState("escudero");

  const handleSelectModality = (modality) => {
    setSelectedId(modality.id);
    setGuests(modality.defaultGuests);
    setExtraHours(0);
    if (modality.baseOptions && modality.baseOptions.length > 0) {
      const firstBase = modality.baseOptions[0];
      setSelectedBaseId(firstBase.id);
      setSelectedPackageId(firstBase.packages[0].id);
    }
  };

  // Resolver Platillo Base y Nivel de Paquete activo (para Eventos 16-60)
  const hasBaseOptions =
    currentModality.baseOptions && currentModality.baseOptions.length > 0;

  const activeBaseOption = hasBaseOptions
    ? currentModality.baseOptions.find((b) => b.id === selectedBaseId) ||
      currentModality.baseOptions[0]
    : null;

  const activePackage = activeBaseOption
    ? activeBaseOption.packages.find((p) => p.id === selectedPackageId) ||
      activeBaseOption.packages[0]
    : null;

  const activePricePerGuest = activePackage
    ? activePackage.pricePerGuest
    : currentModality.pricePerGuest;

  // Cálculo dinámico según modalidad
  const isPerGuestOnly = currentModality.pricingType === "per-guest";
  const rawFoodOrGuestsTotal = guests * activePricePerGuest;

  const baseServiceSubtotal = isPerGuestOnly
    ? rawFoodOrGuestsTotal
    : (EVENT_BASE_FEE || 0) + rawFoodOrGuestsTotal;

  const extraHoursSubtotal = extraHours * (EXTRA_HOUR_FEE || 0);
  const estimatedTotal = baseServiceSubtotal + extraHoursSubtotal;

  const buildQuoteMessage = () => {
    const selectionLine =
      activeBaseOption && activePackage
        ? `• *Selección:* ${activeBaseOption.label} — Paquete ${activePackage.name} ($${activePackage.pricePerGuest} MXN/pers.)\n`
        : "";

    const extraHoursLine =
      extraHours > 0
        ? `• *Horas extra:* ${extraHours} hr(s) (+$${extraHoursSubtotal.toLocaleString("es-MX")} MXN)\n`
        : "";

    return (
      `Hola, me interesa cotizar el servicio de *${currentModality.title}*.\n\n` +
      selectionLine +
      `• *Invitados:* ${guests} personas\n` +
      `• *Duración base:* ${currentModality.serviceDuration}\n` +
      extraHoursLine +
      `• *Total estimado:* $${estimatedTotal.toLocaleString("es-MX")} MXN (+ IVA si requiere factura)\n\n` +
      `¿Tienen disponibilidad para revisar fecha y detalles?`
    );
  };

  return (
    <div className="px-4 py-6 space-y-8">
      {/* 1. Encabezado Editorial */}
      <header className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-mahogany text-brand-primary border border-brand-primary/30">
          <Flame className="w-3.5 h-3.5" /> Llevamos la forja hasta tu mesa
        </span>
        <h1 className="font-display font-black text-2xl sm:text-3xl text-brand-gold uppercase tracking-wider">
          Chef Privado y Eventos
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted max-w-md mx-auto">
          Smash burgers recién forjadas al momento en tu reunión, fiesta o evento corporativo.
        </p>
      </header>

      {/* 2. Selector de Modalidad */}
      <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-brand-surface border border-brand-border/40">
        {eventsData.map((modality) => {
          const isSelected = modality.id === selectedId;
          return (
            <button
              key={modality.id}
              type="button"
              onClick={() => handleSelectModality(modality)}
              className={`py-2.5 px-3 rounded-xl text-center transition-all ${
                isSelected
                  ? "bg-brand-primary text-brand-bg font-bold shadow-md"
                  : "text-brand-muted hover:text-brand-text"
              }`}
            >
              <span className="block text-[10px] uppercase tracking-wider opacity-85">
                {modality.badge}
              </span>
              <span className="block text-xs sm:text-sm font-display font-bold mt-0.5">
                {modality.id === "chef-privado" ? "Chef Privado" : "Eventos"}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. Tarjeta Principal de la Modalidad */}
      <section className="rounded-2xl bg-brand-surface/90 border border-brand-gold/40 p-5 sm:p-6 space-y-6 shadow-xl">
        {/* Título, subtítulo y duración */}
        <div className="space-y-2 border-b border-brand-border/30 pb-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-brand-gold uppercase">
              {currentModality.title}
            </h2>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-brand-bg text-brand-primary border border-brand-border/50 shrink-0">
              {currentModality.badge}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-brand-muted">
            {currentModality.subtitle}
          </p>
          <div className="pt-1 flex items-center gap-1.5 text-xs font-semibold text-brand-primary">
            <Clock className="w-4 h-4 shrink-0" />
            <span>{currentModality.serviceDuration}</span>
          </div>
        </div>

        {/* Carta de 3 Tiempos (Exclusivo para Chef Privado) */}
        {currentModality.exclusiveMenu && currentModality.exclusiveMenu.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-gold flex items-center gap-1.5">
              <UtensilsCrossed className="w-4 h-4 text-brand-primary" />
              Experiencia Gastronómica de 3 Tiempos
            </h3>
            <div className="space-y-2.5">
              {currentModality.exclusiveMenu.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-brand-bg/80 border border-brand-border/40 space-y-1"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">
                    {item.course}
                  </span>
                  <h4 className="font-display font-bold text-sm text-brand-gold">
                    {item.name}
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Selector de Platillo Base + Nivel de Paquete (Exclusivo para Eventos 16-60) */}
        {hasBaseOptions && activeBaseOption && activePackage && (
          <div className="space-y-5">
            {/* Paso 1: Elegir Platillo Base */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-gold flex items-center gap-1.5">
                1. Elige el Platillo Base
                <UtensilsCrossed className="w-4 h-4" />
              </h3>
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                {currentModality.baseOptions.map((baseOpt) => {
                  const isBaseSelected = baseOpt.id === activeBaseOption.id;
                  return (
                    <button
                      key={baseOpt.id}
                      type="button"
                      onClick={() => setSelectedBaseId(baseOpt.id)}
                      className={`py-2.5 px-1 sm:px-2 rounded-xl border text-[10px] sm:text-xs font-display font-bold uppercase tracking-normal sm:tracking-wide flex items-center justify-center text-center leading-tight transition-all ${
                        isBaseSelected
                          ? "bg-brand-primary text-brand-bg border-brand-primary shadow-md"
                          : "bg-brand-bg/70 text-brand-muted border-brand-border/40 hover:text-brand-text hover:border-brand-gold/40"
                      }`}
                    >
                      {baseOpt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Paso 2: Elegir Nivel de Paquete (Escudero / Caballero / Monarca) */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                2. Elige el Nivel del Paquete
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeBaseOption.packages.map((pkg) => {
                  const isPkgSelected = pkg.id === activePackage.id;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`text-left p-4 rounded-xl border transition-all space-y-1.5 flex flex-col justify-between ${
                        isPkgSelected
                          ? "bg-brand-mahogany/50 border-brand-primary shadow-md"
                          : "bg-brand-bg/70 border-brand-border/40 hover:border-brand-gold/40"
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-display font-bold text-sm text-brand-gold uppercase">
                            {pkg.name}
                          </span>
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-brand-bg text-brand-primary border border-brand-primary/30">
                            {pkg.tag}
                          </span>
                        </div>
                        <p className="font-display font-black text-lg text-brand-primary">
                          ${pkg.pricePerGuest}{" "}
                          <span className="text-[11px] font-sans font-normal text-brand-muted">
                            MXN / pers.
                          </span>
                        </p>
                      </div>
                      <p className="text-xs text-brand-muted leading-relaxed pt-1">
                        {pkg.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Simulador Interactivo */}
        <div className="p-4 rounded-xl bg-brand-bg/90 border border-brand-border/40 space-y-4">
          {/* Slider de Invitados */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="guests-slider"
                className="text-xs sm:text-sm font-semibold text-brand-text flex items-center gap-1.5"
              >
                <Users className="w-4 h-4 text-brand-primary" />
                Número de invitados:
              </label>
              <span className="font-display font-black text-lg text-brand-primary">
                {guests} pers.
              </span>
            </div>

            <input
              id="guests-slider"
              type="range"
              min={currentModality.minGuests}
              max={currentModality.maxGuests}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full accent-brand-primary cursor-pointer h-2 bg-brand-surface rounded-lg"
            />

            <div className="flex justify-between text-[11px] text-brand-muted">
              <span>Mín. {currentModality.minGuests}</span>
              <span>Máx. {currentModality.maxGuests}</span>
            </div>
          </div>

          {/* Selector de Horas Extra */}
          <div className="pt-3 border-t border-brand-border/30 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-brand-text">
                Horas extra de servicio
              </p>
              <p className="text-[11px] text-brand-muted">
                +${EXTRA_HOUR_FEE} MXN / hora adicional
              </p>
            </div>

            <div className="flex items-center gap-2.5 bg-brand-surface px-2.5 py-1 rounded-lg border border-brand-border/40">
              <button
                type="button"
                onClick={() => setExtraHours(Math.max(0, extraHours - 1))}
                disabled={extraHours === 0}
                aria-label="Restar hora extra"
                className="p-1 text-brand-text disabled:opacity-30 hover:text-brand-primary transition"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-bold w-6 text-center text-brand-primary">
                +{extraHours}h
              </span>
              <button
                type="button"
                onClick={() => setExtraHours(Math.min(4, extraHours + 1))}
                aria-label="Agregar hora extra"
                className="p-1 text-brand-text hover:text-brand-primary transition"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Desglose y Total Estimado */}
          <div className="pt-3 border-t border-brand-border/30 space-y-2 text-xs">
            {isPerGuestOnly ? (
              <div className="flex justify-between text-brand-muted">
                <span>
                  Experiencia ({guests} pers. × ${activePricePerGuest})
                </span>
                <span className="font-medium text-brand-text">
                  ${baseServiceSubtotal.toLocaleString("es-MX")} MXN
                </span>
              </div>
            ) : (
              <>
                <div className="flex justify-between text-brand-muted">
                  <span>Operación, traslado y staff</span>
                  <span className="font-medium text-brand-text">
                    ${EVENT_BASE_FEE.toLocaleString("es-MX")} MXN
                  </span>
                </div>
                <div className="flex justify-between text-brand-muted">
                  <span>
                    {activeBaseOption && activePackage
                      ? `${activeBaseOption.label} (${activePackage.name})`
                      : "Alimentos"}{" "}
                    ({guests} pers. × ${activePricePerGuest})
                  </span>
                  <span className="font-medium text-brand-text">
                    ${rawFoodOrGuestsTotal.toLocaleString("es-MX")} MXN
                  </span>
                </div>
              </>
            )}

            {extraHours > 0 && (
              <div className="flex justify-between text-brand-muted">
                <span>Servicio extendido (+{extraHours} hr)</span>
                <span className="font-medium text-brand-text">
                  +${extraHoursSubtotal.toLocaleString("es-MX")} MXN
                </span>
              </div>
            )}

            <div className="pt-2 border-t border-brand-border/30 flex items-baseline justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                  Total Estimado
                </p>
                {isPerGuestOnly && (
                  <p className="text-[11px] text-brand-muted">
                    ${activePricePerGuest} MXN por persona
                  </p>
                )}
              </div>
              <p className="font-display font-black text-xl sm:text-2xl text-brand-primary">
                ${estimatedTotal.toLocaleString("es-MX")}{" "}
                <span className="text-xs font-sans font-normal text-brand-muted">
                  MXN + IVA
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Qué incluye */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-brand-gold flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-brand-primary" /> ¿Qué incluye el servicio?
          </h3>
          <ul className="space-y-2.5">
            {currentModality.highlights.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-text/90"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Nota de requerimientos */}
        <div className="p-3 rounded-xl bg-brand-mahogany/40 border border-brand-border/30 flex items-start gap-2.5 text-xs text-brand-muted">
          <Info className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
          <p>{currentModality.requirements}</p>
        </div>

        {/* Aviso de presupuesto estimado (compartido en ambos modos del cotizador) */}
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/35 flex items-start gap-2.5 text-left">
          <Info className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
          <p className="text-[11px] sm:text-xs text-brand-text/90 leading-relaxed">
            <span className="font-bold text-brand-gold">Presupuesto estimado:</span>{" "}
            Este cálculo es una referencia aproximada basada en nuestras recetas de
            mayor costo. Tu cotización final{" "}
            <span className="font-black text-brand-gold text-[15px]">
              muy probablemente disminuirá
            </span>{" "}
            según las recetas que elijas para tu evento (o podría variar ligeramente
            en casos muy específicos).
          </p>
        </div>

        {/* Botón CTA Directo a WhatsApp */}
        <a
          href={getWhatsAppLink({ message: buildQuoteMessage() })}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-brand-bg font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition active:scale-95"
        >
          <WhatsappIcon className="w-5 h-5 text-brand-bg" />
          <span>Cotizar Fecha por WhatsApp</span>
        </a>
      </section>

      {/* 4. Preguntas Frecuentes */}
      <div className="space-y-2.5">
        <h2 className="font-display font-black text-center text-xl sm:text-2xl text-brand-text uppercase tracking-wider mb-6">
          Preguntas Frecuentes de Eventos
        </h2>
        {eventsFaqs.map((faq, index) => (
          <details
            key={index}
            open={index === 0}
            className="group rounded-xl bg-brand-surface/70 border border-brand-border/30 open:border-brand-gold/40 transition-colors"
          >
            <summary className="flex items-center justify-between gap-3 p-4 cursor-pointer list-none text-xs sm:text-sm font-bold text-brand-gold select-none [&::-webkit-details-marker]:hidden">
              <span>{faq.q}</span>
              <ChevronDown className="w-4 h-4 text-brand-primary shrink-0 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="px-4 pb-4 pt-1 text-xs text-brand-muted leading-relaxed border-t border-brand-border/20">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};