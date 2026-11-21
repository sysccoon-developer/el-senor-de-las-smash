import { NavLink } from "react-router-dom";
import { brandData } from "@/data/brand.data";
import { InstagramIcon, WhatsappIcon } from "@/shared/ui/SocialIcons";
import { getWhatsAppLink } from "@/shared/utils/whatsapp";
import {
  MapPin,
  Clock,
  ExternalLink,
  CreditCard,
  Truck,
} from "lucide-react";
import { navLinks } from "@/shared/constants/NavLinks.constants";

export const Footer = () => {
  const getFooterLinkClass = ({ isActive }) =>
  `transition pb-0.5 ${
    isActive
      ? "text-brand-gold underline decoration-brand-primary decoration-2 underline-offset-4"
      : "text-brand-muted hover:text-brand-gold"
  }`;

  return (
    <footer className="bg-brand-surface border-t border-brand-gold/30 mt-12 pt-10 pb-15 px-4">
      <div className="max-w-3xl mx-auto space-y-7">
        {/* 1. Identidad e Historia Breve */}
        <div className="flex flex-col items-center text-center space-y-2.5">
          <img
            src={brandData.logo}
            alt={brandData.name}
            className="h-24 sm:h-28 object-contain"
          />
          <p className="font-display font-bold text-xs uppercase tracking-widest text-brand-gold">
            {brandData.tagline}
          </p>
          {brandData.about && (
            <p className="text-xs text-brand-muted max-w-md leading-relaxed">
              {brandData.about}
            </p>
          )}
        </div>

        {/* 2. Ubicación y Horarios (Centrado, sin tarjeta) */}
        <div className="py-4 border-y border-brand-border/25 flex flex-col items-center text-center space-y-2">
          <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-text">
            <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
            <span>{brandData.address || brandData.location.city}</span>
            {brandData.location.mapsUrl && (
              <a
                href={brandData.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-gold hover:text-brand-primary underline underline-offset-4 ml-1 transition"
              >
                <span>Ver en Mapa</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-brand-muted">
            <Clock className="w-4 h-4 text-brand-primary shrink-0" />
            <span>{brandData.schedule}</span>
          </div>
        </div>

        {/* 3. Entregas y Pagos (2 Columnas iguales, mitad y mitad, solo texto) */}
        <div className="grid grid-cols-2 divide-x divide-brand-border/25 text-center text-xs">
          <div className="px-3 space-y-1">
            <p className="font-bold text-brand-gold flex items-center justify-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-brand-primary shrink-0" />
              <span>Entregas</span>
            </p>
            <p className="text-[11px] sm:text-xs text-brand-muted leading-relaxed">
              {brandData.deliveryInfo ||
                "Domicilio, pick-up y eventos privados."}
            </p>
          </div>

          <div className="px-3 space-y-1">
            <p className="font-bold text-brand-gold flex items-center justify-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-brand-primary shrink-0" />
              <span>Pagos</span>
            </p>
            <p className="text-[11px] sm:text-xs text-brand-muted leading-relaxed">
              {brandData.paymentMethods ||
                "Efectivo, transferencia y tarjeta (+IVA si facturas)."}
            </p>
          </div>
        </div>

        {/* 4. Enlaces Rápidos y Redes Sociales */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <nav
            aria-label="Navegación del pie de página"
            className="flex items-center gap-5 text-xs font-display font-bold uppercase tracking-wider"
          >
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to} end={link.end} className={getFooterLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={brandData.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-brand-bg border border-brand-border/50 text-brand-gold hover:border-brand-primary hover:text-brand-primary transition"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={getWhatsAppLink({
                message:
                  `Hola magos 🧙‍♂️ Vengo de la página web de *"El Señor de las Smash"* y quisiera más información.`,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-brand-bg border border-brand-border/50 text-brand-gold hover:border-brand-primary hover:text-brand-primary transition"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 5. Copyright */}
        <p className="text-[11px] text-brand-muted/70 text-center pt-4 border-t border-brand-border/20">
          © {new Date().getFullYear()} {brandData.name} • {brandData.location.city}.
          <br />
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};