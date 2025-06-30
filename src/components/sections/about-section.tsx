import { SerpentineText } from '@/components/shared/serpentine-text';

export function AboutSection() {
  const aboutText = `
    WinWare is not just a software company; we are pioneers of the new digital frontier. Founded on the principles of precision engineering and visionary strategy, we build more than applications—we construct legacies. Our philosophy merges the timeless discipline of master craftsmanship with the relentless innovation of future technology. We believe in software that is not only powerful and scalable but also elegant and enduring. Each line of code is a brushstroke in a larger masterpiece, designed to create a timeless impact for our clients. We partner with ambitious leaders and disruptive startups, transforming bold ideas into market-defining realities. This is where CEO culture meets cutting-edge code.
  `;

  return (
    <section id="about" className="py-24 sm:py-32 px-4 relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(#1E1E1E_1px,transparent_1px)] [background-size:32px_32px]"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">
              Vision & Philosophy
            </span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
            Architecting the future with software that transcends trends and delivers perpetual value.
          </p>
        </div>
        <SerpentineText text={aboutText} />
      </div>
    </section>
  );
}
