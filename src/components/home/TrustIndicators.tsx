
import React from 'react';
import { Shield, Award, Users, Globe } from 'lucide-react';

const trustMetrics = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Trusted Patients',
    description: 'Join thousands who trust us'
  },
  {
    icon: Award,
    value: '500+',
    label: 'Board-Certified Doctors',
    description: 'From top medical institutions'
  },
  {
    icon: Shield,
    value: '99.9%',
    label: 'Uptime Guarantee',
    description: 'Always available when you need us'
  },
  {
    icon: Globe,
    value: '50+',
    label: 'Countries Served',
    description: 'Global healthcare network'
  }
];

const certifications = [
  { name: 'HIPAA Compliant', verified: true },
  { name: 'ISO 27001 Certified', verified: true },
  { name: 'SOC 2 Type II', verified: true },
  { name: 'FDA Approved Platform', verified: true }
];

const TrustIndicators: React.FC = () => {
  return (
    <section className="section-padding bg-white border-y border-gray-100">
      <div className="container mx-auto">
        {/* Trust Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustMetrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-deep-teal/10 mb-4 group-hover:bg-deep-teal/20 transition-colors duration-300">
                <metric.icon className="h-8 w-8 text-deep-teal" />
              </div>
              <div className="text-3xl font-bold font-display text-gray-900 mb-1">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-gray-600">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-100 pt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display text-gray-900 mb-2">
              Trusted & Certified Platform
            </h3>
            <p className="text-gray-600">
              Your health data is protected by industry-leading security standards
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">{cert.name}</span>
                {cert.verified && (
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
