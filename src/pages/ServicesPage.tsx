
import React from 'react';
import AnimatedSection from '@/components/global/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Activity, ShieldCheck } from 'lucide-react'; // Example icons

const services = [
  {
    icon: <Briefcase size={32} className="text-deep-teal" />,
    title: 'Specialist Consultations',
    description: 'Connect with a wide range of medical specialists for expert advice and treatment plans. Our platform makes it easy to find and book appointments with top-tier doctors.',
  },
  {
    icon: <Activity size={32} className="text-deep-teal" />,
    title: 'Wellness Programs',
    description: 'Access curated wellness programs designed to help you achieve your health goals, from fitness routines to mental well-being support. (Coming Soon)',
  },
  {
    icon: <ShieldCheck size={32} className="text-deep-teal" />,
    title: 'Secure Health Records',
    description: 'Manage your health records securely in one place. Access your medical history, test results, and prescriptions anytime, anywhere. (Coming Soon)',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto section-padding">
      <AnimatedSection>
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 leading-heading">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-body">
            WellnessPortal is committed to providing comprehensive healthcare solutions. Discover the services we offer to support your health and well-being.
          </p>
        </header>
      </AnimatedSection>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <AnimatedSection key={index} className="h-full">
            <Card className="shadow-soft rounded-2xl h-full flex flex-col">
              <CardHeader className="flex flex-row items-center space-x-4">
                {service.icon}
                <CardTitle className="text-xl text-deep-teal">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground leading-body">{service.description}</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-charcoal mb-4">More Coming Soon</h2>
        <p className="text-muted-foreground max-w-xl mx-auto leading-body">
          We are continuously working to expand our offerings. Stay tuned for more innovative services designed to enhance your healthcare experience.
        </p>
      </AnimatedSection>
    </div>
  );
};

export default ServicesPage;
