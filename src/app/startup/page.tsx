"use client";

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { ArrowLeft, Rocket, Handshake, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function StartupPage() {
  const benefits = [
    {
      title: 'Aligned Incentives',
      description: 'Our equity-based model ensures we are fully invested in your long-term success, not just short-term deliverables.',
      icon: Handshake
    },
    {
      title: 'Premium Expertise',
      description: 'Access our elite engineering talent without the premium price tag that would normally be out of reach for early-stage startups.',
      icon: Rocket
    },
    {
      title: 'Growth Partnership',
      description: 'We become more than a vendor—we are a strategic partner with skin in the game, committed to helping you scale.',
      icon: TrendingUp
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
                  Startup Participation Model
                </span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                A unique equity-based collaboration for visionary founders
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="prose prose-invert max-w-none mb-16"
            >
              <h2 className="font-headline text-2xl font-bold text-primary mb-4">Strategic Partnership</h2>
              <p className="text-lg leading-relaxed">
                We believe in the power of innovation. That is why we have developed a unique equity-based collaboration model for promising startups with disruptive ideas. Unlike traditional development agencies, we are willing to invest our expertise and resources in exchange for the opportunity to grow alongside you.
              </p>
              <p className="text-lg leading-relaxed">
                This model is designed for early-stage startups with strong founding teams, innovative ideas, and the potential for significant growth. We become more than just a service provider—we become a committed partner with a vested interest in your success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/10 h-full"
                >
                  <benefit.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-headline text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg border border-primary/10 mb-16"
            >
              <h2 className="font-headline text-2xl font-bold text-primary mb-4">SAFE Agreements</h2>
              <p className="text-lg leading-relaxed">
                Our Simple Agreement for Future Equity (SAFE) structure allows us to provide premium development services in exchange for the opportunity to grow alongside you. This is not just about code—it is about creating a partnership where our incentives are perfectly aligned with your growth trajectory.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                The SAFE agreement is a flexible, founder-friendly instrument that converts into equity during your next qualified financing round. This means we do not take equity immediately, allowing you to maintain control while still benefiting from our expertise and commitment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center"
            >
              <h2 className="font-headline text-2xl font-bold text-primary mb-6">Ready to explore a partnership?</h2>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg hover:shadow-accent/40 transform hover:scale-105">
                <Link href="#contact">
                  Schedule a Consultation
                </Link>
              </Button>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}