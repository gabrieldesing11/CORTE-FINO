import React from 'react';
import { BARBERS } from '../data/mockData';
import { ShieldCheck, Award, Coffee, Sparkles, Scissors, Clock } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const pillars = [
    {
      icon: <Scissors className="w-6 h-6 text-[#A88958]" />,
      title: 'Técnica & Visagismo',
      description: 'Estudiamos la estructura ósea de tu rostro y tipo de crecimiento para diseñar un corte que mantenga su forma semana tras semana.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#A88958]" />,
      title: 'Esterilización y Seguridad',
      description: 'Navajas libres descartables por cliente y desinfección ultravioleta de peines, tijeras y máquinas entre cada turno.',
    },
    {
      icon: <Coffee className="w-6 h-6 text-[#A88958]" />,
      title: 'Hospitalidad Exclusiva',
      description: 'Disfruta de café espresso de especialidad, bebidas frías, sillones de barbero de cuero reclinables y toallas calientes.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#A88958]" />,
      title: 'Cero Filas, Cero Esperas',
      description: 'Tu tiempo es valioso. Al registrar tu cita online tu silla está lista puntualmente a la hora acordada.',
    },
  ];

  return (
    <section id="experiencia" className="py-24 bg-[#141618] relative border-t border-[#262A30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#A88958] mb-3">
            <Award className="w-4 h-4 text-[#A88958]" />
            <span>El Estándar Corte Fino</span>
          </div>

          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-[#E8E1D5] uppercase tracking-wide mb-4">
            Tradición, Precisión & Confort
          </h2>

          <p className="text-sm sm:text-base text-[#7E868D] leading-relaxed">
            No somos una peluquería convencional; somos un espacio dedicado al perfeccionamiento del estilo personal masculino, donde cada detalle ha sido concebido para tu bienestar.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#1A1D20] border border-[#2A2F35] p-6 rounded-lg flex flex-col justify-between hover:border-[#A88958]/40 transition-colors"
            >
              <div>
                <div className="w-12 h-12 rounded bg-[#17191C] border border-[#A88958]/30 flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-[#E8E1D5] uppercase tracking-wide mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#7E868D] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Master Barbers Showcase */}
        <div className="bg-[#17191C] border border-[#2A2F35] rounded-xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#A88958] block mb-2">
              El Equipo de Apertura
            </span>
            <h3 className="font-heading font-bold text-3xl sm:text-4xl text-[#E8E1D5] uppercase mb-3">
              Maestros del Oficio
            </h3>
            <p className="text-xs sm:text-sm text-[#7E868D]">
              Profesionales dedicados que dominan las técnicas clásicas de navaja y las últimas tendencias contemporáneas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BARBERS.map((barber) => (
              <div
                key={barber.id}
                className="bg-[#1F2226] border border-[#2A2F35] p-6 rounded-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#17191C] border-2 border-[#A88958] flex items-center justify-center font-heading font-bold text-sm text-[#A88958]">
                      {barber.avatar}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-[#E8E1D5] uppercase">
                        {barber.name}
                      </h4>
                      <p className="text-[11px] text-[#A88958] font-medium">{barber.role}</p>
                    </div>
                  </div>

                  <div className="text-xs text-[#7E868D] mb-3">
                    <span className="text-[#C8C1B4] font-medium">Experiencia:</span> {barber.experience}
                  </div>

                  <p className="text-xs text-[#C8C1B4] leading-relaxed">
                    {barber.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
