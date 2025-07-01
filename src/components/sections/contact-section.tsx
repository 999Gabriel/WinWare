"use client";

import { ContactForm } from '@/components/contact-form';
import { motion } from 'framer-motion';


export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Connect With Us
            </span>
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Ready to elevate your digital presence? Our team of experts is prepared to transform your vision into reality.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-foreground/70 italic">
            Excellence awaits. Let's create something extraordinary together that sets new standards in your industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
