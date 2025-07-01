import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Project Apex',
    category: 'FinTech',
    image: 'https://placehold.co/600x400',
    hint: 'abstract tech',
  },
  {
    title: 'Quantum Ledger',
    category: 'Web3',
    image: 'https://placehold.co/600x400',
    hint: 'blockchain visualization',
  },
  {
    title: 'Synergy OS',
    category: 'Enterprise SaaS',
    image: 'https://placehold.co/600x400',
    hint: 'dashboard ui',
  },
  {
    title: 'Momentum AI',
    category: 'Machine Learning',
    image: 'https://placehold.co/600x400',
    hint: 'neural network',
  },
];

export function CaseStudiesSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
            Legacy in the Making
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
            Explore our portfolio of impactful solutions and visionary partnerships.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <Link 
              href="#" 
              key={project.title} 
              className="group relative block overflow-hidden rounded-lg border border-primary/20 opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                width={600}
                height={400}
                data-ai-hint={project.hint}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30">
                <h3 className="font-headline text-2xl font-bold text-primary">{project.title}</h3>
                <p className="text-lg text-foreground">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
