
import React from 'react';
import AnimatedSection from '@/components/global/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Stethoscope, Users, Target, Award, Shield, Clock, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUsPage: React.FC = () => {
  const stats = [
    { number: "10,000+", label: "Happy Patients", icon: Users },
    { number: "500+", label: "Expert Doctors", icon: Stethoscope },
    { number: "98%", label: "Success Rate", icon: Award },
    { number: "24/7", label: "Support", icon: Clock }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every interaction is guided by empathy and understanding, ensuring you feel heard and valued."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your health data is protected with bank-level security while maintaining complete transparency."
    },
    {
      icon: Target,
      title: "Precision Medicine",
      description: "Personalized treatment plans tailored to your unique health profile and lifestyle needs."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of medical care through continuous innovation and improvement."
    }
  ];

  const features = [
    "Board-certified specialists across 20+ medical fields",
    "Same-day appointments with 95% availability",
    "Secure, HIPAA-compliant telemedicine platform",
    "Integrated health records and treatment tracking",
    "24/7 emergency consultation access",
    "Multilingual support in 10+ languages"
  ];

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
                <Award className="w-4 h-4 mr-2" />
                Award-winning healthcare platform
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Redefining Healthcare
                <br />
                <span className="bg-gradient-to-r from-deep-teal to-blue-600 bg-clip-text text-transparent">
                  for Everyone
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                We're on a mission to make premium healthcare accessible, transparent, and personalized. 
                Join thousands who've transformed their health journey with us.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/patient-intake">
                  <Button size="lg" className="bg-deep-teal hover:bg-deep-teal/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:border-deep-teal hover:text-deep-teal px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                  Watch Our Story
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

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-deep-teal/10 rounded-full text-sm font-medium text-deep-teal mb-6">
                  <Target className="w-4 h-4 mr-2" />
                  Our Mission
                </div>
                
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                  Healthcare That
                  <span className="block bg-gradient-to-r from-deep-teal to-blue-600 bg-clip-text text-transparent">
                    Works for You
                  </span>
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We believe healthcare should be proactive, not reactive. Our platform connects you with world-class specialists 
                  who understand that every patient is unique, every condition is personal, and every treatment should be tailored.
                </p>
                
                <div className="space-y-3 mb-8">
                  {features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-deep-teal flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/services">
                  <Button className="bg-deep-teal hover:bg-deep-teal/90 text-white px-6 py-3 rounded-xl font-semibold">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
              
              <div className="relative">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-deep-teal/20 to-blue-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lZGljYWwlMjB0ZWFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80"
                      alt="Healthcare team collaboration"
                      className="w-full h-auto object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide every decision we make and every interaction we have with our patients and partners.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-deep-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-deep-teal/20 transition-colors duration-300">
                      <value.icon className="w-8 h-8 text-deep-teal" />
                    </div>
                    <CardTitle className="text-xl font-display font-semibold text-gray-900">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-deep-teal to-blue-600 text-white">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to Transform Your Health Journey?
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Join thousands of patients who've discovered a better way to manage their health. 
                Premium care is just one click away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/patient-intake">
                  <Button size="lg" className="bg-white text-deep-teal hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    Book Your Consultation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-deep-teal px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                    Contact Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
