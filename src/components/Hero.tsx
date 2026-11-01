import React from 'react';
import { CalendarCheck, ShoppingBag, Eye, MapPin, Clock, Scissors, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenStore: () => void;
  onOpenFlyer: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenStore,
  onOpenFlyer,
}) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#17191C] overflow-hidden"
    >
      {/* Subtle Background Lighting & Geometric Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#A88958]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-black/60 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Hairline Grid Matrix */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #A88958 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Statement & Primary Action */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Launch Status Kicker (Anti-slop: clean text with separator, no pill badges) */}
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#A88958] font-medium mb-4">
              <span className="flex items-center gap-1.5 font-bold">
                <Scissors className="w-3.5 h-3.5 text-[#A88958]" />
                Lanzamiento Oficial
              </span>
              <span className="text-[#555B60]">·</span>
              <span className="text-[#C8C1B4]">Bogotá D.C.</span>
              <span className="text-[#555B60]">·</span>
              <span className="text-[#C8C1B4]">Apertura 2026</span>
            </div>

            {/* Official Brand Headline */}
            <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#E8E1D5] uppercase leading-[0.92] mb-3">
              CORTE FINO
            </h1>

            {/* Sub-Brand Tagline */}
            <p className="font-heading text-xl sm:text-2xl md:text-3xl tracking-[0.14em] text-[#A88958] uppercase font-semibold mb-6">
              Tu Estilo, Con Precisión
            </p>

            {/* Required Subtitle */}
            <p className="text-lg sm:text-xl text-[#E8E1D5] font-medium max-w-xl mb-4 leading-relaxed">
              Reserva tu cita y no esperes más
            </p>

            {/* Editorial Context */}
            <p className="text-sm sm:text-base text-[#7E868D] max-w-xl mb-8 leading-relaxed">
              Llega a Bogotá el nuevo templo de la barbería de alta precisión. Tijeras de acero templado, navaja tradicional, toallas calientes al vapor y una línea exclusiva de cuidado masculino creada para caballeros que no negocian su imagen.
            </p>

            {/* Call To Action Button Group: [Registrarme] and [COMPRAR] */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenBooking}
                type="button"
                className="px-8 py-4 bg-[#A88958] hover:bg-[#C4A573] active:bg-[#8B6E3F] text-[#17191C] font-heading font-bold text-base tracking-wider uppercase rounded-sm shadow-xl shadow-[#A88958]/25 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-3 text-center"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Registrarme</span>
              </button>

              <button
                onClick={onOpenStore}
                type="button"
                className="px-8 py-4 bg-transparent hover:bg-[#E8E1D5]/10 text-[#E8E1D5] border border-[#A88958]/60 hover:border-[#A88958] font-heading font-bold text-base tracking-wider uppercase rounded-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-3 text-center"
              >
                <ShoppingBag className="w-5 h-5 text-[#A88958]" />
                <span>COMPRAR</span>
              </button>
            </div>

            {/* Quick Proof & Location Strip */}
            <div className="pt-6 border-t border-[#2A2F35] grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 w-full max-w-2xl">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#7E868D] uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#A88958]" />
                  <span>Sede</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#E8E1D5]">
                  Cra. 10 #20-30, Bogotá
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#7E868D] uppercase tracking-wider mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#A88958]" />
                  <span>Horario</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#E8E1D5]">
                  Lun a Sáb, 9 am – 8 pm
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-xs text-[#7E868D] uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A88958]" />
                  <span>Atención</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#A88958] font-heading font-bold uppercase tracking-wider">
                  Cero Filas · Cita VIP
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Poster Card & Official Flyer Integration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#A88958]/30 via-transparent to-[#A88958]/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-70 group-hover:opacity-100" />

              {/* Framed Poster Container */}
              <div className="relative bg-[#1A1D20] border-2 border-[#A88958]/60 p-2 sm:p-3 rounded-lg shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
                {/* Image */}
                <div className="relative overflow-hidden rounded bg-[#101214] aspect-[3/4]">
                  <img
                    src="images/afiche_lanzamiento.png"
                    alt="Corte Fino Barbería - Afiche Oficial Promoción de Apertura Corte y Barba 24000"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Overlay Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                  {/* Corner Accent Marks */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#A88958]" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#A88958]" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#A88958]" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#A88958]" />

                  {/* Zoom / Lightbox Trigger */}
                  <button
                    onClick={onOpenFlyer}
                    type="button"
                    className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center cursor-pointer focus:outline-none"
                    title="Click para ver afiche completo en alta resolución"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-[#17191C]/90 border border-[#A88958] text-[#E8E1D5] text-xs font-heading font-semibold uppercase tracking-wider rounded-sm flex items-center gap-2 shadow-lg backdrop-blur-sm">
                      <Eye className="w-4 h-4 text-[#A88958]" />
                      Ver Afiche Completo
                    </span>
                  </button>

                  {/* Badge on Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 text-center pointer-events-none">
                    <span className="inline-block px-3 py-1 bg-[#17191C]/90 border border-[#A88958]/60 text-[#E8E1D5] text-[11px] font-heading font-bold tracking-widest uppercase">
                      PROMO APERTURA: CORTE + BARBA $24.000!
                    </span>
                  </div>
                </div>

                {/* Sub-card Quick Action */}
                <div className="pt-3 px-1 flex items-center justify-between text-xs">
                  <span className="text-[#C8C1B4] font-medium">Afiche Oficial de Lanzamiento</span>
                  <button
                    onClick={onOpenFlyer}
                    type="button"
                    className="text-[#A88958] hover:text-[#C4A573] font-medium flex items-center gap-1 transition-colors"
                  >
                    Ampliar detalle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
