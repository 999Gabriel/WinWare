"use client";

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
  const contactInfo = [
    {
      title: 'Email',
      details: '999gabriel.winkler@gmail.com',
      icon: Mail
    },
    {
      title: 'Location',
      details: 'Innsbruck, Austria',
      icon: MapPin
    },
    {
      title: 'Phone',
      details: '+1 (555) 123-4567',
      icon: Phone
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
                  Connect With Us
                </span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Ready to elevate your digital presence? Our team of experts is prepared to transform your vision into reality.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-primary/10 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-headline text-xl font-bold text-primary mb-2">{info.title}</h3>
                  {info.title === 'Email' ? (
                    <a href={`mailto:${info.details}`} className="text-foreground/70 hover:text-primary transition-colors">
                      {info.details}
                    </a>
                  ) : info.title === 'Phone' ? (
                    <a href={`tel:${info.details.replace(/\D/g, '')}`} className="text-foreground/70 hover:text-primary transition-colors">
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-foreground/70">{info.details}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <p className="text-lg text-foreground/70 italic">
                Excellence awaits. Let's create something extraordinary together that sets new standards in your industry.
              </p>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
