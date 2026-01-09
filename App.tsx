
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { LocationBadge } from './components/LocationBadge';
import { Works } from './components/Works';
import { ProjectPage } from './components/ProjectPage';
import { ContactFooter } from './components/ContactFooter';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [lang, setLang] = useState<'RU' | 'EN'>('RU');
  const [currentPath, setCurrentPath] = useState<string>('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    
    const handlePopState = () => {
      const path = window.location.hash.replace('#/', '') || 'home';
      setCurrentPath(path);
      // При смене страницы прокручиваем вверх плавно
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Хэндлер для плавного скролла к якорям
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && !anchor.hash.startsWith('#/')) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = `#/${path}`;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPath !== 'home') {
    return (
      <div className="bg-[#f1f1f1] min-h-screen">
        <ProjectPage 
          projectId={currentPath} 
          lang={lang} 
          onBack={() => navigate('home')} 
          onNext={(nextId) => navigate(nextId)}
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] overflow-x-hidden">
      <div 
        className={`fixed inset-0 z-0 bg-cover bg-center transition-opacity duration-[1200ms]
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
        style={{ 
          backgroundImage: `url('https://raw.githubusercontent.com/offbody/somedesigner/main/main-bg.png')`, 
          backgroundPosition: '50% 20%',
        }}
      />
      
      <div className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className={`relative z-10 flex flex-col min-h-screen transition-all duration-[800ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 blur-sm'}`}>
        <Navbar lang={lang} toggleLang={() => setLang(l => l === 'RU' ? 'EN' : 'RU')} />
        
        <main className="flex-grow flex items-center px-10 relative">
          <LocationBadge lang={lang} />
          <Hero lang={lang} />
        </main>

        <footer className="pb-6 pt-4">
          <Marquee text={lang === 'RU' ? 'Игорь Богданов / Somedesigner /' : 'Igor Bogdanov / Somedesigner /'} />
        </footer>
      </div>

      <div className="relative z-20 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <Works lang={lang} onProjectClick={(id) => navigate(id)} />
        <ContactFooter lang={lang} />
      </div>

      <div className="relative z-20 bg-[#1c1d20] py-12 overflow-hidden border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center px-10 gap-6">
            <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">
              © 2026 Somedesigner. {lang === 'RU' ? 'Все права защищены.' : 'All rights reserved.'}
            </p>
            <div className="flex gap-8">
               <a href="#" className="text-white/30 text-[10px] font-bold hover:text-white transition-colors uppercase tracking-[0.2em]">LinkedIn</a>
               <a href="#" className="text-white/30 text-[10px] font-bold hover:text-white transition-colors uppercase tracking-[0.2em]">Behance</a>
               <a href="#" className="text-white/30 text-[10px] font-bold hover:text-white transition-colors uppercase tracking-[0.2em]">Dribbble</a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default App;
