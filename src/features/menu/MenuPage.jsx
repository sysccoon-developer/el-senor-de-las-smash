import { Link } from "react-router-dom";
import { MapPin, Clock, Flame, Sparkles, ArrowRight } from "lucide-react";
import { WhatsappIcon } from "@/shared/ui/SocialIcons";
import { brandData } from "@/data/brand.data";
import { CategoryTabs } from "./components/CategoryTabs/CategoryTabs";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { menuData } from "@/data/menu.data";
import { useEffect, useMemo, useRef, useState } from "react";
import { getMenuCategories } from "@/services/dataService";
import { getWhatsAppLink } from "@/shared/utils/whatsapp";


export const MenuPage = () => {
  const sectionRefs = useRef({});
  const isClickScrolling = useRef(false);

  const [activeCategoryId, setActiveCategoryId] = useState(menuData.burgers.id);
  const categories = useMemo(() => getMenuCategories(), []);

  useEffect(() => {
    if (categories.length === 0) return;

    let ticking = false;

    const updateActiveCategoryOnScroll = () => {
      if (isClickScrolling.current) {
        ticking = false;
        return;
      }

      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40;

      if (isAtBottom) {
        const lastCat = categories[categories.length - 1];
        if (lastCat) setActiveCategoryId(lastCat.id);
        ticking = false;
        return;
      }

      // Línea imaginaria de lectura (justo debajo de Navbar 64px + Tabs 54px + margen)
      const triggerLine = 150;
      let currentActive = categories[0].id;

      for (const category of categories) {
        const el = sectionRefs.current[category.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          // Si el inicio de la sección ya cruzó hacia arriba la línea de lectura
          if (rect.top <= triggerLine) {
            currentActive = category.id;
          }
        }
      }

      setActiveCategoryId(currentActive);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveCategoryOnScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Ejecuta una vez al montar para asegurar el estado inicial
    updateActiveCategoryOnScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [categories]);

  const handleSelectCategory = categoryId => {
    setActiveCategoryId(categoryId);
    const element = sectionRefs.current[categoryId];
    
    if (element) {
      isClickScrolling.current = true;
      const yOffset = -124;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({ top: y, behavior: "smooth" });

      // Reactiva el observador cuando termina la animación de scroll (~700ms)
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 700);
    }
  };

  return (
    <>
      <section className="px-4 pt-6 pb-5 bg-gradient-to-b from-brand-surface/80 via-brand-bg to-brand-bg border-b border-brand-border/30">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <div className="relative mb-3">
            <div className="absolute -inset-2 rounded-full bg-brand-primary/10 blur-xl" />
            <img
              src={brandData.logo}
              alt={brandData.name}
              className="relative h-30 sm:h-34 w-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]"
            />
          </div>
          <div className="w-75 h-0.5 bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent my-4" />
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-brand-text/90">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-brand-primary" />
              {brandData.location.city}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-primary" />
              {brandData.schedule}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2.5 w-full mt-5 text-left">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-brand-surface border border-brand-border/40 hover:border-brand-primary/70 transition flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Sin Apps
                </span>
                <WhatsappIcon className="w-4 h-4 text-whatsapp group-hover:scale-110 transition-transform" />
              </div>
              <div className="mt-2">
                <p className="text-xs sm:text-sm font-bold text-brand-text leading-tight">
                  Pedir Directo
                </p>
                <p className="text-[11px] text-brand-muted mt-0.5">
                  Precio real de cocina
                </p>
              </div>
            </a>
            <Link
              to="/eventos"
              className="p-3 rounded-xl bg-brand-mahogany/60 border border-brand-gold/30 hover:border-brand-gold transition flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold flex items-center gap-1">
                  <Flame className="w-3 h-3" /> 4 a 60+ pers.
                </span>
                <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div className="mt-2">
                <p className="text-xs sm:text-sm font-bold text-brand-text leading-tight">
                  Chef Privado y Eventos
                </p>
                <p className="text-[11px] text-brand-muted mt-0.5">
                  Cotiza tu reunión
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <CategoryTabs
        categories={categories}
        activeCategoryId={activeCategoryId}
        onSelectCategory={handleSelectCategory}
      />
      <div className="px-3 sm:px-4 pt-6 space-y-10">
        {categories.map(({ options, id, label, variantsInfo}) => (
          <section
            key={id}
            data-category-id={id}
            ref={element => (sectionRefs.current[id] = element)}
          >
            <div className="text-center mb-5">
              <div className="flex items-center justify-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-l from-brand-gold/60 via-brand-border/50 to-transparent" />
                <span className="w-1.5 h-1.5 rotate-45 bg-brand-gold/80 shrink-0" />
                <h2 className="font-display font-bold text-lg sm:text-xl text-brand-gold uppercase tracking-widest text-center px-1 shrink-0">
                  {label}
                </h2>
                <span className="w-1.5 h-1.5 rotate-45 bg-brand-gold/80 shrink-0" />
                <div className="h-px flex-1 bg-gradient-to-r from-brand-gold/60 via-brand-border/50 to-transparent" />
              </div>
              
              {variantsInfo && variantsInfo.length > 0 && (
                <div className="mt-2.5 max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center gap-y-1 sm:gap-x-3 text-xs text-brand-muted">
                  {variantsInfo.map((variant, index) => (
                    <div key={variant.name} className="flex items-center gap-1.5">
                      <p>
                        <span className="font-display font-bold uppercase tracking-wider text-brand-primary">
                          {variant.name}:
                        </span>{" "}
                        <span>{variant.detail}</span>
                      </p>

                      {/* Separador dorado sutil en pantallas medianas/grandes */}
                      {index < variantsInfo.length - 1 && (
                        <span className="hidden sm:inline text-brand-border">•</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {options.map(option => (
                <ProductCard key={option.name} {...option} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>  
  );
}