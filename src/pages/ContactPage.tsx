
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import AnimatedSection from '@/components/global/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  phone: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage: React.FC = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      phone: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Contact form submitted:', data);
      
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@wellnessportal.com",
      description: "Get answers to your questions",
      href: "mailto:support@wellnessportal.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "(555) 123-4567",
      description: "Mon-Fri, 8AM-6PM EST",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Wellness Avenue",
      description: "Health City, HC 54321",
      href: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "< 24 Hours",
      description: "We respond quickly",
      href: null,
    },
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "Quick Response",
      description: "We respond to all inquiries within 24 hours"
    },
    {
      icon: CheckCircle,
      title: "Expert Support",
      description: "Our healthcare professionals are here to help"
    },
    {
      icon: Phone,
      title: "Multiple Channels",
      description: "Reach us via email, phone, or our contact form"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto section-padding">
        <AnimatedSection>
          <header className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-deep-teal/10 rounded-full text-deep-teal text-sm font-medium mb-6">
              <MessageSquare size={16} className="mr-2" />
              We're Here to Help
            </div>
            <h1 className="text-5xl md:text-7xl font-display text-charcoal mb-6 leading-tight">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have questions about our services? Need support with your appointment? 
              Our dedicated team is ready to assist you every step of the way.
            </p>
          </header>
        </AnimatedSection>

        {/* Features Section */}
        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-deep-teal/10 rounded-2xl mb-4">
                  <feature.icon size={28} className="text-deep-teal" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Form */}
          <AnimatedSection className="lg:col-span-2">
            <Card className="shadow-2xl rounded-3xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-3xl font-display text-deep-teal flex items-center">
                  <Send size={32} className="mr-3" />
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-charcoal font-medium">Full Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your full name"
                                className="h-12 rounded-xl border-gray-200 focus:border-deep-teal transition-colors"
                                {...field}
                              />
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
                            <FormLabel className="text-charcoal font-medium">Email Address *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your.email@example.com"
                                className="h-12 rounded-xl border-gray-200 focus:border-deep-teal transition-colors"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-charcoal font-medium">Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="(555) 123-4567"
                                className="h-12 rounded-xl border-gray-200 focus:border-deep-teal transition-colors"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-charcoal font-medium">Subject *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="How can we help you?"
                                className="h-12 rounded-xl border-gray-200 focus:border-deep-teal transition-colors"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-charcoal font-medium">Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please describe your inquiry in detail..."
                              className="min-h-[140px] rounded-xl border-gray-200 focus:border-deep-teal transition-colors resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      size="lg"
                      disabled={form.formState.isSubmitting}
                      className="w-full btn-primary text-lg py-4 h-auto group"
                    >
                      {form.formState.isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection>
            <div className="space-y-6">
              <Card className="shadow-xl rounded-3xl border-0 bg-gradient-to-br from-deep-teal to-blue-600 text-white overflow-hidden">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-display text-white">
                    Contact Information
                  </CardTitle>
                  <p className="text-blue-100 mt-2">
                    Multiple ways to reach our team
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-0 space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="group">
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="flex items-start space-x-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                        >
                          <div className="flex-shrink-0">
                            <info.icon size={24} className="text-white group-hover:scale-110 transition-transform" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                            <p className="text-blue-100 font-medium">{info.content}</p>
                            <p className="text-blue-200 text-sm">{info.description}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/10">
                          <div className="flex-shrink-0">
                            <info.icon size={24} className="text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                            <p className="text-blue-100 font-medium">{info.content}</p>
                            <p className="text-blue-200 text-sm">{info.description}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card className="shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center">
                    <MessageSquare size={32} className="text-deep-teal mx-auto mb-3" />
                    <h3 className="font-semibold text-charcoal mb-2">Frequently Asked Questions</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Find quick answers to common questions
                    </p>
                    <Button variant="outline" className="w-full">
                      View FAQ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>

        {/* Additional CTA Section */}
        <AnimatedSection>
          <div className="mt-20 text-center">
            <Card className="max-w-4xl mx-auto shadow-xl rounded-3xl border-0 bg-gradient-to-r from-gray-50 to-blue-50">
              <CardContent className="p-12">
                <h2 className="text-3xl font-display text-charcoal mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                  Book your premium appointment today and experience healthcare redefined.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="btn-primary">
                    Book Premium Appointment
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More About Our Services
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ContactPage;
