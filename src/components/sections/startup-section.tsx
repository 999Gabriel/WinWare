import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function StartupSection() {
  return (
    <section id="partnership" className="py-24 sm:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-black bg-dot-primary/10 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            SAFE & Equity Partnerships
          </span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-foreground/80 leading-relaxed">
          For the most promising ventures, we transcend the client-vendor relationship. We invest our elite engineering talent in exchange for equity, utilizing standard SAFE agreements. This is more than a service—it's a partnership. We build your foundation, you build the empire. We succeed together.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group transition-all duration-300">
            <Link href="#contact">
              Propose a Partnership
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
