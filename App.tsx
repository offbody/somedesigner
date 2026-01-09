
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { LocationBadge } from './components/LocationBadge';
import { Works } from './components/Works';
import { ProjectPage } from './components/ProjectPage';

interface Project {
  id: string;
  title: string;
  typeEN: string;
  typeRU: string;
  image: string;
  color: string;
}

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [lang, setLang] = useState<'RU' | 'EN'>('RU');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] overflow-x-hidden">
      {/* Project Detail Overlay */}
      {selectedProject && (
        <ProjectPage 
            project={selectedProject} 
            lang={lang} 
            onBack={() => setSelectedProject(null)} 
        />
      )}

      {/* Background Image Container */}
      <div 
        className={`fixed inset-0 z-0 bg-cover bg-center transition-opacity duration-[1200ms] cubic-bezier(0.22, 1, 0.36, 1)
          ${isLoaded 
            ? 'opacity-100 brightness-100 contrast-100 [clip-path:circle(150%_at_50%_50%)]' 
            : 'opacity-0 brightness-150 contrast-125 [clip-path:circle(0%_at_50%_50%)]'
          }
        `}
        style={{ 
          backgroundImage: `url('https://raw.githubusercontent.com/offbody/somedesigner/main/main-bg.png')`, 
          backgroundPosition: '50% 20%',
          willChange: 'opacity'
        }}
      />
      
      {/* Film Grain Texture Overlay */}
      <div className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Hero Section Container */}
      <div className={`relative z-10 flex flex-col min-h-screen transition-all duration-[800ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 blur-sm'}`}>
        <Navbar lang={lang} toggleLang={() => setLang(l => l === 'RU' ? 'EN' : 'RU')} />
        
        <main className="flex-grow flex items-center px-10 relative">
          <LocationBadge lang={lang} />
          <Hero lang={lang} />
        </main>

        <footer className="relative pb-0 pt-4 overflow-visible">
          <Marquee text={lang === 'RU' ? 'Игорь Богданов / Somedesigner /' : 'Igor Bogdanov / Somedesigner /'} />
          
          <div 
            className="w-full h-[340px] pointer-events-none"
            style={{
              background: 'rgba(156, 166, 166, 0.01)',
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)'
            }}
          />
        </footer>
      </div>

      {/* Interactive Works Section */}
      <div className="relative z-20 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <Works lang={lang} onProjectClick={(p) => setSelectedProject(p)} />
      </div>

      {/* Final Marquee or Footer */}
      <div className="relative z-20 bg-white py-20 overflow-hidden">
          <div className="h-[1px] w-full bg-gray-100"></div>
          <div className="mt-10 opacity-30">
            <Marquee text={lang === 'RU' ? 'Давайте создавать великое /' : "Let's build something great /"} />
          </div>
          <div className="flex justify-center mt-20 pb-10">
            <p className="text-black/40 text-sm font-light">© 2024 Somedesigner. {lang === 'RU' ? 'Все права защищены.' : 'All rights reserved.'}</p>
          </div>
      </div>
    </div>
  );
};

export default App;
