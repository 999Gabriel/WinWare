"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <ContactForm />
      </div>
    </section>
  );
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showChat, setShowChat] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Get the form element
      const form = e.target as HTMLFormElement;

      // Create a FormData object
      const formData = new FormData(form);

      // Add a hidden field for the recipient email
      formData.append('_to', '999gabriel.winkler@gmail.com');

      // Add a subject
      formData.append('_subject', 'New message from WinWare website');

      // Disable captcha
      formData.append('_captcha', 'false');

      // Add a success page redirect (optional)
      formData.append('_next', window.location.href);

      // Log form data for debugging
      console.log('Form data being submitted:', {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')?.toString().substring(0, 50) + '...',
        recipient: '999gabriel.winkler@gmail.com'
      });

      console.log('Submitting form to FormSubmit.co...');

      // Submit the form data to FormSubmit.co
      const response = await fetch('https://formsubmit.co/ajax/999gabriel.winkler@gmail.com', {
        method: 'POST',
        body: formData
      });

      const responseData = await response.json();
      console.log('FormSubmit response:', responseData);

      // Log detailed response for debugging
      console.log('FormSubmit detailed response:', {
        status: response.status,
        statusText: response.statusText,
        success: responseData.success,
        message: responseData.message,
        timestamp: new Date().toISOString()
      });

      if (!response.ok || !responseData.success) {
        throw new Error(responseData.message || 'Failed to submit form');
      }

      // Form submitted successfully
      console.log('Form submitted successfully');
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');

      // If the FormSubmit.co API fails, try the direct form submission as fallback
      if (!formSubmitted) {
        console.log('AJAX submission failed. Trying direct form submission as fallback...');

        // Create a hidden form for submission
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://formsubmit.co/999gabriel.winkler@gmail.com';
        form.style.display = 'none';
        form.target = '_blank'; // Open in new tab to avoid losing current page state

        // Log the fallback attempt with details
        console.log('Creating fallback form with data:', {
          name: formData.name,
          email: formData.email,
          message: formData.message.substring(0, 50) + '...',
          recipient: '999gabriel.winkler@gmail.com',
          returnUrl: window.location.href
        });

        // Add form fields
        const nameField = document.createElement('input');
        nameField.name = 'name';
        nameField.value = formData.name;
        form.appendChild(nameField);

        const emailField = document.createElement('input');
        emailField.name = 'email';
        emailField.value = formData.email;
        form.appendChild(emailField);

        const messageField = document.createElement('textarea');
        messageField.name = 'message';
        messageField.value = formData.message;
        form.appendChild(messageField);

        // Add FormSubmit.co specific fields
        const subjectField = document.createElement('input');
        subjectField.type = 'hidden';
        subjectField.name = '_subject';
        subjectField.value = 'New message from WinWare website';
        form.appendChild(subjectField);

        const captchaField = document.createElement('input');
        captchaField.type = 'hidden';
        captchaField.name = '_captcha';
        captchaField.value = 'false';
        form.appendChild(captchaField);

        // Add return URL to redirect back to the site after submission
        const returnUrlField = document.createElement('input');
        returnUrlField.type = 'hidden';
        returnUrlField.name = '_next';
        returnUrlField.value = window.location.href;
        form.appendChild(returnUrlField);

        // Add a thank you page URL (optional)
        const thankYouField = document.createElement('input');
        thankYouField.type = 'hidden';
        thankYouField.name = '_template';
        thankYouField.value = 'box';
        form.appendChild(thankYouField);

        // Add the form to the document and submit it
        document.body.appendChild(form);
        console.log('Submitting fallback form...');
        form.submit();

        // Update state to reflect that form was submitted via fallback
        setFormSubmitted(true);
        console.log('Fallback form submitted successfully');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChatToggle = () => {
    setShowChat(prev => !prev);
  };

  return (
      <div className="space-y-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Contact Form */}
          <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-primary/10">
            <h3 className="text-xl font-headline text-primary mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-primary/20 focus:border-primary/50"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-primary/20 focus:border-primary/50"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-black/50 border-primary/20 focus:border-primary/50"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              <p className="text-xs text-foreground/50 text-center mt-2">
                Messages are sent directly to Gabriel via FormSubmit.co
              </p>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-center mt-2"
                >
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm text-green-400">Your message has been sent to Gabriel at 999gabriel.winkler@gmail.com</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-center mt-2"
                >
                  {formSubmitted ? (
                    <>
                      <p className="font-medium">Message sent via alternative method!</p>
                      <p className="text-sm text-amber-400">Your browser should have opened a new page to complete the submission.</p>
                    </>
                  ) : (
                    <>
                      <p className="font-medium">Unable to send your message.</p>
                      <p className="text-sm">Please try again or contact Gabriel directly at 999gabriel.winkler@gmail.com</p>
                    </>
                  )}
                </motion.div>
              )}
            </form>
          </div>

          {/* Alternative Contact Methods */}
          <div className="space-y-6">
            {/* Live Chat Option */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-primary/10"
            >
              <h3 className="text-xl font-headline text-primary mb-4">Start a Live Chat</h3>
              <p className="text-foreground/70 mb-4">
                Need immediate assistance? Start a live chat with our team.
              </p>
              <Button 
                onClick={handleChatToggle}
                variant="outline" 
                className="w-full border-primary/20 hover:border-primary/50"
              >
                {showChat ? 'Hide Chat' : 'Open Chat Window'}
              </Button>

              {showChat && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 bg-black/50 p-4 rounded-lg border border-primary/20"
                >
                  <p className="text-primary mb-2">Chat coming soon!</p>
                  <p className="text-sm text-foreground/70">
                    Our live chat feature is currently under development. Please use the contact form or social media for now.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-primary/10"
            >
              <h3 className="text-xl font-headline text-primary mb-4">Connect on Social Media</h3>
              <p className="text-foreground/70 mb-4">
                Follow us and send direct messages on your preferred platform.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://linkedin.com/in/winware" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-black/50 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://twitter.com/winware" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-black/50 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  Twitter
                </a>
                <a 
                  href="https://instagram.com/winware" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-black/50 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>
                <a 
                  href="https://github.com/winware" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-black/50 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Phone Contact Option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-primary/10 text-center"
        >
          <h3 className="text-xl font-headline text-primary mb-2">Prefer to Talk?</h3>
          <p className="text-foreground/70 mb-4">
            Schedule a call with our team at your convenience.
          </p>
          <Button variant="outline" className="border-primary/20 hover:border-primary/50">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Schedule a Call
          </Button>
        </motion.div>
      </div>
  );
}
