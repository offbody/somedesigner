
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { LocationBadge } from './components/LocationBadge';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden">
      {/* Background Image Container - Removed grayscale and adjusted opacity for clarity */}
      <div 
        className={`absolute inset-0 z-0 bg-cover bg-center transition-all duration-[2500ms] ease-out
          ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110 blur-xl'}
        `}
        style={{ 
          backgroundImage: `url('https://raw.githubusercontent.com/woodhouserec/somedesigner-ru/main/main-bg.png')`, 
          backgroundPosition: '50% 20%'
        }}
      />
      
      {/* Film Grain Texture Overlay - Kept very subtle for texture without obscuring photo */}
      <div className="absolute inset-0 z-[1] opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* REMOVED Subtle Gradient Overlay that was darkening the photo */}

      {/* Main Content Layout */}
      <div className={`relative z-10 flex flex-col min-h-screen transition-all duration-[1500ms] delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <Navbar />
        
        <main className="flex-grow flex items-center px-10 relative">
          <LocationBadge />
          <Hero />
        </main>

        <footer className="pb-6 pt-4">
          <Marquee text="Igor Bogdanov / Somedesigner /" />
        </footer>
      </div>
    </div>
  );
};

export default App;
