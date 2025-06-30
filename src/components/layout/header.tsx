
"use client";

import Link from 'next/link';
import { Home, Info, Briefcase, Rocket, FolderKanban, Mail } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: Info },
  { name: 'Services', href: '#services', icon: Briefcase },
  { name: 'Partnership', href: '#partnership', icon: Rocket },
  { name: 'Projects', href: '#projects', icon: FolderKanban },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 h-full w-16 md:w-20 bg-black/30 backdrop-blur-lg z-50 flex flex-col items-center justify-between py-6 border-r border-primary/10">
      <Link href="#home" aria-label="WinWare Apex Home">
        <Logo className="h-8 w-8 md:h-10 md:w-10 text-primary hover:text-accent transition-colors duration-300" />
      </Link>
      <nav>
        <ul className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className="text-primary/70 hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-primary/10"
                      aria-label={item.name}
                    >
                      <item.icon className="h-5 w-5 md:h-6 md:w-6" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="bg-card border-primary/20 text-foreground">
                    <p className="font-headline">{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </nav>
      <div />
    </header>
  );
}
