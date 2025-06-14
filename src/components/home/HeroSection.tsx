
import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

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

  const features = [
    "Board-certified specialists",
    "Same-day appointments",
    "Secure video consultations",
    "24/7 support available"
  ];

  const heroImageUrl = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yJTIwcGF0aWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80";

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 section-padding overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-deep-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-deep-teal/10 rounded-full text-sm font-medium text-deep-teal mb-6">
                <span className="w-2 h-2 bg-deep-teal rounded-full mr-2 animate-pulse"></span>
                Trusted by 10,000+ patients
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-gray-900 leading-tight font-bold">
                Premium Healthcare,
                <br />
                <span className="bg-gradient-to-r from-deep-teal to-blue-600 bg-clip-text text-transparent">
                  Redefined.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Experience world-class healthcare with our network of elite specialists. 
                Premium care, seamless booking, exceptional outcomes.
              </p>
            </div>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-deep-teal flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/patient-intake">
                <Button size="lg" className="bg-deep-teal hover:bg-deep-teal/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
                  <span className="inline-flex items-center">
                    Book Premium Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              
              <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:border-deep-teal hover:text-deep-teal px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                Watch Demo
              </Button>
            </div>

            <TestimonialCarousel testimonials={testimonials} />
          </div>

          {/* Right Column: Image */}
          <div className="lg:order-2 order-1 relative">
            <div className="relative group">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-deep-teal/20 to-blue-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              {/* Main image */}
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                <img
                  src={heroImageUrl}
                  alt="Premium healthcare consultation"
                  className="w-full h-auto object-cover rounded-2xl"
                  loading="eager"
                />
              </div>
              
              {/* Floating stats cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-deep-teal">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-deep-teal">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
