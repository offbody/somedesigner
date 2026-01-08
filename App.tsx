import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { LocationBadge } from './components/LocationBadge';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Immediate trigger for the entrance animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden">
      {/* Background Image Container - Animation duration reduced to 1250ms (from 2500ms) */}
      <div 
        className={`absolute inset-0 z-0 bg-cover bg-center transition-all duration-[1250ms] ease-out
          ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110 blur-xl'}
        `}
        style={{ 
          backgroundImage: `url('https://raw.githubusercontent.com/offbody/somedesigner/main/main-bg.png')`, 
          backgroundPosition: '50% 20%'
        }}
      />
      
      {/* Film Grain Texture Overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Main Content Layout - Animation duration reduced to 750ms (from 1500ms) */}
      <div className={`relative z-10 flex flex-col min-h-screen transition-all duration-[750ms] delay-[400ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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