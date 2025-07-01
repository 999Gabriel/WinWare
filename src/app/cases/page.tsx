"use client";

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function CasesPage() {
  const projects = [
    {
      title: 'FinTech Revolution',
      category: 'Concept Project',
      description: 'A comprehensive trading platform that redefined market analytics with AI-driven insights.',
      image: 'https://placehold.co/600x400/2a2a2a/808080?text=FinTech+Revolution',
      challenge: 'Creating a platform that could process vast amounts of financial data in real-time while providing actionable insights to traders.',
      solution: 'We developed a scalable architecture using microservices and implemented advanced machine learning algorithms to identify patterns and predict market movements.',
      results: 'The platform successfully processes millions of data points per second, providing traders with a competitive edge through predictive analytics and automated trading strategies.'
    },
    {
      title: 'MedTech Innovation',
      category: 'Concept Project',
      description: 'Patient monitoring system that leverages IoT and machine learning to predict health events.',
      image: 'https://placehold.co/600x400/2a2a2a/808080?text=MedTech+Innovation',
      challenge: 'Building a reliable system that could monitor patients remotely while accurately predicting potential health issues before they become critical.',
      solution: 'We created a network of IoT devices that continuously monitor vital signs and developed predictive models that analyze patterns to identify potential health risks.',
      results: 'The system has demonstrated a 78% accuracy rate in predicting critical health events up to 6 hours before they occur, potentially saving lives through early intervention.'
    },
    {
      title: 'Sustainable Tech',
      category: 'Concept Project',
      description: 'Carbon footprint tracking platform for enterprises with blockchain verification.',
      image: 'https://placehold.co/600x400/2a2a2a/808080?text=Sustainable+Tech',
      challenge: 'Developing a transparent and tamper-proof system for tracking carbon emissions across complex supply chains.',
      solution: 'We implemented a blockchain-based verification system that ensures the integrity of environmental data while providing an intuitive dashboard for monitoring and reporting.',
      results: 'The platform has helped companies reduce their carbon footprint by an average of 23% through better visibility and accountability in their environmental impact.'
    }
  ];

  return (
    <div className="bg-black text-foreground">
      <Header />
      <div className="pl-16 md:pl-20">
        <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Link 
                href="/" 
                className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300 mb-8"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Case Studies
                </span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Explore our portfolio of innovative solutions and transformative projects
              </p>
            </motion.div>

            <div className="space-y-24">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
                >
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <h2 className="font-headline text-3xl font-bold text-primary mb-2">{project.title}</h2>
                    <p className="text-accent mb-6">{project.category}</p>
                    <p className="text-lg text-foreground/70 mb-8">{project.description}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-headline text-xl font-medium text-primary mb-2">The Challenge</h3>
                        <p className="text-foreground/70">{project.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-headline text-xl font-medium text-primary mb-2">Our Solution</h3>
                        <p className="text-foreground/70">{project.solution}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-headline text-xl font-medium text-primary mb-2">The Results</h3>
                        <p className="text-foreground/70">{project.results}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="relative overflow-hidden rounded-lg border border-primary/20 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center mt-24"
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300"
              >
                Ready to start your own success story?
              </Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}