"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "WinWare transformed our technical foundation. Their clean approach delivered real results.",
    author: "Alex Johnson",
    position: "CTO",
    company: "TechVision Inc."
  },
  {
    quote: "Exceptional problem-solving and clear communication — beyond coding, real product impact.",
    author: "Sarah Chen",
    position: "Product Director",
    company: "InnovateSoft"
  },
  {
    quote: "They turned complex challenges into clean, scalable software. Seamless execution.",
    author: "Michael Rodriguez",
    position: "Founder",
    company: "LaunchPad Solutions"
  },
];

export function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Client Testimonials
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 h-full">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/50 mb-4" />
                  <p className="text-foreground/80 italic mb-6">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <p className="font-headline text-primary font-medium">{testimonial.author}</p>
                    <p className="text-sm text-foreground/60">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
