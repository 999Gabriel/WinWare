"use client";

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { ArrowLeft, CodeXml, Users, Rocket, Check } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Bespoke solutions tailored to your unique business challenges. We transform complex requirements into elegant, powerful software.',
      icon: CodeXml,
      features: [
        'Full-stack web and mobile applications',
        'Enterprise software solutions',
        'Legacy system modernization',
        'API development and integration',
        'Cloud-native architecture'
      ]
    },
    {
      title: 'Scalable Development Teams',
      description: 'Elite engineering talent that seamlessly integrates with your organization. Scale your capabilities without compromising on quality.',
      icon: Users,
      features: [
        'Senior software engineers',
        'UI/UX designers',
        'DevOps specialists',
        'Project managers',
        'Quality assurance experts'
      ]
    },
    {
      title: 'Startup Partnership Models',
      description: 'Strategic collaboration with emerging innovators. We offer equity-based partnerships that align our success with yours.',
      icon: Rocket,
      features: [
        'MVP development',
        'Technical co-founding',
        'SAFE agreements',
        'Technology strategy consulting',
        'Investor pitch preparation'
      ]
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
                  Premium Services
                </span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Exceptional software solutions crafted to elevate your business
              </p>
            </motion.div>

            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                      <h2 className="font-headline text-3xl font-bold text-primary">{service.title}</h2>
                    </div>
                    <p className="text-lg text-foreground/70 mb-8">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''} bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/10 h-64 flex items-center justify-center`}>
                    <service.icon className="h-24 w-24 text-primary/20" />
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
                href="/startup" 
                className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300"
              >
                Learn about our startup partnership model
              </Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}