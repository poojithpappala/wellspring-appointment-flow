
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CtaBanner: React.FC = () => {
  return (
    <section className="bg-deep-teal section-padding">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6 leading-heading">
          Ready to get started?
        </h2>
        <p className="text-lg text-primary-foreground opacity-90 mb-8 max-w-xl mx-auto leading-body">
          Take the first step towards better health. Book your appointment today and experience personalized care.
        </p>
        <Link to="/patient-intake">
          <Button
            size="lg"
            variant="secondary" // Using secondary variant for contrast on deep-teal
            className="bg-white text-deep-teal hover:bg-gray-100 text-lg px-10 py-4 shadow-soft hover:scale-102 transition-transform"
            aria-label="Book Appointment"
          >
            Book Appointment
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
