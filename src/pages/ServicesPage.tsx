
import React from 'react';
import AnimatedSection from '@/components/global/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Activity, ShieldCheck, HeartPulse } from 'lucide-react'; // Added HeartPulse

const services = [
  {
    icon: <Briefcase size={36} className="text-deep-teal" />, // Slightly larger icon
    title: 'Specialist Consultations',
    description: 'Connect with a wide range of medical specialists for expert advice and treatment plans. Our platform makes it easy to find and book appointments with top-tier doctors.',
  },
  {
    icon: <HeartPulse size={36} className="text-deep-teal" />, // Changed icon for wellness
    title: 'Wellness Programs',
    description: 'Access curated wellness programs designed to help you achieve your health goals, from fitness routines to mental well-being support. (Coming Soon)',
  },
  {
    icon: <ShieldCheck size={36} className="text-deep-teal" />,
    title: 'Secure Health Records',
    description: 'Manage your health records securely in one place. Access your medical history, test results, and prescriptions anytime, anywhere. (Coming Soon)',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto section-padding">
      <AnimatedSection>
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display text-charcoal mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            WellnessPortal is committed to providing comprehensive healthcare solutions. Discover the services we offer to support your health and well-being.
          </p>
        </header>
      </AnimatedSection>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <AnimatedSection key={index} className="h-full">
            <Card className="shadow-subtle-lift rounded-2xl h-full flex flex-col p-2 group hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center text-center space-y-4 pt-8 pb-4"> {/* Centered content */}
                <div className="p-4 bg-deep-teal/10 rounded-full inline-block group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                </div>
                <CardTitle className="text-2xl font-display text-charcoal group-hover:text-deep-teal transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center px-6 pb-8">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-20 text-center"> {/* Increased margin top */}
        <h2 className="text-3xl font-display text-charcoal mb-5">More Coming Soon</h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          We are continuously working to expand our offerings. Stay tuned for more innovative services designed to enhance your healthcare experience.
        </p>
      </AnimatedSection>
    </div>
  );
};

export default ServicesPage;
