"use client";

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-black text-foreground">
      <Header />
      <div className="pl-16 md:pl-20">
        <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
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
                  About WINWARE
                </span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Our vision, mission, and the principles that drive us
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="prose prose-invert max-w-none mb-16"
            >
              <h2 className="font-headline text-2xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                At WINWARE, we blend timeless principles of excellence with cutting-edge innovation. Our approach to software development transcends the ordinary, creating solutions that stand the test of time.
              </p>
              <p className="text-lg leading-relaxed">
                Founded on the belief that software should be both powerful and elegant, we've assembled a team of visionaries who understand that true luxury lies in the details—the clean code, the intuitive interface, the seamless performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="prose prose-invert max-w-none mb-16"
            >
              <h2 className="font-headline text-2xl font-bold text-primary mb-4">Our Approach</h2>
              <p className="text-lg leading-relaxed">
                We don't just build software; we craft digital experiences that elevate your business to new heights. Each line of code is written with purpose, each design element carefully considered.
              </p>
              <p className="text-lg leading-relaxed">
                Our clients aren't just partners—they're visionaries who understand that exceptional software is an investment in their future. Together, we create solutions that define industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/10 mb-16"
            >
              <h2 className="font-headline text-2xl font-bold text-primary mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-headline text-accent mb-2">Excellence</h3>
                  <p className="text-foreground/70">We pursue perfection in every aspect of our work, from code quality to user experience.</p>
                </div>
                <div>
                  <h3 className="text-xl font-headline text-accent mb-2">Innovation</h3>
                  <p className="text-foreground/70">We constantly explore new technologies and approaches to deliver cutting-edge solutions.</p>
                </div>
                <div>
                  <h3 className="text-xl font-headline text-accent mb-2">Partnership</h3>
                  <p className="text-foreground/70">We build lasting relationships based on trust, transparency, and shared success.</p>
                </div>
                <div>
                  <h3 className="text-xl font-headline text-accent mb-2">Impact</h3>
                  <p className="text-foreground/70">We measure our success by the transformative effect our work has on our clients' businesses.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center"
            >
              <Link 
                href="/services" 
                className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300"
              >
                Explore our services
              </Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}