import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';
import { Button } from '@/components/ui/button'; // shadcn button
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const testimonials = [
    {
      quote: "I felt truly heard and cared for by Dr. Khan. Highly recommend!",
      author: "Asha",
      stars: 5,
    },
    {
      quote: "Quick booking and professional advice—exactly what I needed.",
      author: "Rahim",
      stars: 4,
    },
    {
      quote: "The online portal made scheduling so easy and stress‑free.",
      author: "Priya",
      stars: 5,
    },
  ];

  // Placeholder image URL for "patient consulting doctor"
  const heroImageUrl = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yJTIwcGF0aWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80";

  return (
    <section className="bg-gradient-to-br from-secondary via-background to-background section-padding overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"> {/* Enhanced background and padding */}
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"> {/* Increased gap */}
          {/* Left Column: Image */}
          <div className="md:order-1 order-2 transform transition-all duration-700 ease-out hover:scale-103 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-deep-teal/20 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <img
                src={heroImageUrl}
                alt="Patient consulting doctor"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover max-h-[500px] md:max-h-[580px]" /* Adjusted max-h */
                loading="eager"
              />
            </div>
          </div>

          {/* Right Column: Content + Testimonial Carousel */}
          <div className="md:order-2 order-1 text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-charcoal mb-8 leading-tight font-bold"> {/* Adjusted size, weight, leading */}
              Your Health,
              <br />
              <span className="text-deep-teal">Simplified.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-lg mx-auto md:mx-0"> {/* Adjusted size and leading */}
              Easily book appointments with our expert specialists online.
              Quality care is just a few clicks away, bringing peace of mind directly to you.
            </p>
            <div className="mb-16"> {/* Increased margin */}
               <Button asChild size="lg" className="btn-primary text-lg px-10 py-7 group transform hover:shadow-xl"> {/* Increased py, added shadow */}
                <Link to="/patient-intake" aria-label="Book an appointment now">
                  Book Appointment Now
                  <ArrowRight className="ml-2.5 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1.5" /> {/* Adjusted icon style */}
                </Link>
              </Button>
            </div>
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
