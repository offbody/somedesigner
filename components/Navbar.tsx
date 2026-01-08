
import React from 'react';

interface NavbarProps {
  lang: 'RU' | 'EN';
  toggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, toggleLang }) => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-8 text-white mix-blend-difference relative z-50">
      <div className="flex items-center gap-3">
        <div className="text-xs md:text-sm font-medium tracking-tight whitespace-nowrap">
          © {lang === 'RU' ? 'Дизайн и Код' : 'Design & Code'} — Somedesigner
        </div>
        <div className="hidden md:flex items-center gap-1.5 ml-4 px-2 py-0.5 border border-white/20 rounded-full">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
          </span>
          <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">
            {lang === 'RU' ? 'ГОТОВ К ЗАДАЧАМ' : 'OPEN TO WORK'}
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-6 md:gap-10 text-sm font-medium">
        <div className="hidden sm:flex gap-6 md:gap-10">
          <a href="#work" className="hover:opacity-60 transition-opacity uppercase tracking-widest text-[11px]">
            {lang === 'RU' ? 'Работы' : 'Work'}
          </a>
          <a href="#about" className="hover:opacity-60 transition-opacity uppercase tracking-widest text-[11px]">
            {lang === 'RU' ? 'Обо мне' : 'About'}
          </a>
        </div>
        
        {/* Language Toggle */}
        <button 
          onClick={toggleLang}
          className="flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
        >
          <span className={`text-[10px] font-bold ${lang === 'RU' ? 'opacity-100' : 'opacity-40'}`}>RU</span>
          <div className="w-[1px] h-3 bg-white/20 group-hover:bg-black/20"></div>
          <span className={`text-[10px] font-bold ${lang === 'EN' ? 'opacity-100' : 'opacity-40'}`}>EN</span>
        </button>
      </div>
    </nav>
  );
};
