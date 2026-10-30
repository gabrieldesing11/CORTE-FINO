import React, { useState } from 'react';
import { PRODUCTS } from '../data/mockData';
import { Product } from '../types';
import { ShoppingBag, Star, Sparkles, Check, PackageCheck } from 'lucide-react';

interface ProductsSectionProps {
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onAddToCart,
  onBuyNow,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'fijacion' | 'barba' | 'afeitado' | 'accesorios'>('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Todos los Productos' },
    { id: 'fijacion', label: 'Pomadas & Ceras' },
    { id: 'barba', label: 'Cuidado Barba' },
    { id: 'afeitado', label: 'Post-Afeitado' },
    { id: 'accesorios', label: 'Accesorios & Kits' },
  ] as const;

  // Custom visual icon renderer for products
  const renderProductGraphic = (product: Product) => {
    switch (product.imageIcon) {
      case 'jar':
        return (
          <svg className="w-16 h-16 text-[#A88958]" viewBox="0 0 64 64" fill="none">
            <rect x="14" y="24" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="2.5" />
            <line x1="12" y1="20" x2="52" y2="20" stroke="#E8E1D5" strokeWidth="3" strokeLinecap="round" />
            <path d="M22 36H42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="32" cy="42" r="2" fill="#E8E1D5" />
          </svg>
        );
      case 'dropper':
        return (
          <svg className="w-16 h-16 text-[#A88958]" viewBox="0 0 64 64" fill="none">
            <rect x="20" y="24" width="24" height="30" rx="3" stroke="currentColor" strokeWidth="2.5" />
            <rect x="27" y="16" width="10" height="8" stroke="#E8E1D5" strokeWidth="2" />
            <path d="M30 8 C30 6 34 6 34 8 L34 16 L30 16 Z" fill="currentColor" />
            <path d="M26 38 Q32 32 38 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 'lotion':
        return (
          <svg className="w-16 h-16 text-[#A88958]" viewBox="0 0 64 64" fill="none">
            <rect x="22" y="26" width="20" height="30" rx="4" stroke="currentColor" strokeWidth="2.5" />
            <path d="M32 16 L32 26" stroke="#E8E1D5" strokeWidth="2.5" />
            <path d="M26 16 L38 16" stroke="#E8E1D5" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M38 16 C41 16 43 14 43 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 'comb':
        return (
          <svg className="w-16 h-16 text-[#A88958]" viewBox="0 0 64 64" fill="none">
            <rect x="12" y="22" width="40" height="8" rx="2" stroke="#E8E1D5" strokeWidth="2.5" />
            <line x1="16" y1="30" x2="16" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="22" y1="30" x2="22" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="30" x2="28" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="34" y1="30" x2="34" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="40" y1="30" x2="40" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="46" y1="30" x2="46" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      default:
        return (
          <svg className="w-16 h-16 text-[#A88958]" viewBox="0 0 64 64" fill="none">
            <rect x="14" y="16" width="36" height="34" rx="2" stroke="currentColor" strokeWidth="2.5" />
            <line x1="14" y1="26" x2="50" y2="26" stroke="#E8E1D5" strokeWidth="2" />
            <line x1="32" y1="16" x2="32" y2="50" stroke="currentColor" strokeWidth="2" />
          </svg>
        );
    }
  };

  return (
    <section id="productos" className="py-24 bg-[#141618] relative border-t border-[#262A30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#A88958] mb-3">
            <ShoppingBag className="w-4 h-4 text-[#A88958]" />
            <span>Línea Cosmética Masculina</span>
          </div>

          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-[#E8E1D5] uppercase tracking-wide mb-4">
            Productos Corte Fino
          </h2>

          <p className="text-sm sm:text-base text-[#7E868D] leading-relaxed">
            Formulados en colaboración con maestros barberos. Ingredientes botánicos naturales, fijación duradera y aromas amaderados sobrios que definen tu presencia diaria.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-[#1F2226] border border-[#2D3238] rounded-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-4 py-2 text-xs font-heading font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#A88958] text-[#17191C] shadow-sm'
                    : 'text-[#C8C1B4] hover:text-[#E8E1D5] hover:bg-[#2A2F35]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="flex flex-col justify-between bg-[#1A1D20] border border-[#2A2F35] hover:border-[#A88958]/50 rounded-lg p-6 sm:p-7 transition-all duration-200 group"
              >
                <div>
                  {/* Visual Header / Showcase with Reference Image */}
                  <div className="relative w-full h-48 bg-[#101214] rounded-md border border-[#262A30] overflow-hidden mb-5 group-hover:border-[#A88958]/50 transition-colors">
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        {renderProductGraphic(product)}
                        <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-[#7E868D] mt-2">
                          Corte Fino Grooming
                        </span>
                      </div>
                    )}

                    {/* Gradient Overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Corner Size Pill (quiet unboxed metadata) */}
                    <div className="absolute top-3 right-3 text-[11px] text-[#E8E1D5] bg-[#17191C]/85 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-[#A88958]/40 font-mono tabular-nums shadow-sm">
                      {product.size}
                    </div>

                    {/* Original discount badge if applicable */}
                    {product.originalPrice && (
                      <div className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider text-[#17191C] bg-[#A88958] px-2 py-0.5 rounded-sm shadow-md">
                        Lanzamiento
                      </div>
                    )}
                  </div>

                  {/* Metadata Row */}
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs text-[#7E868D]">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#A88958] text-[#A88958]" />
                      <span className="font-semibold text-[#E8E1D5] tabular-nums">{product.rating}</span>
                      <span>(Reseñas verificadas)</span>
                    </div>
                    <span className="text-[#A88958] font-medium">Disponible</span>
                  </div>

                  {/* Product Title */}
                  <h3 className="font-heading font-bold text-xl text-[#E8E1D5] uppercase tracking-wide mb-2 group-hover:text-[#A88958] transition-colors">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-heading font-bold text-2xl text-[#E8E1D5] tabular-nums">
                      ${product.price.toLocaleString('es-CO')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-[#7E868D] line-through tabular-nums">
                        ${product.originalPrice.toLocaleString('es-CO')}
                      </span>
                    )}
                    <span className="text-[11px] text-[#7E868D] uppercase font-medium">COP</span>
                  </div>

                  <p className="text-xs text-[#C8C1B4] leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-1.5 mb-6">
                    {product.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-[#7E868D]">
                        <Check className="w-3 h-3 text-[#A88958] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#262A30]">
                  <button
                    onClick={() => onAddToCart(product)}
                    type="button"
                    className="py-2.5 px-3 bg-[#262A30] hover:bg-[#2F343C] text-[#E8E1D5] border border-[#3A4048] hover:border-[#A88958]/50 text-xs font-heading font-bold uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#A88958]" />
                    <span>Añadir</span>
                  </button>

                  <button
                    onClick={() => onBuyNow(product)}
                    type="button"
                    className="py-2.5 px-3 bg-[#A88958] hover:bg-[#C4A573] text-[#17191C] text-xs font-heading font-bold uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <PackageCheck className="w-3.5 h-3.5" />
                    <span>Comprar</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
