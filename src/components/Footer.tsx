import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Phone, Instagram, MapPin, Scissors, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121416] border-t border-[#262A30] text-[#7E868D] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#202428]">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-1">
            <BrandLogo size="md" className="mb-4" />
            <p className="text-xs text-[#7E868D] leading-relaxed mb-4">
              Corte Fino Barbería. Precisión, higiene y maestría en cada corte. La nueva referencia en cuidado masculino en Bogotá.
            </p>
            <div className="text-xs text-[#A88958] font-heading font-semibold tracking-wider uppercase">
              Tu Estilo, Con Precisión
            </div>
          </div>

          {/* Col 2: Enlaces Rápidos */}
          <div>
            <h4 className="font-heading font-bold text-sm text-[#E8E1D5] uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-[#A88958] transition-colors">
                  Inicio & Lanzamiento
                </a>
              </li>
              <li>
                <a href="#promocion" className="hover:text-[#A88958] transition-colors">
                  Promoción Corte + Barba ($24.000)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#A88958] transition-colors">
                  Carta de Servicios
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-[#A88958] transition-colors">
                  Línea de Productos Oficiales
                </a>
              </li>
              <li>
                <a href="#registro" className="hover:text-[#A88958] transition-colors">
                  Agendar Cita Online
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Ubicación y Horario */}
          <div>
            <h4 className="font-heading font-bold text-sm text-[#E8E1D5] uppercase tracking-wider mb-4">
              Sede Principal
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-[#C8C1B4]">Cra. 10 #20-30</p>
              <p>Bogotá D.C., Colombia</p>
              <p className="pt-2 text-[#C8C1B4]">Lunes a Sábado</p>
              <p>9:00 am – 8:00 pm</p>
            </div>
          </div>

          {/* Col 4: Contacto Directo */}
          <div>
            <h4 className="font-heading font-bold text-sm text-[#E8E1D5] uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href="https://wa.me/573000000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#E8E1D5] hover:text-[#A88958] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#A88958]" />
                <span>WhatsApp: 300 000 0000</span>
              </a>

              <a
                href="https://instagram.com/cortefino.barberia"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#E8E1D5] hover:text-[#A88958] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#A88958]" />
                <span>@cortefino.barberia</span>
              </a>

              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs text-[#A88958] hover:text-[#C4A573] transition-colors cursor-pointer"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Volver al inicio</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Corte Fino Barbería. Todos los derechos reservados.</p>
          <p className="text-[11px] text-[#555B60]">
            Diseño e Identidad Corporativa · Bogotá
          </p>
        </div>
      </div>
    </footer>
  );
};
