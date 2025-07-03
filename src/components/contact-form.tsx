"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Define EmailJS types
declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      send: (serviceId: string, templateId: string, templateParams: any, publicKey: string) => Promise<any>;
    };
  }
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // No need to load EmailJS anymore as we're using a simpler approach
  useEffect(() => {
    // This effect is kept for potential future enhancements
    // but doesn't do anything now
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Set loading state
    setIsSubmitting(true);

    try {
      console.log('Submitting form to API endpoint:', values);

      // Use our API endpoint to process the message
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      // Parse the response
      const responseData = await response.json();
      console.log('API response:', responseData);

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to process message');
      }

      // If the API indicates we should use mailto, do that
      if (responseData.useMailto) {
        openMailtoLink(values);
        return; // Exit early since we've opened the email client
      }

      // Show success notification
      toast({
        title: "Message Received!",
        description: "Your message has been sent to Gabriel. Thank you for reaching out!",
      });

      // Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error('Error processing message:', error);

      // Show error notification
      toast({
        title: "Error Processing Message",
        description: "We're having trouble processing your message. We'll open your email client instead.",
        variant: "destructive",
      });

      // Use mailto as a fallback
      openMailtoLink(values);
    } finally {
      // Reset loading state
      setIsSubmitting(false);
    }
  }

  // Helper function to open mailto link
  function openMailtoLink(values: z.infer<typeof formSchema>) {
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(values.subject);
      const body = encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`
      );
      const mailtoLink = `mailto:999gabriel.winkler@gmail.com?subject=${subject}&body=${body}`;

      // Open email client with pre-filled data
      window.open(mailtoLink, '_blank');

      toast({
        title: "Email Client Opened",
        description: "We've opened your email client with your message. Please send it to complete.",
      });

      // Reset form after opening email client
      form.reset();
    } catch (mailtoError) {
      console.error('Mailto error:', mailtoError);

      // If opening in a new tab fails, try the direct approach
      const subject = encodeURIComponent(values.subject);
      const body = encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`
      );
      window.location.href = `mailto:999gabriel.winkler@gmail.com?subject=${subject}&body=${body}`;

      // Reset form
      form.reset();
    }
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.3 } }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-3xl mx-auto bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-primary/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">Name</FormLabel>
                <FormControl>
                  <motion.div whileFocus="focus" variants={inputVariants}>
                    <Input 
                      placeholder="Your name" 
                      {...field} 
                      className="bg-black/50 border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" 
                    />
                  </motion.div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">Email</FormLabel>
                <FormControl>
                  <motion.div whileFocus="focus" variants={inputVariants}>
                    <Input 
                      placeholder="Your email" 
                      {...field} 
                      className="bg-black/50 border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    />
                  </motion.div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-medium">Subject</FormLabel>
              <FormControl>
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <Input 
                    placeholder="Subject" 
                    {...field} 
                    className="bg-black/50 border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-medium">Message</FormLabel>
              <FormControl>
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <Textarea 
                    placeholder="Your message" 
                    {...field} 
                    className="min-h-[150px] bg-black/50 border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" 
                  />
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-center">
          <Button 
            type="submit" 
            size="lg" 
            disabled={isSubmitting}
            className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground group transition-all duration-300 shadow-lg hover:shadow-accent/40 transform hover:scale-105"
          >
            {isSubmitting ? (
              <>
                Sending... <Loader2 className="ml-2 h-5 w-5 animate-spin" />
              </>
            ) : (
              <>
                Send Message <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
