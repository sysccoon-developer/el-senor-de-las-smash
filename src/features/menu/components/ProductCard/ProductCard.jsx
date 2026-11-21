import { WhatsappIcon } from "@/shared/ui/SocialIcons";
import { getWhatsAppLink } from "@/shared/utils/whatsapp";

export const ProductCard = ({
  name,
  image,
  variants, // Ej: [{ label: "Noble", price: 120 }, { label: "Real", price: 150 }]
  price,    // Por si tiene precio único (papas, combos, bebidas)
  description,
  badge,    // Ej: "La Favorita", "Clásica"
  soldOut = false,
  featuredFull = false, // true = ocupa el ancho completo (col-span-2)
  whatsappMessage
}) => {
  return (
    <article
      className={`relative flex flex-col items-center text-center rounded-2xl p-3 sm:p-5 transition border ${
        featuredFull
          ? "col-span-2 bg-gradient-to-b from-brand-surface to-brand-bg border-brand-gold/40 py-6"
          : "col-span-1 bg-brand-surface/70 border-brand-border/30 hover:border-brand-border/70"
      } ${soldOut ? "opacity-60" : ""}`}
    >
      {(badge || soldOut) && (
        <span
          className={`z-10 absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            soldOut
              ? "bg-red-900/90 text-red-100"
              : "bg-brand-mahogany text-brand-primary border border-brand-primary/30"
          }`}
        >
          {soldOut ? "Agotado" : badge}
        </span>
      )}

      {/* Imagen del Producto */}
      <div
        className={`w-full flex items-center justify-center mb-3 ${
          featuredFull ? "h-48 sm:h-56" : "h-32 sm:h-40"
        }`}
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="max-h-full max-w-full object-contain drop-shadow-[0_10px_12px_rgba(0,0,0,0.65)] transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Nombre del Producto */}
      <h3
        className={`font-display font-bold uppercase tracking-wide text-brand-gold leading-tight ${
          featuredFull ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"
        }`}
      >
        {name}
      </h3>

      {/* Precios / Variantes */}
      <div className="mt-1.5 font-bold text-brand-primary text-xs sm:text-sm">
        {variants && variants.length > 0 ? (
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {variants.map((variant, index) => (
              <span key={variant.label} className="flex items-center gap-1.5">
                <span>
                  {variant.label} <span className="text-brand-text">${variant.price}</span>
                </span>
                {index < variants.length - 1 && (
                  <span className="text-brand-border">|</span>
                )}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-sm sm:text-base">${price} MXN</span>
        )}
      </div>

      {/* Descripción */}
      {description && (
        <p
          className={`mt-2 text-brand-muted leading-snug flex-1 ${
            featuredFull ? "text-sm max-w-md" : "text-xs line-clamp-8"
          }`}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      {!soldOut && (
        <a
          href={getWhatsAppLink({ message: whatsappMessage })}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 w-full py-2 px-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-brand-bg font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition active:scale-95 ${
            featuredFull ? "max-w-xs" : ""
          }`}
        >
          <span>Pedir</span>
          <WhatsappIcon className="w-4 h-4 text-brand-bg" />
        </a>
      )}
    </article>
  );
}