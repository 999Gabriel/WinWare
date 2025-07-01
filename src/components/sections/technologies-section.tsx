"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Server, Globe, Cloud, Lock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TechnologyCategory {
  title: string;
  icon: LucideIcon;
  technologies: string[];
}

const technologyCategories: TechnologyCategory[] = [
  {
    title: "Frontend Development",
    icon: Code,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular", "Vue.js"]
  },
  {
    title: "Backend Development",
    icon: Server,
    technologies: ["Node.js", "Express", "Django", "Spring Boot", "ASP.NET Core", "Laravel"]
  },
  {
    title: "Database Technologies",
    icon: Database,
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"]
  },
  {
    title: "Cloud Services",
    icon: Cloud,
    technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Serverless"]
  },
  {
    title: "Web Services",
    icon: Globe,
    technologies: ["RESTful APIs", "GraphQL", "WebSockets", "Microservices", "gRPC", "OAuth"]
  },
  {
    title: "Security & DevOps",
    icon: Lock,
    technologies: ["CI/CD Pipelines", "Infrastructure as Code", "Security Auditing", "Penetration Testing", "Monitoring", "Logging"]
  }
];

export function TechnologiesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  };

  return (
    <section id="technologies" className="py-24 sm:py-32 px-4">
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
              Technical Expertise
            </span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
            Our team leverages cutting-edge technologies to deliver robust, scalable, and future-proof solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {technologyCategories.map((category) => (
            <motion.div key={category.title} variants={cardVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <category.icon className="h-6 w-6 text-primary mr-3" />
                    <h3 className="font-headline text-xl font-medium text-primary">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-primary/10 text-foreground/80 rounded-full text-sm border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
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