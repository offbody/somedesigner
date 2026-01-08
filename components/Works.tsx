
import React, { useState, useEffect, useRef } from 'react';

interface Project {
  id: string;
  title: string;
  typeEN: string;
  typeRU: string;
  image: string;
  color: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'TWICE',
    typeEN: 'Interaction & Development',
    typeRU: 'Интерактив и Разработка',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    color: '#3b82f6'
  },
  {
    id: '02',
    title: 'The Damai',
    typeEN: 'Design & Development',
    typeRU: 'Дизайн и Разработка',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    color: '#eab308'
  },
  {
    id: '03',
    title: 'Fabric',
    typeEN: 'Design & Research',
    typeRU: 'Дизайн и Исследования',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    color: '#ef4444'
  },
  {
    id: '04',
    title: 'Atypikal',
    typeEN: 'Branding & UI UX',
    typeRU: 'Брендинг и UI/UX',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    color: '#8b5cf6'
  }
];

interface WorksProps {
  lang: 'RU' | 'EN';
}

export const Works: React.FC<WorksProps> = ({ lang }) => {
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
            <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.2] font-normal tracking-tight max-w-3xl">
              {lang === 'RU' 
                ? 'Помогаю брендам в достижении поставленных целей в динамично развивающейся цифровой среде'
                : 'Helping brands achieve their goals in a rapidly evolving digital environment'}
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-lg opacity-60 font-light max-w-xs mb-8">
              {lang === 'RU'
                ? 'Продукты с фокусом на пользовательские исследования и data-driven подход'
                : 'Products with a focus on user research and data-driven approach'}
            </p>
            <button className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#1c1d20] text-white flex items-center justify-center text-sm font-medium transition-transform duration-500 hover:scale-110 active:scale-95 uppercase tracking-wider">
              {lang === 'RU' ? 'Обо мне' : 'About me'}
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
                className="group relative flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-14 border-b border-black/10 cursor-pointer transition-all duration-500 hover:opacity-30 active:opacity-10"
              >
                <div className="flex items-center gap-6">
                   <span className="text-xs font-mono opacity-20 group-hover:opacity-100 transition-opacity">{project.id}</span>
                   <h3 className="text-4xl md:text-8xl lg:text-[7vw] font-normal tracking-tighter transition-transform duration-500 group-hover:translate-x-4">
                    {project.title}
                  </h3>
                </div>
                <span className="text-sm font-medium opacity-40 mt-4 md:mt-0 uppercase tracking-widest group-hover:translate-x-[-1rem] transition-transform duration-500">
                  {lang === 'RU' ? project.typeRU : project.typeEN}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
           <button className="px-10 py-5 border border-black/10 rounded-full hover:bg-[#1c1d20] hover:text-white transition-all duration-300 text-sm font-medium uppercase tracking-widest">
            {lang === 'RU' ? 'Все проекты' : 'More work'}
           </button>
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

        <div 
          className="absolute z-10 w-20 h-20 rounded-full flex items-center justify-center text-white text-[10px] font-bold uppercase tracking-widest transition-transform duration-300"
          style={{ 
            backgroundColor: '#8b5cf6',
            transform: `scale(${activeProject !== null ? 1 : 0})` 
          }}
        >
          {lang === 'RU' ? 'Смотреть' : 'View'}
        </div>
      </div>
    </section>
  );
};
