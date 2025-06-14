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
    <section className="bg-secondary section-padding overflow-hidden"> {/* Added overflow-hidden for safety */}
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center"> {/* Increased gap */}
          {/* Left Column: Image */}
          <div className="md:order-1 order-2 transform transition-all duration-500 ease-in-out hover:scale-103">
            <img
              src={heroImageUrl}
              alt="Patient consulting doctor"
              className="rounded-3xl shadow-2xl w-full h-auto object-cover max-h-[550px]" /* Larger rounding, max-h */
              loading="eager" /* Eager load for LCP */
            />
          </div>

          {/* Right Column: Content + Testimonial Carousel */}
          <div className="md:order-2 order-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-display text-charcoal mb-6 leading-tight"> {/* Use font-display, adjusted size */}
              Your Health, Simplified.
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed"> {/* Adjusted size and leading */}
              Easily book appointments with our expert specialists online.
              Quality care is just a few clicks away.
            </p>
            <div className="mb-12">
               <Button asChild size="lg" className="btn-primary text-lg px-10 py-4 group">
                <Link to="/patient-intake" aria-label="Book an appointment now">
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
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
