"use client";

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CEOPage() {
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
                  About the CEO
                </span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Visionary leadership driving innovation and excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="md:col-span-1"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-primary/50 text-lg font-medium">
                    CEO Portrait
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="md:col-span-2 prose prose-invert max-w-none"
              >
                <h2 className="font-headline text-2xl font-bold text-primary mb-4">Leadership Philosophy</h2>
                <p className="text-lg leading-relaxed">
                  As the founder and CEO of WINWARE, I believe that exceptional software is built at the intersection of technical excellence and human-centered design. My journey in technology began over two decades ago, driven by a passion for creating solutions that not only solve complex problems but do so with elegance and precision.
                </p>
                <p className="text-lg leading-relaxed">
                  I've assembled a team of visionaries who share my commitment to crafting digital experiences that stand the test of time. Together, we've developed a unique approach that combines cutting-edge innovation with timeless principles of quality and reliability.
                </p>
                <p className="text-lg leading-relaxed">
                  Our mission extends beyond mere code—we aim to be true partners in our clients' success, aligning our expertise with their vision to create transformative digital solutions.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/10 mb-16"
            >
              <h2 className="font-headline text-2xl font-bold text-primary mb-4">Vision for the Future</h2>
              <p className="text-lg leading-relaxed">
                Looking ahead, I envision WINWARE continuing to push the boundaries of what's possible in software development. We're investing heavily in emerging technologies while maintaining our unwavering commitment to craftsmanship and quality.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                I believe that the most impactful innovations happen when technology serves human needs in intuitive, seamless ways. This philosophy guides our approach to every project, whether we're working with established enterprises or disruptive startups.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center"
            >
              <Link 
                href="#contact" 
                className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300"
              >
                Connect with me directly
              </Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}