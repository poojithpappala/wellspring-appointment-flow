
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award } from 'lucide-react';

const CtaBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-deep-teal via-deep-teal to-blue-600 section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Premium Healthcare Platform
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display mb-4 sm:mb-6 leading-tight">
            Ready to Experience
            <br />
            <span className="text-yellow-300">Premium Healthcare?</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed opacity-90">
            Join thousands of discerning patients who trust us with their health. 
            Experience the future of healthcare today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
            <Link to="/patient-intake" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-white text-deep-teal hover:bg-gray-100 text-base sm:text-lg px-6 py-4 sm:px-10 sm:py-6 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group font-semibold w-full"
              >
                <span className="inline-flex items-center justify-center">
                  Start Your Premium Journey
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
            
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-deep-teal backdrop-blur-sm text-base sm:text-lg px-6 py-4 sm:px-10 sm:py-6 rounded-xl transition-all duration-300 font-semibold w-full"
              >
                Contact Our Team
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/80">
            <div className="flex items-center">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="text-xs sm:text-sm font-medium">HIPAA Compliant</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="text-xs sm:text-sm font-medium">256-bit Encryption</span>
            </div>
            <div className="flex items-center">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="text-xs sm:text-sm font-medium">ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
