"use client";

import { adaptSerpentineText } from '@/ai/flows/adapt-serpentine-text';
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export function SerpentineText({ text }: { text: string }) {
  const [adaptedText, setAdaptedText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAdaptedText = async () => {
      try {
        setIsLoading(true);
        const screenWidth = window.innerWidth;
        const result = await adaptSerpentineText({ text, screenWidth });
        // The AI generates HTML with Tailwind classes, so we need to set it directly.
        // It's designed to be safe, only outputting text within p tags with alignment classes.
        const formattedResult = result.adaptedText
          .replace(/class="text-left"/g, 'class="text-left md:mr-auto md:w-3/4"')
          .replace(/class="text-right"/g, 'class="text-right md:ml-auto md:w-3/4"')
          .replace(/class="text-center"/g, 'class="text-center md:mx-auto md:w-3/4"');
        setAdaptedText(formattedResult);
      } catch (error) {
        console.error("Failed to adapt text:", error);
        setAdaptedText(`<p class="text-center text-destructive">Failed to load dynamic content. Using fallback.</p><p>${text}</p>`);
      } finally {
        setIsLoading(false);
      }
    };
    getAdaptedText();
  }, [text]);

  if (isLoading) {
    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-1/2 ml-auto" />
        <Skeleton className="h-6 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-6 w-3/4 ml-auto" />
      </div>
    );
  }

  return <div className="prose prose-invert prose-p:my-4 prose-p:text-lg prose-p:leading-relaxed prose-p:text-foreground/80 max-w-4xl mx-auto space-y-6" dangerouslySetInnerHTML={{ __html: adaptedText || '' }} />;
}
