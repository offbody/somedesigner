
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-8 text-white mix-blend-difference">
      <div className="flex items-center gap-3">
        <div className="text-sm font-medium tracking-tight">
          © Design & Code — Somedesigner
        </div>
        <div className="flex items-center gap-1.5 ml-4 px-2 py-0.5 border border-white/20 rounded-full">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
          </span>
          <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">Live</span>
        </div>
      </div>
      <div className="flex gap-10 text-sm font-medium">
        <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
        <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
        <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
      </div>
    </nav>
  );
};
