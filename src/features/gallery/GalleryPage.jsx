import { useState } from "react";
import { Camera, Flame, X } from "lucide-react";
import { galleryCategories, galleryItems } from "@/data/gallery.data";
import { getWhatsAppLink } from "@/shared/utils/whatsapp";
import { WhatsappIcon } from "@/shared/ui/SocialIcons";

export const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="px-4 pt-6 pb-12 space-y-6">
      {/* 1. Encabezado Editorial */}
      <header className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-mahogany text-brand-primary border border-brand-primary/30">
          <Camera className="w-3.5 h-3.5" /> Crónicas de la Forja
        </span>
        <h1 className="font-display font-black text-2xl sm:text-3xl text-brand-gold uppercase tracking-wider">
          Galería
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted max-w-md mx-auto">
          Un vistazo a nuestras smash burgers, montaje en vivo y menaje medieval en eventos reales.
        </p>
      </header>

      {/* 2. Filtros Horizontales */}
      <div className="sticky top-16 z-30 -mx-4 py-3 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border/30">
        <div className="flex items-center gap-2 overflow-x-auto px-4 no-scrollbar">
          {galleryCategories.map((cat) => {
            const isSelected = cat.id === activeFilter;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-2 rounded-full text-xs font-display font-bold uppercase tracking-wider shrink-0 transition-all border ${
                  isSelected
                    ? "bg-brand-primary text-brand-bg border-brand-primary shadow-md"
                    : "bg-brand-surface/80 text-brand-muted border-brand-border/40 hover:text-brand-text"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
      {/* 3. Grid Asimétrico Mobile-First */}
      <section className="grid grid-cols-2 gap-3 sm:gap-4">
        {filteredItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedPhoto(item)}
            className={`group relative overflow-hidden rounded-2xl bg-brand-surface border border-brand-border/40 text-left focus:outline-none focus:ring-2 focus:ring-brand-primary ${
              item.featured ? "col-span-2 aspect-[16/10]" : "col-span-1 aspect-square"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/95 via-brand-bg/20 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4">
              <h2 className="font-display font-bold text-xs sm:text-sm text-brand-gold uppercase tracking-wide leading-snug">
                {item.title}
              </h2>
              {item.featured && (
                <p className="text-[11px] text-brand-muted line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              )}
            </div>
          </button>
        ))}
      </section>

      {/* 4. Cierre de Conversión */}
      <section className="p-5 rounded-2xl bg-brand-surface/90 border border-brand-gold/40 text-center space-y-3">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-mahogany text-brand-primary border border-brand-primary/30">
          <Flame className="w-5 h-5" />
        </div>
        <h2 className="font-display font-bold text-base sm:text-lg text-brand-gold uppercase">
          ¿Quieres esta experiencia en tu próximo evento?
        </h2>
        <p className="text-xs text-brand-muted max-w-sm mx-auto">
          Llevamos nuestra plancha, ingredientes frescos y menaje temático directo a tu reunión.
        </p>
        <a
          href={getWhatsAppLink({
            message:
              "Hola, vi la galería de El Señor de las Smash y me interesa información para un pedido o evento.",
          })}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-brand-bg font-bold text-xs sm:text-sm shadow-lg transition active:scale-95"
        >
          <WhatsappIcon className="w-4 h-4 text-brand-bg" />
          <span>Contactar por WhatsApp</span>
        </a>
      </section>

      {/* 5. Modal Lightbox al tocar una foto */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl bg-brand-surface border border-brand-gold/50 overflow-hidden shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Cerrar vista previa"
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-brand-bg/80 text-brand-text hover:text-brand-primary border border-brand-border/40"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="w-full max-h-[65vh] object-cover"
            />

            <div className="p-4 space-y-1">
              <h3 className="font-display font-bold text-base text-brand-gold uppercase">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};