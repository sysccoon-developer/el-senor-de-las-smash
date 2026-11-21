import { useState } from "react";
import { Menu } from "lucide-react";
import { SideNav } from "./SideNav";
import { WhatsappIcon } from "@/shared/ui/SocialIcons";
import { getWhatsAppLink } from "@/shared/utils/whatsapp";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Barra Superior Fija */}
      <header className="sticky top-0 z-40 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border/40">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Botón Menú Hamburguesa */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menú de navegación"
            className="p-2 -ml-2 rounded-lg text-brand-text hover:bg-brand-surface transition"
          >
            <Menu className="w-6 h-6 text-brand-gold" />
          </button>

          {/* Acceso directo WhatsApp compacto */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pedir por WhatsApp"
            className="p-2 rounded-full bg-brand-primary text-brand-bg hover:bg-brand-primary-hover transition shadow-md"
          >
            <WhatsappIcon />
          </a>
        </div>
      </header>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs transition-opacity"
        />
      )}
      <SideNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};