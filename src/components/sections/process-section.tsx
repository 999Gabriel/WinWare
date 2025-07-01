"use client";

import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  FileSearch, 
  Code2, 
  TestTube, 
  Rocket, 
  Repeat2 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

const processSteps: ProcessStep[] = [
  {
    title: "Discovery",
    description: "We begin by deeply understanding your business goals, target users, and project requirements through collaborative workshops and research.",
    icon: Lightbulb
  },
  {
    title: "Planning & Design",
    description: "Our team creates detailed specifications, architecture plans, and interactive prototypes to visualize the solution before development begins.",
    icon: FileSearch
  },
  {
    title: "Development",
    description: "Using agile methodologies, we build your solution in iterative cycles, providing regular demos and incorporating feedback throughout.",
    icon: Code2
  },
  {
    title: "Testing & QA",
    description: "Rigorous quality assurance processes ensure your software is robust, secure, and performs optimally across all intended platforms.",
    icon: TestTube
  },
  {
    title: "Deployment",
    description: "We handle the seamless launch of your solution, ensuring proper configuration, monitoring, and knowledge transfer to your team.",
    icon: Rocket
  },
  {
    title: "Maintenance & Evolution",
    description: "Our relationship continues with ongoing support, performance optimization, and strategic enhancements to keep your software competitive.",
    icon: Repeat2
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32 px-4">
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
              Our Development Process
            </span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
            A transparent, collaborative approach that delivers exceptional results
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block" />

          <div className="space-y-12 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="font-headline text-2xl font-medium text-primary mb-2">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center z-10">
                    <step.icon className="h-8 w-8 text-background" />
                  </div>
                  <div className="absolute w-20 h-20 rounded-full bg-primary/20 animate-ping opacity-20" />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}