import React from 'react';
import { X, ExternalLink, CalendarCheck, Sparkles } from 'lucide-react';

interface FlyerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const FlyerModal: React.FC<FlyerModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-w-2xl w-full max-h-[92vh] bg-[#17191C] border border-[#A88958]/50 rounded-lg overflow-hidden shadow-2xl flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#2D3238] bg-[#1A1D20]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#A88958]" />
            <span className="font-heading font-semibold text-sm tracking-wider uppercase text-[#E8E1D5]">
              Afiche Oficial de Lanzamiento · Corte Fino
            </span>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1 text-[#C8C1B4] hover:text-[#E8E1D5] hover:bg-[#262A30] rounded transition-colors"
            aria-label="Cerrar vista"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Body */}
        <div className="flex-1 overflow-y-auto p-4 flex items-center justify-center bg-[#101214]">
          <img
            src="/assets/aistudio/BARBERIA_1cc31b59.png"
            alt="Corte Fino Barbería - Promoción de Apertura Corte + Barba 24.000 COP"
            className="w-full max-h-[70vh] object-contain rounded shadow-lg border border-[#A88958]/30"
          />
        </div>

        {/* Modal Footer with Actions */}
        <div className="px-5 py-4 border-t border-[#2D3238] bg-[#1A1D20] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#C8C1B4]">
            <span className="font-bold text-[#A88958]">Corte + Barba por $24.000</span> · Cra. 10 #20-30 Bogotá
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              type="button"
              className="px-5 py-2 bg-[#A88958] hover:bg-[#C4A573] text-[#17191C] font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              Agendar con esta Promo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
