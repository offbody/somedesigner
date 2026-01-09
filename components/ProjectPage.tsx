
import React, { useEffect } from 'react';

interface ProjectPageProps {
  project: {
    id: string;
    title: string;
    typeRU: string;
    typeEN: string;
    image: string;
  };
  lang: 'RU' | 'EN';
  onBack: () => void;
}

export const ProjectPage: React.FC<ProjectPageProps> = ({ project, lang, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
        document.body.style.overflow = 'auto';
    }, 1000);
    return () => {
        document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#f1f1f1] text-[#1c1d20] overflow-y-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]">
      {/* Navigation / Header */}
      <div className="flex justify-between items-center px-6 md:px-10 py-10">
        <button 
          onClick={onBack}
          className="group flex items-center gap-4 text-sm font-medium uppercase tracking-widest"
        >
          <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {lang === 'RU' ? 'Назад' : 'Back'}
        </button>
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">
          © 2024 Somedesigner
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto px-6 md:px-20 pt-20 pb-40">
        {/* Title Section */}
        <h1 className="text-[clamp(3.5rem,12vw,12rem)] leading-[0.9] font-normal tracking-tighter mb-20">
          {project.title}
        </h1>

        {/* Project Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-black/10 pt-10">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-4">Role / Services</p>
            <p className="text-lg font-medium">{lang === 'RU' ? project.typeRU : project.typeEN}</p>
          </div>
          <div className="md:col-span-4">
             <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-4">Location & Year</p>
             <p className="text-lg font-medium">Moscow, 2024</p>
          </div>
          <div className="md:col-span-4 flex flex-col justify-between items-start">
             <div className="mb-10">
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-4">Project Overview</p>
                <p className="text-xl opacity-80 leading-relaxed font-light">
                  {lang === 'RU' 
                    ? 'Глубокое погружение в пользовательский опыт, создание интерфейсов, которые не только выглядят эстетично, но и решают реальные бизнес-задачи.'
                    : 'A deep dive into user experience, creating interfaces that not only look aesthetic but also solve real business problems.'}
                </p>
             </div>
             <button className="px-8 py-4 bg-[#1c1d20] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                Live Site
             </button>
          </div>
        </div>

        {/* Big Hero Image */}
        <div className="mt-40 w-full aspect-[16/9] overflow-hidden bg-gray-200">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Secondary Content Section */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="aspect-[4/5] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="text-4xl tracking-tighter mb-8 font-light">
                    {lang === 'RU' ? 'Философия дизайна' : 'Design Philosophy'}
                </h3>
                <p className="text-xl opacity-60 leading-relaxed font-light">
                    {lang === 'RU' 
                        ? 'Мы верим, что каждая деталь имеет значение. От микро-взаимодействий до общей архитектуры системы — всё должно работать на пользователя.'
                        : 'We believe every detail matters. From micro-interactions to the overall system architecture — everything should work for the user.'}
                </p>
            </div>
        </div>

        {/* Footer Next Project Trigger */}
        <div className="mt-60 border-t border-black/10 pt-20 flex flex-col items-center">
             <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 mb-10">Next Case</p>
             <h4 className="text-[10vw] tracking-tighter hover:opacity-20 cursor-pointer transition-opacity">
                ZYXO
             </h4>
        </div>
      </main>
    </div>
  );
};
