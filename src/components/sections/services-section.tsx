import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeXml, Users, Rocket } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: 'Custom Software Development',
    description: 'Bespoke solutions engineered for peak performance, scalability, and market dominance. Your vision, meticulously coded.',
    icon: CodeXml,
  },
  {
    title: 'Scalable Development Teams',
    description: 'Elite, on-demand engineering pods integrated seamlessly into your operations to accelerate your roadmap.',
    icon: Users,
  },
  {
    title: 'Startup Partnership Models',
    description: 'Strategic technical partnerships for visionary founders. We build your MVP and core tech for equity and shared success.',
    icon: Rocket,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
            Our Arsenal of Services
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
            Precision-engineered services to forge your digital supremacy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 group animate-float" style={{animationDelay: `${index * 2}s`}}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-headline font-medium text-primary">
                  {service.title}
                </CardTitle>
                <service.icon className="h-8 w-8 text-primary/50 group-hover:text-accent transition-colors duration-300" />
              </CardHeader>
              <CardContent>
                <p className="text-base text-foreground/70">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
