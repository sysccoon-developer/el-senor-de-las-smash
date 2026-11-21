import { NavLink } from "react-router-dom";
import { Swords, Shield, Clock, MapPin } from "lucide-react";
import { brandData } from "@/data/brand.data";
import { navLinks } from "@/shared/constants/NavLinks.constants";

export const SideNav = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-brand-bg/98 backdrop-blur-xl flex flex-col justify-between px-6 pt-6 pb-12 overflow-y-auto">
      {/* Bloque Superior: Botón Cerrar (Swords) + Escudo arriba + Divisor Full Width */}
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar menú"
            className="p-2.5 rounded-full bg-brand-surface/80 border border-brand-gold/30 text-brand-gold hover:border-brand-primary hover:text-brand-primary transition active:scale-95"
          >
            <Swords className="w-5 h-5" />
          </button>
        </div>

        <img
          src={brandData.logo}
          alt={brandData.name}
          className="h-32 sm:h-36 w-auto object-contain mt-1 mb-5 drop-shadow-[0_0_25px_rgba(212,175,55,0.18)]"
        />

        {/* Línea divisoria Full Width */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
      </div>

      {/* Bloque Central: Enlaces Centrados con Shield en la ruta activa */}
      <nav
        aria-label="Navegación principal"
        className="w-full max-w-xs mx-auto flex flex-col items-center space-y-4 my-6"
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            onClick={onClose}
            className={({ isActive }) =>
              `group relative py-2 px-4 flex flex-col items-center font-display font-bold text-base sm:text-lg uppercase tracking-widest transition-all ${
                isActive
                  ? "text-brand-gold scale-105"
                  : "text-brand-text/75 hover:text-brand-gold"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="flex items-center justify-center gap-2.5">
                  {isActive && (
                    <Shield className="w-4 h-4 text-brand-primary shrink-0" />
                  )}
                  <span>{link.label}</span>
                </span>

                {/* Subrayado ornamental dorado solo en la página activa */}
                {isActive && (
                  <span className="mt-1.5 w-24 h-0.5 bg-gradient-to-r from-transparent via-brand-primary to-transparent rounded-full" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bloque Inferior: Cierre Operativo Centrado (Horario + Ubicación + CTA) */}
      <div className="w-full max-w-xs mx-auto pt-5 border-t border-brand-border/25 flex flex-col items-center text-center space-y-4">
        <div className="space-y-1 text-xs">
          <p className="font-bold text-brand-gold flex items-center justify-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-primary shrink-0" />
            <span>{brandData.schedule}</span>
          </p>
          {brandData.location.city && (
            <p className="text-brand-muted flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-primary shrink-0" />
              <span>{brandData.location.city}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};