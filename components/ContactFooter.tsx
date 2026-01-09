
import React from 'react';

interface ContactFooterProps {
  lang: 'RU' | 'EN';
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ lang }) => {
  return (
    <section className="bg-[#1c1d20] text-white pt-48 pb-24 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-16 mb-40">
          <div className="flex items-center gap-6 md:gap-12">
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0">
               <img 
                 src="https://raw.githubusercontent.com/offbody/somedesigner/main/main-bg.png" 
                 alt="Igor Bogdanov" 
                 className="w-full h-full object-cover scale-150 grayscale brightness-125"
               />
            </div>
            {/* Уменьшен размер шрифта с text-8xl/8vw до text-7xl/6.5vw для компактности */}
            <h2 className="text-5xl md:text-7xl lg:text-[6.5vw] font-normal tracking-tighter leading-[0.9] whitespace-nowrap">
              {lang === 'RU' ? 'Давайте работать' : "Let's work"}<br/>
              <span className="opacity-40">{lang === 'RU' ? 'вместе' : 'together'}</span>
            </h2>
          </div>
          
          <div className="relative group self-end lg:self-center">
             <div className="absolute -inset-10 bg-[#455ce9] rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition duration-1000"></div>
             <button className="relative w-44 h-44 md:w-64 md:h-64 rounded-full bg-[#455ce9] text-white flex items-center justify-center text-sm md:text-xl font-medium transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] hover:scale-110 active:scale-95 group-hover:bg-[#3449cc] uppercase tracking-widest overflow-hidden">
                <span className="relative z-10">{lang === 'RU' ? 'Связаться' : 'Get in touch'}</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-24 border-t border-white/10">
           <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <a href="mailto:hello@somedesigner.ru" className="text-lg md:text-2xl font-light hover:opacity-50 transition-opacity border border-white/10 rounded-full px-12 py-6 w-fit inline-block">
                hello@somedesigner.ru
              </a>
              <a href="tel:+79991234567" className="text-lg md:text-2xl font-light hover:opacity-50 transition-opacity border border-white/10 rounded-full px-12 py-6 w-fit inline-block">
                +7 999 123 45 67
              </a>
           </div>
           
           <div className="flex flex-col justify-end items-start md:items-end gap-2 opacity-30 text-[10px] uppercase tracking-[0.3em] font-bold">
              <div className="flex flex-col items-start md:items-end leading-relaxed">
                <p>Location: Remote / Moscow</p>
                <p>Local Time: 14:42 GMT+3</p>
              </div>
           </div>
        </div>
      </div>
      
      <div className="absolute -bottom-1/4 -right-1/4 w-[80vw] h-[80vw] bg-white opacity-[0.015] rounded-full pointer-events-none"></div>
    </section>
  );
};
