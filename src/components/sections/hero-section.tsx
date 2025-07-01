'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import Animated3dLogo from '@/components/shared/animated-3d-logo';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="z-10 w-full max-w-2xl h-96 md:h-[450px] flex items-center justify-center"
      >
        <Animated3dLogo />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-headline text-4xl md:text-6xl lg:text-7xl mt-4 tracking-tighter"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-accent">WINWARE</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-6 max-w-2xl text-lg md:text-xl text-foreground/70"
      >
        TAILORED SOFTWARE. TIMELESS IMPACT.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="mt-10"
      >
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg hover:shadow-accent/40 transform hover:scale-105">
          <Link href="#contact">
            Discover Excellence
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <Link href="#about" className="absolute bottom-10 animate-bounce" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 text-primary/50" />
        </Link>
      </motion.div>
    </section>
  );
}
