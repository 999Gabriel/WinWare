"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We will get back to you shortly.",
    });
    form.reset();
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
            className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground group transition-all duration-300 shadow-lg hover:shadow-accent/40 transform hover:scale-105"
          >
            Send Message <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
