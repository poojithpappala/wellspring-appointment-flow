
import React from 'react';
import AnimatedSection from '@/components/global/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Contact form submitted');
    // Potentially use toast notification here for feedback
  };

  return (
    <div className="container mx-auto section-padding">
      <AnimatedSection>
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 leading-heading">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-body">
            We're here to help. Reach out to us with any questions or inquiries, and our team will get back to you shortly.
          </p>
        </header>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12">
        <AnimatedSection>
          <Card className="shadow-soft rounded-2xl h-full">
            <CardHeader>
              <CardTitle className="text-2xl text-deep-teal">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail size={24} className="text-deep-teal mt-1" />
                <div>
                  <h3 className="font-semibold text-charcoal">Email Us</h3>
                  <a href="mailto:support@wellnessportal.example.com" className="text-muted-foreground hover:text-deep-teal transition-colors">
                    support@wellnessportal.example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone size={24} className="text-deep-teal mt-1" />
                <div>
                  <h3 className="font-semibold text-charcoal">Call Us</h3>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin size={24} className="text-deep-teal mt-1" />
                <div>
                  <h3 className="font-semibold text-charcoal">Our Office</h3>
                  <p className="text-muted-foreground">
                    123 Wellness Avenue, Health City, HC 54321
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection>
          <Card className="shadow-soft rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-deep-teal">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-charcoal">Full Name</Label>
                  <Input id="name" type="text" placeholder="Your Name" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-charcoal">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-charcoal">Subject</Label>
                  <Input id="subject" type="text" placeholder="How can we help?" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-charcoal">Message</Label>
                  <Textarea id="message" placeholder="Your message..." required rows={5} className="mt-1" />
                </div>
                <Button type="submit" className="w-full btn-primary text-lg py-3">
                  Send Message
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

