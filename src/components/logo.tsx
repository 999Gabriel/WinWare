import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="relative group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <title>WinWare Overlapping W's Logo</title>
        {/* First W */}
        <path d="M4 6l3 12l3-8l3 8l3-12" strokeOpacity="0.8" />
        {/* Second W slightly offset */}
        <path d="M2 8l3 12l3-8l3 8l3-12" strokeOpacity="1" />
      </svg>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-full">
        <div className="absolute top-0 left-0 w-8 h-16 bg-white/20 -skew-x-12 transform -translate-x-12 group-hover:translate-x-32 transition-transform duration-1000" style={{ filter: 'blur(10px)' }}></div>
      </div>
    </div>
  );
}

export function AnimatedLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="relative group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className={cn("w-48 h-48 md:w-64 md:h-64", props.className)}
      >
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="7" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path 
          d="M 50 50 L 70 150 L 100 80 L 130 150 L 150 50" 
          stroke="url(#gold-gradient)" 
          strokeWidth="8" 
          fill="none" 
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:animate-[pulse_2s_ease-in-out_infinite]"
          style={{ filter: 'url(#glow)' }}
        />
      </svg>
      <div className="absolute inset-0 overflow-hidden">
         <div className="absolute top-0 left-0 w-16 h-full bg-white/10 transform -skew-x-12 -translate-x-24 animate-shimmer" style={{ filter: 'blur(30px)' }}></div>
      </div>
    </div>
  );
}
