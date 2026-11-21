import { WhatsappIcon } from "@/shared/ui/SocialIcons";
import { getWhatsAppLink } from "@/shared/utils/whatsapp";

export const WhatsappFloatingButton = () => (
  <a
    href={getWhatsAppLink()}
    className="fixed px-5 py-2 bg-whatsapp z-[9999] bottom-5 right-5 sm:bottom-10 sm:right-10 flex flex-nowrap items-center rounded-lg shadow-lg shadow-whatsapp/50 border-[2px] border-whatsapp cursor-pointer hover:bg-brand-bg hover:text-whatsapp duration-500"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="hidden sm:block text-[14px] font-bold">¿Cómo te ayudamos, viajero?</span>
    <WhatsappIcon />
  </a>
);