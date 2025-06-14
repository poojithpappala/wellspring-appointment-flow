
import React from 'react';
import AnimatedSection from '@/components/global/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react'; // Added Send icon

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Contact form submitted');
    // Potentially use toast notification here for feedback
    // For example: toast({ title: "Message Sent!", description: "We'll get back to you soon." });
  };

  return (
    <div className="container mx-auto section-padding">
      <AnimatedSection>
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display text-charcoal mb-6 leading-tight">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're here to help. Reach out to us with any questions or inquiries, and our team will get back to you shortly.
          </p>
        </header>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12 items-stretch"> {/* items-stretch for equal height cards */}
        <AnimatedSection className="flex">
          <Card className="shadow-subtle-lift rounded-2xl w-full flex flex-col">
            <CardHeader className="p-8">
              <CardTitle className="text-3xl font-display text-deep-teal">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 p-8 pt-0 flex-grow"> {/* Increased spacing */}
              <div className="flex items-start space-x-4">
                <Mail size={28} className="text-deep-teal mt-0.5 flex-shrink-0" /> {/* Adjusted size */}
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-1">Email Us</h3>
                  <a href="mailto:support@wellnessportal.example.com" className="text-muted-foreground hover:text-deep-teal transition-colors duration-200">
                    support@wellnessportal.example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone size={28} className="text-deep-teal mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-1">Call Us</h3>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin size={28} className="text-deep-teal mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-1">Our Office</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    123 Wellness Avenue, Health City, HC 54321, United States
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection className="flex">
          <Card className="shadow-subtle-lift rounded-2xl w-full flex flex-col">
            <CardHeader className="p-8">
              <CardTitle className="text-3xl font-display text-deep-teal">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 flex-grow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="form-label">Full Name</Label>
                  <Input id="name" type="text" placeholder="e.g. Jane Doe" required className="input-field mt-1" />
                </div>
                <div>
                  <Label htmlFor="email" className="form-label">Email Address</Label>
                  <Input id="email" type="email" placeholder="e.g. jane.doe@example.com" required className="input-field mt-1" />
                </div>
                <div>
                  <Label htmlFor="subject" className="form-label">Subject</Label>
                  <Input id="subject" type="text" placeholder="e.g. Inquiry about Services" required className="input-field mt-1" />
                </div>
                <div>
                  <Label htmlFor="message" className="form-label">Message</Label>
                  <Textarea id="message" placeholder="Write your message here..." required rows={5} className="input-field mt-1 min-h-[120px]" />
                </div>
                <Button type="submit" size="lg" className="w-full btn-primary text-lg py-3.5 group">
                  Send Message
                  <Send size={18} className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ContactPage;
