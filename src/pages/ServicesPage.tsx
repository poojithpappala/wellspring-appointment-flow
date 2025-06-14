import React from 'react';
import AnimatedSection from '@/components/global/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Activity, ShieldCheck, HeartPulse, ArrowRight, CheckCircle, Sparkles, Award, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const services = [
  {
    icon: <Briefcase size={40} className="text-deep-teal" />,
    title: 'Specialist Consultations',
    description: 'Connect with world-class medical specialists for expert diagnosis and personalized treatment plans. Our platform ensures you get the right care at the right time.',
    features: ['Board-certified specialists', 'Same-day appointments', 'Comprehensive consultations', 'Follow-up care included'],
    available: true,
    badge: 'Most Popular'
  },
  {
    icon: <HeartPulse size={40} className="text-deep-teal" />,
    title: 'Wellness Programs',
    description: 'Comprehensive wellness programs designed to optimize your health journey through personalized fitness, nutrition, and mental well-being support.',
    features: ['Personal health coaching', 'Customized meal plans', 'Fitness tracking', 'Mental health support'],
    available: false,
    badge: 'Coming Soon'
  },
  {
    icon: <ShieldCheck size={40} className="text-deep-teal" />,
    title: 'Secure Health Records',
    description: 'Advanced health record management system with bank-level security. Access your complete medical history, test results, and prescriptions anywhere.',
    features: ['HIPAA compliant security', 'Real-time synchronization', 'Easy sharing with doctors', '24/7 access'],
    available: false,
    badge: 'Coming Soon'
  },
];

const stats = [
  { number: "500+", label: "Expert Specialists", icon: Award },
  { number: "10,000+", label: "Satisfied Patients", icon: HeartPulse },
  { number: "24/7", label: "Support Available", icon: Clock },
  { number: "98%", label: "Success Rate", icon: CheckCircle }
];

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative section-padding pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-deep-teal/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-deep-teal/10 rounded-full text-sm font-medium text-deep-teal mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Premium Healthcare Services
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Comprehensive
                <br />
                <span className="bg-gradient-to-r from-deep-teal to-blue-600 bg-clip-text text-transparent">
                  Healthcare Solutions
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                Experience healthcare reimagined with our comprehensive suite of services designed to support your health journey at every step.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/patient-intake">
                  <Button size="lg" className="bg-deep-teal hover:bg-deep-teal/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
                    Book Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:border-deep-teal hover:text-deep-teal px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-deep-teal/10 rounded-2xl flex items-center justify-center group-hover:bg-deep-teal/20 transition-colors duration-300">
                      <stat.icon className="w-8 h-8 text-deep-teal" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Our Premium Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive range of healthcare services designed to meet all your medical needs with excellence and compassion.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <AnimatedSection key={index} className="h-full">
                <Card className="relative shadow-xl rounded-3xl h-full flex flex-col p-2 group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2 overflow-hidden">
                  {/* Badge */}
                  <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-semibold ${
                    service.available 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-orange-100 text-orange-700'
                  }`}>
                    {service.badge}
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-deep-teal/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  <CardHeader className="flex flex-col items-center text-center space-y-6 pt-12 pb-6 relative z-10">
                    <div className="p-4 bg-deep-teal/10 rounded-2xl inline-block group-hover:bg-deep-teal/20 group-hover:scale-110 transition-all duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl font-display text-gray-900 group-hover:text-deep-teal transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow text-center px-8 pb-8 relative z-10">
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3 text-left">
                          <CheckCircle className="h-5 w-5 text-deep-teal flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full rounded-xl font-semibold transition-all duration-300 ${
                        service.available
                          ? 'bg-deep-teal hover:bg-deep-teal/90 text-white shadow-lg hover:shadow-xl'
                          : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!service.available}
                    >
                      {service.available ? 'Book Now' : 'Notify Me'}
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-deep-teal to-blue-600 text-white">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to Transform Your Health?
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Join thousands who've discovered premium healthcare made simple. 
                Your journey to better health starts with a single click.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/patient-intake">
                  <Button size="lg" className="bg-white text-deep-teal hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    Start Your Journey
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-deep-teal px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                  onClick={() => handleNavigation('/contact')}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
