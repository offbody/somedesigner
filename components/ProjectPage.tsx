
import React, { useEffect, useState } from 'react';
import { projects } from './Works';

interface ProjectPageProps {
  projectId: string;
  lang: 'RU' | 'EN';
  onBack: () => void;
  onNext: (nextId: string) => void;
}

export const ProjectPage: React.FC<ProjectPageProps> = ({ projectId, lang, onBack, onNext }) => {
  const [scrollY, setScrollY] = useState(0);
  const projectIndex = projects.findIndex(p => p.slug === projectId);
  const project = projects[projectIndex] || projects[0];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [projectId]);

  return (
    <div className="relative w-full bg-[#f1f1f1] text-[#1c1d20] selection:bg-[#1c1d20] selection:text-white">
      {/* Header / Nav simulation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-8 mix-blend-difference text-white">
        <button onClick={onBack} className="text-sm font-medium hover:opacity-50 transition-opacity uppercase tracking-widest">
          {lang === 'RU' ? '← Назад' : '← Back'}
        </button>
        <div className="text-xs opacity-50 uppercase tracking-widest">Somedesigner © 2026</div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-10 lg:px-20 max-w-[1800px] mx-auto">
        <h1 className="text-[clamp(3rem,10vw,12rem)] font-normal leading-[0.9] tracking-tighter mb-20">
          {project.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 py-10 border-t border-black/10">
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">{lang === 'RU' ? 'Роль' : 'Role'}</p>
              <p className="text-sm font-medium">UI/UX Design<br/>Art Direction</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">{lang === 'RU' ? 'Год' : 'Year'}</p>
              <p className="text-sm font-medium">2026</p>
            </div>
            <div className="col-span-2 pt-4">
              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">{lang === 'RU' ? 'Локация' : 'Location'}</p>
              <p className="text-sm font-medium">Remote / Moscow</p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              {lang === 'RU' 
                ? 'Глубокое погружение в пользовательский опыт и создание интуитивно понятных интерфейсов, которые решают бизнес-задачи.'
                : 'Deep dive into user experience and creation of intuitive interfaces that solve business problems.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Image Banner */}
      <section className="w-full h-[80vh] md:h-screen overflow-hidden bg-gray-200 relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover scale-110"
          style={{ transform: `translateY(${scrollY * 0.1}px) scale(1.1)` }}
        />
      </section>

      {/* Narrative Section */}
      <section className="py-40 px-6 md:px-10 lg:px-20 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-medium tracking-tight mb-6">
            {lang === 'RU' ? 'Концепция' : 'The Concept'}
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-xl opacity-60 font-light leading-relaxed">
            {lang === 'RU' 
              ? 'Каждый пиксель имеет значение. В этом проекте мы сфокусировались на минимизации когнитивной нагрузки и создании чистого визуального языка, который подчеркивает основной контент продукта.'
              : 'Every pixel matters. In this project, we focused on minimizing cognitive load and creating a clean visual language that emphasizes the core content of the product.'}
          </p>
        </div>
      </section>

      {/* Project Mockups (Placeholders) */}
      <section className="px-6 md:px-10 lg:px-20 pb-40 space-y-20">
        <div className="aspect-video w-full bg-zinc-200 overflow-hidden group">
           <div className="w-full h-full flex items-center justify-center text-zinc-400 text-xs tracking-widest uppercase">
             Placeholder: Primary Mockup
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           <div className="aspect-[4/5] bg-zinc-200 flex items-center justify-center text-zinc-400 text-xs tracking-widest uppercase">
             Secondary View A
           </div>
           <div className="aspect-[4/5] bg-zinc-200 flex items-center justify-center text-zinc-400 text-xs tracking-widest uppercase">
             Secondary View B
           </div>
        </div>

        <div className="aspect-[21/9] w-full bg-zinc-300 flex items-center justify-center text-zinc-400 text-xs tracking-widest uppercase">
          Full Width Process Image
        </div>
      </section>

      {/* Next Project Footer */}
      <section 
        onClick={() => onNext(nextProject.slug)}
        className="relative bg-[#1c1d20] text-white py-60 px-6 overflow-hidden cursor-pointer group"
      >
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] opacity-40 mb-10 group-hover:opacity-100 transition-opacity">
            {lang === 'RU' ? 'Следующий проект' : 'Next Project'}
          </p>
          <h2 className="text-[10vw] font-normal leading-none tracking-tighter group-hover:scale-105 transition-transform duration-700">
            {nextProject.title}
          </h2>
          
          <div className="mt-20 flex justify-center">
             <div className="w-40 h-40 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <span className="text-sm uppercase tracking-widest font-medium">
                   {lang === 'RU' ? 'Смотреть' : 'View'}
                </span>
             </div>
          </div>
        </div>

        {/* Animated Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] opacity-[0.02] font-bold whitespace-nowrap pointer-events-none select-none">
          {nextProject.title} {nextProject.title}
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-[#1c1d20] text-white/30 py-10 px-10 border-t border-white/5 flex justify-between text-[10px] uppercase tracking-widest">
        <div>Somedesigner © 2026</div>
        <div>{lang === 'RU' ? 'Дизайн и Разработка' : 'Design & Development'}</div>
      </footer>
    </div>
  );
};
