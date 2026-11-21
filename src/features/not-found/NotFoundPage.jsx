import { Link } from "react-router-dom";
import { Compass, UtensilsCrossed, Calendar, CircleExclamationPoint } from "lucide-react";

export const NotFoundPage = () => {
  return (
    <div className="min-h-[75vh] px-4 py-12 flex flex-col items-center justify-center text-center space-y-6">
      {/* Emblema superior */}
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-brand-mahogany/60 border border-brand-gold/40 flex items-center justify-center shadow-lg">
          <Compass className="w-10 h-10 text-brand-primary" />
        </div>
        <span className="absolute -bottom-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-brand-bg text-brand-gold border border-brand-gold/40">
          Error 404
        </span>
      </div>

      {/* Narrativa temática */}
      <div className="space-y-2 max-w-md">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-primary">
          Sendero Extraviado
          <CircleExclamationPoint className="w-3.5 h-3.5" />
        </span>
        <h1 className="font-display font-black text-2xl sm:text-3xl text-brand-gold uppercase tracking-wider">
          Nuestros mapas no marcan esta ruta
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
          Parece que te desviaste del camino hacia la taberna. La página que buscas no existe o fue movida de lugar.
        </p>
      </div>

      {/* Acciones de recuperación */}
      <div className="w-full max-w-xs sm:max-w-md flex flex-col sm:flex-row gap-3 pt-2">
        <Link
          to="/"
          className="flex-1 py-3.5 px-5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-brand-bg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition active:scale-95"
        >
          <UtensilsCrossed className="w-4 h-4" />
          <span>Volver al Menú</span>
        </Link>

        <Link
          to="/eventos"
          className="flex-1 py-3.5 px-5 rounded-xl bg-brand-surface hover:bg-brand-mahogany/50 text-brand-gold border border-brand-gold/40 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition active:scale-95"
        >
          <Calendar className="w-4 h-4 text-brand-primary" />
          <span>Cotizar Evento</span>
        </Link>
      </div>
    </div>
  );
};