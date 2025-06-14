
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Crown, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    name: 'Essential',
    price: 29,
    period: 'month',
    description: 'Perfect for individuals seeking quality healthcare',
    features: [
      'Video consultations with specialists',
      'Basic health record management',
      'Prescription management',
      'Email support',
      'Mobile app access'
    ],
    popular: false,
    gradient: 'from-gray-500 to-gray-600'
  },
  {
    name: 'Premium',
    price: 99,
    period: 'month',
    description: 'Comprehensive care for health-conscious individuals',
    features: [
      'Everything in Essential',
      'AI-powered health insights',
      'Priority scheduling',
      '24/7 telehealth support',
      'Personalized health coaching',
      'Family plan (up to 4 members)',
      'Advanced analytics dashboard'
    ],
    popular: true,
    gradient: 'from-deep-teal to-blue-600'
  },
  {
    name: 'Platinum',
    price: 299,
    period: 'month',
    description: 'Ultimate healthcare experience for executives',
    features: [
      'Everything in Premium',
      'Concierge health services',
      'Same-day appointments guaranteed',
      'Home visit consultations',
      'Executive health screenings',
      'Direct doctor phone line',
      'Global specialist network',
      'Wellness retreat access'
    ],
    popular: false,
    gradient: 'from-purple-600 to-pink-600'
  }
];

const PricingSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-deep-teal/10 rounded-full text-sm font-medium text-deep-teal mb-6">
            <Crown className="w-4 h-4 mr-2" />
            Premium Healthcare Plans
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6 leading-tight">
            Choose Your
            <span className="bg-gradient-to-r from-deep-teal to-blue-600 bg-clip-text text-transparent"> Premium </span>
            Healthcare Experience
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From essential care to executive concierge services, we have the perfect plan 
            to match your healthcare needs and lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-500 transform hover:-translate-y-3 ${
                plan.popular 
                  ? 'border-2 border-deep-teal shadow-2xl scale-105' 
                  : 'border border-gray-200 shadow-lg hover:shadow-2xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-deep-teal to-blue-600 text-white text-center py-2 text-sm font-semibold">
                  <Star className="inline w-4 h-4 mr-1" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-16' : 'pt-8'} pb-6`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} mb-4 mx-auto`}>
                  {index === 0 && <Zap className="h-8 w-8 text-white" />}
                  {index === 1 && <Crown className="h-8 w-8 text-white" />}
                  {index === 2 && <Star className="h-8 w-8 text-white" />}
                </div>
                
                <CardTitle className="text-2xl font-display mb-2">{plan.name}</CardTitle>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-deep-teal mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/patient-intake" className="block">
                  <Button 
                    className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-deep-teal to-blue-600 hover:from-deep-teal/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-xl'
                        : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-deep-teal hover:text-deep-teal'
                    }`}
                  >
                    {plan.popular ? 'Start Premium Journey' : 'Get Started'}
                  </Button>
                </Link>
              </CardContent>
              
              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-0 hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Need a custom enterprise solution?</p>
          <Button variant="outline" size="lg" className="border-2 border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white px-8 py-3 rounded-xl">
            Contact Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
