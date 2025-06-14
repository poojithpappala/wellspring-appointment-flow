
import React from 'react';
import { ShieldCheck, Users, CalendarClock, Zap } from 'lucide-react';

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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-center text-charcoal dark:text-foreground mb-3 sm:mb-4 leading-tight">
          Why Choose WellnessPortal?
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          We are dedicated to providing you with a seamless and trustworthy healthcare experience. Here's what sets us apart:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 sm:p-6 bg-card rounded-xl shadow-subtle-lift hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="bg-deep-teal/10 p-3 sm:p-4 rounded-full mb-4 sm:mb-6 inline-block">
                <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-deep-teal" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-display text-charcoal dark:text-foreground mb-2 sm:mb-2.5">{feature.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
