
import React from 'react';
import { ShieldCheck, Users, CalendarClock, Zap } from 'lucide-react'; // Added Zap for "Fast Service"

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Users,
    title: 'Expert Specialists',
    description: 'Access a network of highly qualified and experienced healthcare professionals.',
  },
  {
    icon: CalendarClock,
    title: 'Easy Online Booking',
    description: 'Schedule appointments effortlessly through our intuitive online platform, anytime, anywhere.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Confidential',
    description: 'Your health information is protected with state-of-the-art security measures.',
  },
  {
    icon: Zap,
    title: 'Prompt & Caring Service',
    description: 'Experience timely responses and compassionate care tailored to your needs.',
  },
];

const KeyFeaturesSection: React.FC = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-display text-center text-charcoal mb-4 leading-tight">
          Why Choose WellnessPortal?
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          We are dedicated to providing you with a seamless and trustworthy healthcare experience. Here’s what sets us apart:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-subtle-lift hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="bg-deep-teal/10 p-4 rounded-full mb-6 inline-block">
                <feature.icon className="h-10 w-10 text-deep-teal" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-display text-charcoal mb-2.5">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
