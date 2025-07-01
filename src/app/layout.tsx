import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'WINWARE',
  description: 'TAILORED SOFTWARE. TIMELESS IMPACT.',
};

export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Playfair+Display:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased relative">
        {/* Enhanced grid background with animation */}
        <div className="fixed inset-0 -z-10 h-full w-full">
          {/* Animated grid with primary color */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:24px_24px] animate-pulse"></div>

          {/* Secondary grid with accent color for depth */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,184,166,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,184,166,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

          {/* Glowing dots at intersections */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          {/* Animated accent dots for visual interest */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(20,184,166,0.4)_1px,transparent_1px)] bg-[size:48px_48px] animate-pulse [animation-delay:2s]"></div>

          {/* Background gradient overlay with more transparency to show grid better */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/90"></div>
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
