"use client";

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <div className="inline-block relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl"
        />
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-shimmer bg-[length:200%_auto]">
            {title}
          </span>
        </h2>
      </div>
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4"
      />
    </motion.div>
  );
}