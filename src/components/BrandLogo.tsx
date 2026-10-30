import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-8',
    md: 'w-10 h-11',
    lg: 'w-14 h-16',
    xl: 'w-20 h-24',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Monogram Logo from user attachment */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <img
          src="/assets/aistudio/logo_sin_fondo_a5f7feae.png"
          alt="Corte Fino Barbería Logo"
          className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(168,137,88,0.25)] transition-transform duration-200 group-hover:scale-105"
        />
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-heading font-bold tracking-[0.16em] uppercase text-[#E8E1D5] transition-colors hover:text-[#A88958] ${titleSizes[size]}`}
        >
          CORTE FINO
        </span>
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="h-[1px] w-3 bg-[#A88958]/50" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#A88958] font-medium font-sans">
              BARBERÍA
            </span>
            <span className="h-[1px] w-3 bg-[#A88958]/50" />
          </div>
        )}
      </div>
    </div>
  );
};
