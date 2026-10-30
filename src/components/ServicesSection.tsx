import React, { useState } from 'react';
import { SERVICES } from '../data/mockData';
import { Service } from '../types';
import { Clock, Check, CalendarCheck, Sparkles, Scissors } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'corte' | 'barba' | 'combo' | 'ritual'>('all');

  const filteredServices = activeFilter === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeFilter);

  const filterTabs = [
    { id: 'all', label: 'Todos los Servicios' },
    { id: 'corte', label: 'Cortes & Fade' },
    { id: 'barba', label: 'Barba & Afeitado' },
    { id: 'combo', label: 'Combos & Promos' },
    { id: 'ritual', label: 'Rituales Spa' },
  ] as const;

  return (
    <section id="servicios" className="py-24 bg-[#17191C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#A88958] mb-3">
            <Scissors className="w-4 h-4 text-[#A88958]" />
            <span>Maestría y Técnica</span>
          </div>

          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-[#E8E1D5] uppercase tracking-wide mb-4">
            Servicios de Precisión
          </h2>

          <p className="text-sm sm:text-base text-[#7E868D] leading-relaxed">
            Cada servicio en Corte Fino es un protocolo riguroso de estilo. Combinamos navaja tradicional, tijera de precisión y cosmética masculina premium para garantizar un acabado impecable.
          </p>

          {/* Filter Bar (Interactive tabs conforming to frontend-design: buttons, not pill badge sandwiches) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-[#1F2226] border border-[#2D3238] rounded-md">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                type="button"
                className={`px-4 py-2 text-xs font-heading font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-[#A88958] text-[#17191C] shadow-sm'
                    : 'text-[#C8C1B4] hover:text-[#E8E1D5] hover:bg-[#2A2F35]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const isPromo = service.isPromo;

            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between p-6 sm:p-8 rounded-lg transition-all duration-200 border ${
                  isPromo
                    ? 'bg-[#1C2024] border-[#A88958] shadow-lg shadow-[#A88958]/10'
                    : 'bg-[#1F2226] border-[#2A2F35] hover:border-[#A88958]/50'
                }`}
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-[#2D3238]">
                    <div className="flex items-center gap-1.5 text-xs text-[#7E868D]">
                      <Clock className="w-3.5 h-3.5 text-[#A88958]" />
                      <span className="tabular-nums">{service.duration}</span>
                    </div>

                    {isPromo && (
                      <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#A88958] flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        Promo Apertura
                      </span>
                    )}
                  </div>

                  {/* Title and Price */}
                  <div className="flex items-baseline justify-between gap-3 mb-3">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#E8E1D5] uppercase tracking-wide leading-tight">
                      {service.name}
                    </h3>
                  </div>

                  <div className="mb-4">
                    <span className="font-heading font-bold text-3xl text-[#E8E1D5] tabular-nums">
                      ${service.price.toLocaleString('es-CO')}
                    </span>
                    <span className="text-xs text-[#7E868D] ml-1 uppercase font-medium">COP</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#C8C1B4] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-8">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#E8E1D5]">
                        <Check className="w-3.5 h-3.5 text-[#A88958] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action */}
                <button
                  onClick={() => onSelectService(service)}
                  type="button"
                  className={`w-full py-3 px-4 font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 ${
                    isPromo
                      ? 'bg-[#A88958] hover:bg-[#C4A573] text-[#17191C] shadow-md shadow-[#A88958]/20'
                      : 'bg-transparent border border-[#555B60] hover:border-[#A88958] text-[#E8E1D5] hover:text-[#A88958] hover:bg-[#262A30]'
                  }`}
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Agendar este Servicio</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
