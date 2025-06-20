
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Video, Smartphone, ArrowRight } from 'lucide-react';

const bookingFeatures = [
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'AI-powered appointment matching based on your preferences and doctor availability',
    highlight: 'Same-day appointments available'
  },
  {
    icon: Video,
    title: 'HD Video Consultations',
    description: 'Crystal-clear video calls with screen sharing and digital prescription capabilities',
    highlight: 'Enterprise-grade security'
  },
  {
    icon: Clock,
    title: 'Global Time Zones',
    description: 'Connect with specialists worldwide with automatic timezone coordination',
    highlight: '24/7 availability'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Experience',
    description: 'Seamlessly book and attend consultations from any device, anywhere',
    highlight: 'iOS & Android apps'
  }
];

const AdvancedBookingSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div>
              <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-deep-teal/10 rounded-full text-xs sm:text-sm font-medium text-deep-teal mb-4 sm:mb-6">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Advanced Booking System
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                Book Appointments in
                <span className="bg-gradient-to-r from-deep-teal to-blue-600 bg-clip-text text-transparent"> Seconds, </span>
                Not Minutes
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8">
                Our revolutionary booking system uses AI to instantly match you with the perfect 
                specialist based on your needs, location, and schedule preferences.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {bookingFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-deep-teal/10 flex items-center justify-center group-hover:bg-deep-teal/20 transition-colors duration-300">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-deep-teal" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-2">{feature.description}</p>
                    <span className="text-xs sm:text-sm font-medium text-deep-teal">{feature.highlight}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/patient-intake" className="w-full sm:w-auto">
                <Button size="lg" className="bg-deep-teal hover:bg-deep-teal/90 text-white px-4 py-3 sm:px-6 sm:py-4 lg:px-8 text-sm sm:text-base lg:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group w-full">
                  <span className="inline-flex items-center justify-center">
                    Book Now - Same Day Available
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              
              <Button variant="outline" size="lg" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-deep-teal hover:text-deep-teal dark:hover:border-deep-teal dark:hover:text-deep-teal px-4 py-3 sm:px-6 sm:py-4 lg:px-8 text-sm sm:text-base lg:text-lg font-semibold rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 w-full sm:w-auto">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right: Interactive Booking Preview */}
          <div className="relative max-w-sm mx-auto sm:max-w-md lg:max-w-none order-1 lg:order-2">
            <Card className="overflow-hidden shadow-2xl border-0 bg-white dark:bg-gray-800">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-deep-teal to-blue-600 p-4 sm:p-6 text-white">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Book Your Consultation</h3>
                  <p className="text-sm sm:text-base text-blue-100">Choose your preferred time and specialist</p>
                </div>
                
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {['Today', 'Tomorrow', 'This Week'].map((time, index) => (
                      <Button 
                        key={index}
                        variant={index === 0 ? "default" : "outline"}
                        className={`text-xs sm:text-sm py-2 px-2 sm:px-3 ${index === 0 ? 'bg-deep-teal hover:bg-deep-teal/90' : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800'}`}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    {['09:00 AM - Dr. Sarah Chen', '02:30 PM - Dr. Michael Ross', '05:00 PM - Dr. Lisa Park'].map((slot, index) => (
                      <div key={index} className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-deep-teal transition-colors cursor-pointer">
                        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">{slot}</span>
                        </div>
                        <span className="text-xs text-deep-teal font-medium flex-shrink-0">Available</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Floating stats */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 sm:p-4 border border-gray-100 dark:border-gray-700">
              <div className="text-center">
                <div className="text-base sm:text-lg font-bold text-deep-teal">&lt; 30s</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Avg. Booking Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedBookingSection;
