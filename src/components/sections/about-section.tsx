"use client";

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay: 0.2 }
};

const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay: 0.4 }
};

export function AboutSection() {
  return (
      <section id="about" className="py-24 sm:py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              transition={fadeInUp.transition}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">
              Discover WinWare
            </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
                initial={slideInLeft.initial}
                whileInView={slideInLeft.animate}
                transition={slideInLeft.transition}
                viewport={{ once: true }}
                className="prose prose-invert max-w-none"
            >
              <p className="text-lg leading-relaxed text-foreground/80">
                At WinWare, we combine technical precision with modern, scalable software solutions. Our approach is clear: Build reliable, elegant software that drives real business value.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                We believe exceptional software is built on clean code, intuitive interfaces, and seamless performance. Our team focuses on details that matter — from architecture to user experience.
              </p>
            </motion.div>

            <motion.div
                initial={slideInRight.initial}
                whileInView={slideInRight.animate}
                transition={slideInRight.transition}
                viewport={{ once: true }}
                className="prose prose-invert max-w-none"
            >
              <p className="text-lg leading-relaxed text-foreground/80">
                We don't just develop software. We create future-proof solutions that help your business grow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
  );
}
