
import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';
import { Button } from '@/components/ui/button'; // shadcn button
import { Link } from 'react-router-dom';

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
    <section className="bg-secondary section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="md:order-1 order-2">
            <img
              src={heroImageUrl}
              alt="Patient consulting doctor"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover max-h-[500px]"
              loading="lazy"
            />
          </div>

          {/* Right Column: Content + Testimonial Carousel */}
          <div className="md:order-2 order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-heading">
              Your Health, Simplified.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-body">
              Easily book appointments with our expert specialists online.
              Quality care is just a few clicks away.
            </p>
            <div className="mb-10">
               <Link to="/patient-intake">
                <Button 
                  size="lg" 
                  className="btn-primary text-lg px-10 py-4" 
                  aria-label="Book an appointment now"
                >
                  Book Appointment
                </Button>
              </Link>
            </div>
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
