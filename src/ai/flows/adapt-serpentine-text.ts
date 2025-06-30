// Adapt serpentine text flow based on content length and screen size.

'use server';

/**
 * @fileOverview Adapts the serpentine text flow based on content length and screen size for optimal readability.
 *
 * - adaptSerpentineText - A function that adapts the serpentine text flow.
 * - AdaptSerpentineTextInput - The input type for the adaptSerpentineText function.
 * - AdaptSerpentineTextOutput - The return type for the adaptSerpentineText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdaptSerpentineTextInputSchema = z.object({
  text: z.string().describe('The text to be adapted for serpentine flow.'),
  screenWidth: z.number().describe('The width of the screen in pixels.'),
});
export type AdaptSerpentineTextInput = z.infer<typeof AdaptSerpentineTextInputSchema>;

const AdaptSerpentineTextOutputSchema = z.object({
  adaptedText: z.string().describe('The adapted text with optimal serpentine flow placement.'),
});

export type AdaptSerpentineTextOutput = z.infer<typeof AdaptSerpentineTextOutputSchema>;

export async function adaptSerpentineText(input: AdaptSerpentineTextInput): Promise<AdaptSerpentineTextOutput> {
  return adaptSerpentineTextFlow(input);
}

const adaptSerpentineTextPrompt = ai.definePrompt({
  name: 'adaptSerpentineTextPrompt',
  input: {schema: AdaptSerpentineTextInputSchema},
  output: {schema: AdaptSerpentineTextOutputSchema},
  prompt: `You are an expert in designing text layouts for websites, especially serpentine text flows. Serpentine text flow involves arranging text in a wave-like pattern, alternating between left, center, and right alignments to create a visually engaging reading experience.

  Given the following text and screen width, adapt the text to ensure optimal readability and aesthetic appeal across all devices. Consider content length and screen size to adjust text placement and flow seamlessly.

  Text: {{{text}}}
  Screen Width: {{{screenWidth}}} pixels

  Your goal is to return the adapted text with the correct HTML tags to format the text in a serpentine flow.
  Ensure that the output is valid HTML.
`,
});

const adaptSerpentineTextFlow = ai.defineFlow(
  {
    name: 'adaptSerpentineTextFlow',
    inputSchema: AdaptSerpentineTextInputSchema,
    outputSchema: AdaptSerpentineTextOutputSchema,
  },
  async input => {
    const {output} = await adaptSerpentineTextPrompt(input);
    return output!;
  }
);
