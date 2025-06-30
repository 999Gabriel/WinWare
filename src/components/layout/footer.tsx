import { Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-primary/10 py-8 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-foreground/60">&copy; {new Date().getFullYear()} WinWare Apex. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="LinkedIn" className="text-foreground/60 hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
