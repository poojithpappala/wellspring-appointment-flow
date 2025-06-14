
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
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-deep-teal/10 rounded-full text-xs sm:text-sm font-medium text-deep-teal mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-deep-teal rounded-full mr-2"></span>
            Premium Features
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            Why Choose Our
            <span className="bg-gradient-to-r from-deep-teal to-blue-600 bg-clip-text text-transparent"> Premium </span>
            Platform?
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of healthcare with our cutting-edge platform designed for 
            discerning patients who demand excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-gray-800"
            >
              <CardContent className="p-6 sm:p-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-lg sm:text-xl font-display font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-deep-teal transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
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
