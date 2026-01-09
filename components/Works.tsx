
import React, { useState, useEffect, useRef } from 'react';

export const projects = [
  {
    id: '01',
    slug: 'sekundant',
    title: 'Секундант',
    typeEN: 'Interaction & Development',
    typeRU: 'Комплексный UI/UX для Deftech',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    color: '#3b82f6'
  },
  {
    id: '02',
    slug: 'zyxo',
    title: 'ZYXO',
    typeEN: 'Design & Development',
    typeRU: 'Лендинг для 1С-аутстаффа',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    color: '#eab308'
  },
  {
    id: '03',
    slug: 'telemost',
    title: 'Телемост',
    typeEN: 'Design & Research',
    typeRU: 'UI/UX приложения для конференц-связи',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    color: '#ef4444'
  },
  {
    id: '04',
    slug: 'voochi',
    title: 'VOOCHI',
    typeEN: 'Branding & UI UX',
    typeRU: 'UI/UX стартапа Фонда культурных инициатив',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    color: '#8b5cf6'
  }
];

interface WorksProps {
  lang: 'RU' | 'EN';
  onProjectClick?: (slug: string) => void;
}

export const Works: React.FC<WorksProps> = ({ lang, onProjectClick }) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      setSmoothPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.1,
        y: prev.y + (mousePos.y - prev.y) * 0.1
      }));
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mousePos]);

  return (
    <section id="work" className="relative w-full bg-[#f1f1f1] text-[#1a1a1a] py-40 px-6 md:px-20 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-32">
          <div className="lg:col-span-8">
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.1] font-normal tracking-tighter max-w-4xl">
              {lang === 'RU' 
                ? 'Помогаю брендам достигать цели в цифровой среде'
                : 'Helping brands achieve their goals in a digital environment'}
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-lg opacity-60 font-light max-w-xs mb-8">
              {lang === 'RU'
                ? 'Продукты с фокусом на пользовательские исследования и data-driven подход'
                : 'Products with a focus on user research and data-driven approach'}
            </p>
            <button className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#1c1d20] text-white flex items-center justify-center text-sm font-medium transition-transform duration-500 hover:scale-110 active:scale-95 uppercase tracking-wider text-center p-4">
              {lang === 'RU' ? 'Связь со мной' : 'Get in touch'}
            </button>
          </div>
        </div>

        <div className="relative mt-20 border-t border-black/10">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold py-6 opacity-30">
            {lang === 'RU' ? 'Недавние работы' : 'Recent Work'}
          </p>
          
          <div className="flex flex-col">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
                onClick={() => onProjectClick?.(project.slug)}
                className="group relative flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-14 border-b border-black/10 cursor-pointer transition-all duration-500 hover:opacity-30 active:opacity-10"
              >
                <div className="flex items-end gap-6 transition-transform duration-500 group-hover:translate-x-4">
                   <h3 className="text-4xl md:text-8xl lg:text-[7vw] font-normal tracking-tighter">
                    {project.title}
                  </h3>
                  <span className="text-xs md:text-sm opacity-20 group-hover:opacity-100 transition-opacity mb-2 md:mb-6">{project.id}</span>
                </div>
                <span className="text-sm font-medium opacity-40 mt-4 md:mt-0 uppercase tracking-widest group-hover:translate-x-[-1rem] transition-transform duration-500">
                  {lang === 'RU' ? project.typeRU : project.typeEN}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div 
        className="pointer-events-none fixed z-50 overflow-hidden bg-[#e1e1e1] flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{
          width: '350px',
          height: '350px',
          left: `${smoothPos.x}px`,
          top: `${smoothPos.y}px`,
          transform: `translate(-50%, -50%) scale(${activeProject !== null ? 1 : 0})`,
        }}
      >
        <div 
          className="absolute w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ transform: `translateY(-${(activeProject || 0) * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="w-full h-full p-4">
              <div className="w-full h-full overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute z-10 w-20 h-20 rounded-full flex items-center justify-center bg-violet-500 text-white text-[10px] font-bold uppercase tracking-widest">
          {lang === 'RU' ? 'Смотреть' : 'View'}
        </div>
      </div>
    </section>
  );
};
