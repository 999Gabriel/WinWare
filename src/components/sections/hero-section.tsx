'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { ClientOnly3dLogo } from '@/components/shared/client-only-3d-logo';


export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-primary/5 [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      
      <div className="z-10 animate-[fadeIn_1s_ease-in-out] w-full max-w-2xl h-96 md:h-[450px]">
        <ClientOnly3dLogo />
      </div>
      
      <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl mt-4 tracking-tighter animate-[fadeIn_1.2s_ease-in-out_forwards] opacity-0">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-accent">Tailored Software.</span>
        <br />
        <span className="text-foreground">Timeless Impact.</span>
      </h1>
      
      <p className="mt-6 max-w-2xl text-lg md:text-xl text-foreground/70 animate-[fadeIn_1.4s_ease-in-out_forwards] opacity-0">
        WinWare crafts bespoke digital solutions that define industries and deliver enduring value. We are the architects of your digital legacy.
      </p>

      <div className="mt-10 animate-[fadeIn_1.6s_ease-in-out_forwards] opacity-0">
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg hover:shadow-accent/40 transform hover:scale-105">
          <Link href="#contact">
            Begin Your Ascent
          </Link>
        </Button>
      </div>

       <Link href="#about" className="absolute bottom-10 animate-bounce" aria-label="Scroll to about section">
         <ArrowDown className="h-8 w-8 text-primary/50" />
       </Link>

    </section>
  );
}
