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
              Startup Participation Model
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
            <h3 className="font-headline text-xl text-primary mb-4">Strategic Partnership</h3>
            <p className="text-foreground/70">
              We believe in the power of innovation. That's why we've developed a unique equity-based collaboration model for promising startups with disruptive ideas.
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
              Our Simple Agreement for Future Equity (SAFE) structure allows us to provide premium development services in exchange for the opportunity to grow alongside you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            <h3 className="font-headline text-xl text-primary mb-4">Mutual Success</h3>
            <p className="text-foreground/70">
              This isn't just about code—it's about creating a partnership where our incentives are perfectly aligned with your growth trajectory.
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
