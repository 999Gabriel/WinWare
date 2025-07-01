"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


const projects = [
  {
    title: 'FinTech Revolution',
    category: 'Concept Project',
    description: 'A comprehensive trading platform that redefined market analytics with AI-driven insights.',
    image: 'https://placehold.co/600x400/2a2a2a/808080?text=FinTech+Revolution',
  },
  {
    title: 'MedTech Innovation',
    category: 'Concept Project',
    description: 'Patient monitoring system that leverages IoT and machine learning to predict health events.',
    image: 'https://placehold.co/600x400/2a2a2a/808080?text=MedTech+Innovation',
  },
  {
    title: 'Sustainable Tech',
    category: 'Concept Project',
    description: 'Carbon footprint tracking platform for enterprises with blockchain verification.',
    image: 'https://placehold.co/600x400/2a2a2a/808080?text=Sustainable+Tech',
  },
];

export function CaseStudiesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Case Studies
            </span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.title} 
              variants={itemVariants}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg border border-primary/20 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-headline text-2xl font-bold text-primary mb-2">{project.title}</h3>
                  <p className="text-sm text-accent mb-3">{project.category}</p>
                  <p className="text-foreground/70 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
