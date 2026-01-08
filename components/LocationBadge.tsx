
import React from 'react';

export const LocationBadge: React.FC = () => {
  return (
    <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 flex flex-col items-start gap-8 z-20">
      <div className="flex items-center gap-4 bg-white/5 border border-white/10 text-white rounded-full py-2 pl-6 pr-2 backdrop-blur-xl hover:bg-white/10 transition-colors cursor-default group">
        <div className="text-[10px] leading-tight font-medium uppercase tracking-[0.2em] opacity-70 text-left">
          Available<br/>Worldwide
        </div>
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border border-white/20 group-hover:scale-95 transition-transform">
           <svg className="w-5 h-5 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
           </svg>
        </div>
      </div>
      
      <div className="h-32 w-[1px] bg-gradient-to-b from-white/40 to-transparent ml-12"></div>
    </div>
  );
};
