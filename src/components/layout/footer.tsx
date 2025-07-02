"use client";

import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';


export function Footer() {
  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/winware' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/winware' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/winware' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/winware' },
  ];

  return (
    <footer className="border-t border-primary/10 py-12 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-8"
        >
          <h2 className="text-2xl font-headline text-primary mb-2">WINWARE</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-headline text-primary/80 mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-foreground/60 hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="#about" className="text-sm text-foreground/60 hover:text-primary transition-colors">About</Link></li>
                <li><Link href="#services" className="text-sm text-foreground/60 hover:text-primary transition-colors">Services</Link></li>
                <li><Link href="#partnership" className="text-sm text-foreground/60 hover:text-primary transition-colors">Startup</Link></li>
                <li><Link href="#projects" className="text-sm text-foreground/60 hover:text-primary transition-colors">Case Studies</Link></li>
                <li><Link href="#contact" className="text-sm text-foreground/60 hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="/ceo" className="text-sm text-foreground/60 hover:text-primary transition-colors">CEO</Link></li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-headline text-primary/80 mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm text-foreground/60">Gabriel Winkler, CEO</li>
                <li><a href="mailto:999gabriel.winkler@gmail.com" className="text-sm text-foreground/60 hover:text-primary transition-colors">999gabriel.winkler@gmail.com</a></li>
                <li className="text-sm text-foreground/60">Innsbruck, Austria</li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center md:text-right">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-headline text-primary/80 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm text-foreground/60 hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm text-foreground/60 hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-primary/10"
        >
          <p className="text-sm text-foreground/60">&copy; 2025 WINWARE. All rights reserved.</p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a 
                key={social.label}
                href={social.href} 
                aria-label={social.label} 
                className="text-foreground/60 hover:text-primary transition-colors p-2 hover:bg-primary/5 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
