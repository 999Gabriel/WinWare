"use client";

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
                  Terms of Service
                </span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Guidelines for using our services and website
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/10 mb-8 prose prose-invert max-w-none"
            >
              <h2 className="font-headline text-2xl font-bold text-primary mb-4">Agreement to Terms</h2>
              <p className="text-lg leading-relaxed">
                These Terms of Service constitute a legally binding agreement made between you and WINWARE, concerning your access to and use of our website and services. You agree that by accessing the website, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms, you are prohibited from using the website and must discontinue use immediately.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/10 mb-8 prose prose-invert max-w-none"
            >
              <h2 className="font-headline text-2xl font-bold text-primary mb-4">Intellectual Property Rights</h2>
              <p className="text-lg leading-relaxed">
                Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                The Content and Marks are provided on the website "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the website and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/10 mb-8 prose prose-invert max-w-none"
            >
              <h2 className="font-headline text-2xl font-bold text-primary mb-4">User Representations</h2>
              <p className="text-lg leading-relaxed">
                By using the website, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-lg">
                <li>All registration information you submit will be true, accurate, current, and complete</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service</li>
                <li>You are not a minor in the jurisdiction in which you reside</li>
                <li>You will not access the website through automated or non-human means, whether through a bot, script, or otherwise</li>
                <li>You will not use the website for any illegal or unauthorized purpose</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/10 mb-8 prose prose-invert max-w-none"
            >
              <h2 className="font-headline text-2xl font-bold text-primary mb-4">Prohibited Activities</h2>
              <p className="text-lg leading-relaxed">
                You may not access or use the website for any purpose other than that for which we make the website available. The website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                As a user of the website, you agree not to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-lg">
                <li>Systematically retrieve data or other content from the website to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us</li>
                <li>Make any unauthorized use of the website, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses</li>
                <li>Use the website to advertise or offer to sell goods and services</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the website</li>
                <li>Engage in unauthorized framing of or linking to the website</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/10 mb-8 prose prose-invert max-w-none"
            >
              <h2 className="font-headline text-2xl font-bold text-primary mb-4">Contact Us</h2>
              <p className="text-lg leading-relaxed">
                If you have questions or comments about these Terms of Service, please contact us at:
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