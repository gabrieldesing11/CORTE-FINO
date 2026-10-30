import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { ShoppingBag, Menu, X, CalendarCheck, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenCart,
  cartCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Promoción', href: '#promocion' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Productos', href: '#productos' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Ubicación', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#17191C]/95 backdrop-blur-md border-b border-[#A88958]/20 shadow-xl shadow-black/40 py-3'
          : 'bg-gradient-to-b from-[#17191C]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#inicio"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A88958] rounded transition-opacity hover:opacity-90 shrink-0"
          >
            <BrandLogo size="md" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#C8C1B4]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap transition-colors duration-200 hover:text-[#E8E1D5] hover:underline underline-offset-8 decoration-[#A88958]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              type="button"
              className="relative p-2.5 rounded-lg text-[#E8E1D5] hover:text-[#A88958] hover:bg-[#202428] border border-transparent hover:border-[#A88958]/30 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A88958]"
              aria-label="Ver carrito de compras"
              title="Carrito de compras"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#A88958] text-[#17191C] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center font-oswald shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary Action Button: Registrarme / Reservar */}
            <button
              onClick={onOpenBooking}
              type="button"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#A88958] hover:bg-[#C4A573] active:bg-[#8B6E3F] text-[#17191C] font-heading font-bold text-sm tracking-wider uppercase rounded-sm shadow-md shadow-[#A88958]/20 transition-all duration-200 hover:scale-[1.02] cursor-pointer whitespace-nowrap shrink-0"
            >
              <CalendarCheck className="w-4 h-4 text-[#17191C]" />
              <span>Registrarme</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 text-[#E8E1D5] hover:text-[#A88958] hover:bg-[#202428] rounded-md transition-colors"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#17191C] border-b border-[#A88958]/30 px-6 py-6 mt-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#E8E1D5] hover:text-[#A88958] transition-colors py-1.5 border-b border-[#2A2F35]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#A88958] hover:bg-[#C4A573] text-[#17191C] font-heading font-bold text-sm tracking-wider uppercase rounded-sm transition-all"
              >
                <CalendarCheck className="w-4 h-4" />
                Registrarme / Agendar Cita
              </button>
              <a
                href="https://wa.me/573000000000?text=Hola%20Corte%20Fino,%20quisiera%20información%20sobre%20el%20lanzamiento%20y%20citas"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 border border-[#555B60] text-[#E8E1D5] hover:border-[#A88958] hover:text-[#A88958] text-xs font-medium rounded-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#A88958]" />
                WhatsApp 300 000 0000
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
