
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Award, Globe, Heart, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: 'Your health data is protected with military-grade encryption and HIPAA compliance.',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Clock,
    title: 'Instant Appointments',
    description: 'Book same-day consultations with top specialists across 50+ medical fields.',
    gradient: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Award,
    title: 'Elite Specialists',
    description: 'Access to board-certified doctors from top medical institutions worldwide.',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Connect with specialists globally through our secure telemedicine platform.',
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'AI-powered health insights and personalized treatment recommendations.',
    gradient: 'from-pink-500 to-pink-600'
  },
  {
    icon: Users,
    title: 'Family Plans',
    description: 'Comprehensive healthcare coverage for your entire family with shared records.',
    gradient: 'from-indigo-500 to-indigo-600'
  }
];

const PremiumFeaturesSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-deep-teal/10 rounded-full text-sm font-medium text-deep-teal mb-6">
            <span className="w-2 h-2 bg-deep-teal rounded-full mr-2"></span>
            Premium Features
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6 leading-tight">
            Why Choose Our
            <span className="bg-gradient-to-r from-deep-teal to-blue-600 bg-clip-text text-transparent"> Premium </span>
            Platform?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of healthcare with our cutting-edge platform designed for 
            discerning patients who demand excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
            >
              <CardContent className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-deep-teal transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
              
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-deep-teal/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumFeaturesSection;
