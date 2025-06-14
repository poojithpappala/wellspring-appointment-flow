
import React from 'react';

const stats = [
  {
    number: '10,000+',
    label: 'Happy Patients',
    description: 'Trusted by thousands'
  },
  {
    number: '500+',
    label: 'Expert Doctors',
    description: 'Board-certified specialists'
  },
  {
    number: '50+',
    label: 'Medical Fields',
    description: 'Comprehensive coverage'
  },
  {
    number: '98%',
    label: 'Satisfaction Rate',
    description: 'Exceptional care quality'
  }
];

const StatsSection: React.FC = () => {
  return (
    <section className="section-padding bg-deep-teal">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl lg:text-5xl font-bold font-display mb-2">
                {stat.number}
              </div>
              <div className="text-lg lg:text-xl font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm lg:text-base text-blue-100 opacity-90">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
