
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Business Executive',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b48c?ixlib=rb-4.0.3&w=150&q=80',
    rating: 5,
    text: 'The quality of care I received was exceptional. The platform made it so easy to connect with a top cardiologist within hours.',
    highlight: 'Exceptional quality of care'
  },
  {
    name: 'Michael Chen',
    role: 'Tech Entrepreneur',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&q=80',
    rating: 5,
    text: 'As someone who travels frequently, having access to premium healthcare consultations anywhere is invaluable. Highly recommend!',
    highlight: 'Premium healthcare anywhere'
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Medical Researcher',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&w=150&q=80',
    rating: 5,
    text: 'The level of professionalism and the caliber of specialists available through this platform is truly impressive.',
    highlight: 'Impressive professionalism'
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-deep-teal/10 rounded-full text-sm font-medium text-deep-teal mb-6">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Patient Stories
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6 leading-tight">
            What Our Premium Patients
            <span className="bg-gradient-to-r from-deep-teal to-blue-600 bg-clip-text text-transparent"> Say </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have experienced premium healthcare through our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-8">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-deep-teal/20">
                  <Quote className="h-8 w-8" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                {/* Highlight */}
                <div className="bg-deep-teal/10 rounded-lg p-3 mb-6">
                  <p className="text-deep-teal font-semibold text-sm">
                    {testimonial.highlight}
                  </p>
                </div>
                
                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
