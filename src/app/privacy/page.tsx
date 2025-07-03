"use client";

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
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
                  Privacy Policy
                </span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                How we protect and respect your data
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/10 mb-8 prose prose-invert max-w-none"
            >
              <h2 className="font-headline text-2xl font-bold text-primary mb-4">Introduction</h2>
              <p className="text-lg leading-relaxed">
                At WINWARE, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/10 mb-8 prose prose-invert max-w-none"
            >
              <h2 className="font-headline text-2xl font-bold text-primary mb-4">Information We Collect</h2>
              <p className="text-lg leading-relaxed">
                We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include names, email addresses, phone numbers, and other contact information.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/10 mb-8 prose prose-invert max-w-none"
            >
              <h2 className="font-headline text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
              <p className="text-lg leading-relaxed">
                We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-lg">
                <li>To send you marketing and promotional communications</li>
                <li>To respond to your inquiries and solve any potential issues you might have</li>
                <li>To deliver targeted advertising to you</li>
                <li>To protect our services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/10 mb-8 prose prose-invert max-w-none"
            >
              <h2 className="font-headline text-2xl font-bold text-primary mb-4">Cookies and Web Beacons</h2>
              <p className="text-lg leading-relaxed">
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on the website to help customize the website and improve your experience. When you access the website, your personal information is not collected through the use of tracking technology.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the website.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/10 mb-8 prose prose-invert max-w-none"
            >
              <h2 className="font-headline text-2xl font-bold text-primary mb-4">Contact Us</h2>
              <p className="text-lg leading-relaxed">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <p className="text-lg leading-relaxed mt-4">
                WINWARE<br />
                Innsbruck, Austria<br />
                Email: 999gabriel.winkler@gmail.com
              </p>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}