
import React from 'react';

interface MarqueeProps {
  text: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  const MarqueeContent = () => (
    <div className="flex items-center shrink-0">
      {Array.from({ length: 4 }).map((_, i) => (
        <span 
          key={i} 
          className="text-[12vw] leading-[1.2] font-normal text-white mix-blend-difference opacity-100 px-10 whitespace-nowrap tracking-tighter"
        >
          {text}
        </span>
      ))}
    </div>
  );

  return (
    <div className="w-full overflow-hidden border-t border-white/10 pt-4 pb-8 select-none flex">
      <div className="animate-marquee flex">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
};
