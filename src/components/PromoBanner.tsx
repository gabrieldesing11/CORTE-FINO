import React, { useState, useEffect } from 'react';
import { Sparkles, CalendarCheck, Check, Clock, Coffee, ShieldAlert } from 'lucide-react';

interface PromoBannerProps {
  onClaimPromo: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onClaimPromo }) => {
  // Opening launch countdown timer (e.g. 5 days from now)
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 18,
    minutes: 42,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="promocion" className="py-20 bg-[#141618] relative overflow-hidden border-y border-[#262A30]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-[#A88958]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative bg-[#1A1D20] border-2 border-[#A88958] rounded-lg p-6 sm:p-10 lg:p-12 shadow-2xl">
          {/* Decorative Corner Anchors */}
          <div className="absolute -top-2.5 -left-2.5 w-5 h-5 bg-[#A88958] rotate-45" />
          <div className="absolute -top-2.5 -right-2.5 w-5 h-5 bg-[#A88958] rotate-45" />
          <div className="absolute -bottom-2.5 -left-2.5 w-5 h-5 bg-[#A88958] rotate-45" />
          <div className="absolute -bottom-2.5 -right-2.5 w-5 h-5 bg-[#A88958] rotate-45" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Visual Highlight Box mimicking the flyer's 24.000! */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 bg-[#17191C] border border-[#A88958]/40 rounded-sm">
              <span className="text-xs tracking-[0.25em] uppercase text-[#A88958] font-heading font-bold mb-2">
                TARIFAS DE LANZAMIENTO
              </span>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#E8E1D5] uppercase tracking-wide mb-3">
                CORTE + BARBA
              </h2>

              {/* The Gold Frame Price from Flyer */}
              <div className="my-3 px-8 py-4 border-2 border-[#A88958] bg-[#121416] w-full max-w-xs shadow-inner">
                <span className="font-heading font-bold text-5xl sm:text-6xl text-[#E8E1D5] tracking-tight tabular-nums block">
                  24.000!
                </span>
                <span className="text-[11px] text-[#A88958] uppercase tracking-widest font-semibold block mt-1">
                  Pesos Colombianos · COP
                </span>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#7E868D]">
                <Clock className="w-3.5 h-3.5 text-[#A88958]" />
                <span>Duración estimada: 45 minutos</span>
              </div>
            </div>

            {/* Right Column: Benefits & Urgency Timer */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#A88958] mb-2">
                  <Sparkles className="w-4 h-4 text-[#A88958]" />
                  <span>Oferta Especial de Apertura</span>
                </div>

                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#E8E1D5] uppercase tracking-wide mb-4">
                  RESERVA TU CITA Y EVITA LA ESPERA
                </h3>

                <p className="text-sm text-[#C8C1B4] leading-relaxed mb-6">
                  Celebramos la llegada de Corte Fino con un precio de bienvenida inigualable. Experimenta el servicio insignia de nuestra barbería con la máxima precisión, confort y atención personalizada.
                </p>

                {/* Features Included */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded-sm bg-[#A88958]/10 text-[#A88958] mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-[#E8E1D5]">Corte a tijera o degradado con navaja</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded-sm bg-[#A88958]/10 text-[#A88958] mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-[#E8E1D5]">Perfilado con toalla caliente aromatizada</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded-sm bg-[#A88958]/10 text-[#A88958] mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-[#E8E1D5]">Aceite nutritivo y peinado con pomada</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded-sm bg-[#A88958]/10 text-[#A88958] mt-0.5">
                      <Coffee className="w-3.5 h-3.5 text-[#A88958]" />
                    </div>
                    <span className="text-xs text-[#E8E1D5]">Café espresso de especialidad incluido</span>
                  </div>
                </div>
              </div>

              {/* Bottom: Countdown & CTA */}
              <div className="pt-6 border-t border-[#2A2F35] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#7E868D] block mb-2 font-medium">
                    Cupos promocionales restantes para la semana:
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="px-2.5 py-1.5 bg-[#17191C] border border-[#2A2F35] rounded-sm text-center">
                      <span className="font-heading font-bold text-sm text-[#E8E1D5] tabular-nums block">
                        0{timeLeft.days}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[#7E868D]">Días</span>
                    </div>
                    <span className="text-[#A88958] font-bold">:</span>
                    <div className="px-2.5 py-1.5 bg-[#17191C] border border-[#2A2F35] rounded-sm text-center">
                      <span className="font-heading font-bold text-sm text-[#E8E1D5] tabular-nums block">
                        {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[#7E868D]">Horas</span>
                    </div>
                    <span className="text-[#A88958] font-bold">:</span>
                    <div className="px-2.5 py-1.5 bg-[#17191C] border border-[#2A2F35] rounded-sm text-center">
                      <span className="font-heading font-bold text-sm text-[#E8E1D5] tabular-nums block">
                        {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[#7E868D]">Min</span>
                    </div>
                    <span className="text-[#A88958] font-bold">:</span>
                    <div className="px-2.5 py-1.5 bg-[#17191C] border border-[#2A2F35] rounded-sm text-center">
                      <span className="font-heading font-bold text-sm text-[#A88958] tabular-nums block">
                        {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[#7E868D]">Seg</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onClaimPromo}
                  type="button"
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#A88958] hover:bg-[#C4A573] active:bg-[#8B6E3F] text-[#17191C] font-heading font-bold text-sm uppercase tracking-wider rounded-sm shadow-lg shadow-[#A88958]/20 transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Aprovechar Promo $24.000</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
