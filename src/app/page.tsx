import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ServicesSection } from '@/components/sections/services-section';
import { StartupSection } from '@/components/sections/startup-section';
import { CaseStudiesSection } from '@/components/sections/case-studies-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="bg-black text-foreground">
      <Header />
      <div className="pl-16 md:pl-20">
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <StartupSection />
          <CaseStudiesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
