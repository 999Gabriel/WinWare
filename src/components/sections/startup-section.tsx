"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';


export function StartupSection() {
  return (
    <section id="partnership" className="py-24 sm:py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Startup Partnership Model
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            <h3 className="font-headline text-xl text-primary mb-4">Aligned for Growth</h3>
            <p className="text-foreground/70">
              We partner with startups through a flexible, equity-based model. You get premium development, we share in your success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            <h3 className="font-headline text-xl text-primary mb-4">SAFE Agreements</h3>
            <p className="text-foreground/70">
              Simple Agreements for Future Equity ensure a clear, founder-friendly collaboration structure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            <h3 className="font-headline text-xl text-primary mb-4">Shared Incentives</h3>
            <p className="text-foreground/70">
              Your growth is our growth. It's not just code — it's a strategic partnership.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group transition-all duration-300">
            <Link href="#contact">
              Explore Partnership Options
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
