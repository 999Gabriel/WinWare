
"use client";

import Link from 'next/link';
import { Home, Info, Briefcase, Rocket, FolderKanban, Mail, User } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'HOME', href: '/', icon: Home },
  { name: 'ABOUT', href: '/#about', icon: Info },
  { name: 'SERVICES', href: '/#services', icon: Briefcase },
  { name: 'STARTUP', href: '/#partnership', icon: Rocket },
  { name: 'CASES', href: '/#projects', icon: FolderKanban },
  { name: 'CEO', href: '/ceo', icon: User },
  { name: 'CONTACT', href: '/#contact', icon: Mail },
];

export function Header() {
  const sidebarVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
      className="fixed top-0 left-0 h-full w-16 md:w-20 bg-black/40 backdrop-blur-lg z-50 flex flex-col items-center justify-between py-6 border-r border-primary/10"
    >
      <Link href="#home" aria-label="WINWARE Home">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Logo className="h-8 w-8 md:h-10 md:w-10 text-primary hover:text-accent transition-colors duration-300" />
        </motion.div>
      </Link>
      <nav>
        <ul className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <motion.li key={item.name} variants={itemVariants}>
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className="text-primary/70 hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-primary/10 relative group"
                      aria-label={item.name}
                    >
                      <item.icon className="h-5 w-5 md:h-6 md:w-6" />
                      <span className="absolute inset-0 rounded-full bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="bg-card/80 backdrop-blur-sm border-primary/20 text-foreground">
                    <p className="font-headline">{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.li>
          ))}
        </ul>
      </nav>
      <div />
    </motion.header>
  );
}
