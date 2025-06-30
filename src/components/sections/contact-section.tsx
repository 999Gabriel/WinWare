import { SerpentineText } from '@/components/shared/serpentine-text';
import { ContactForm } from '@/components/contact-form';

export function ContactSection() {
  const contactText = `
    Your vision deserves a master architect. The journey to creating a timeless digital asset begins with a single conversation. Whether you're a startup poised for disruption or an established enterprise seeking a technological renaissance, our team is ready to listen, strategize, and build. Let's discuss how WinWare can forge your legacy in the digital age. Reach out, and let's create something that endures.
  `;

  return (
    <section id="contact" className="py-24 sm:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Let's Build Together
            </span>
          </h2>
        </div>
        <div className="mb-16">
          <SerpentineText text={contactText} />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
