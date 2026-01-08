
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="w-full flex justify-end items-center pr-0">
      <div className="max-w-4xl text-white mix-blend-difference text-right">
        {/* Action Button */}
        <div className="mb-10 flex justify-end">
          <div className="group relative cursor-pointer">
            <div className="absolute -inset-2 bg-white/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-transform duration-500 group-hover:rotate-12">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-45">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Headlines */}
        <div className="relative overflow-visible">
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight leading-[0.8] mb-4 tracking-tighter uppercase">
            UI/UX
          </h1>
        </div>
        
        <div className="relative overflow-visible">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] opacity-80 tracking-tighter block not-italic">
            Designer & Analyst
          </h2>
        </div>
        
        <p className="mt-8 text-sm md:text-base font-light opacity-50 max-w-sm ml-auto leading-relaxed tracking-wide uppercase">
          Creating digital experiences through meticulous research and high-end aesthetic execution.
        </p>
      </div>
    </div>
  );
};
