
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react'; // Using a different icon for variety

const CtaBanner: React.FC = () => {
  return (
    <section className="bg-deep-teal section-padding">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-display text-white mb-6 leading-tight"> {/* Ensured font-display */}
          Ready to Take Control of Your Health?
        </h2>
        <p className="text-lg text-primary-foreground opacity-90 mb-10 max-w-xl mx-auto leading-body"> {/* Increased bottom margin */}
          Take the first step towards better health. Book your appointment today and experience personalized, compassionate care.
        </p>
        <Link to="/patient-intake">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-deep-teal hover:bg-gray-100 text-lg px-10 py-6 shadow-soft hover:scale-103 transition-all duration-300 group transform hover:shadow-xl" /* Adjusted padding, hover effect */
            aria-label="Book Your Appointment Now"
          >
            Book Your Appointment
            <ChevronRight size={22} className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
