
import React from 'react';
import { Button } from '@/components/ui/button';
import SpecialistCard, { Specialist } from './SpecialistCard';

const specialistsData: Specialist[] = [
  {
    id: '1',
    name: 'Dr. Ayesha Khan',
    specialty: 'Cardiologist',
    bioSample: 'Leading cardiologist specializing in advanced cardiac interventions and preventive cardiology with over 15 years of experience.',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    rating: 4.9,
    experience: '15+ years',
    education: 'Johns Hopkins Medical School'
  },
  {
    id: '2',
    name: 'Dr. Ben Carter',
    specialty: 'Dermatologist',
    bioSample: 'Board-certified dermatologist specializing in cosmetic procedures, skin cancer treatment, and advanced dermatological care.',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    rating: 4.8,
    experience: '12+ years',
    education: 'Stanford Medical School'
  },
  {
    id: '3',
    name: 'Dr. Clara Danes',
    specialty: 'Neurologist',
    bioSample: 'Renowned neurologist with expertise in treating complex neurological disorders and cutting-edge research in brain health.',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da60310?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    rating: 5.0,
    experience: '18+ years',
    education: 'Harvard Medical School'
  },
  {
    id: '4',
    name: 'Dr. David Lee',
    specialty: 'Pediatrician',
    bioSample: 'Compassionate pediatrician dedicated to providing comprehensive healthcare for children from infancy through adolescence.',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    rating: 4.9,
    experience: '14+ years',
    education: 'Yale Medical School'
  },
];

const SpecialistsGrid: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-deep-teal/10 rounded-full text-xs sm:text-sm font-medium text-deep-teal mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-deep-teal rounded-full mr-2"></span>
            Elite Medical Team
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            Meet Our
            <span className="bg-gradient-to-r from-deep-teal to-blue-600 bg-clip-text text-transparent"> World-Class </span>
            Specialists
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our carefully curated network of board-certified specialists represents the pinnacle of medical excellence. 
            Each doctor is selected for their expertise, compassion, and commitment to patient care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {specialistsData.map((specialist) => (
            <SpecialistCard key={specialist.id} specialist={specialist} />
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">Looking for a specific specialty?</p>
          <Button variant="outline" size="lg" className="border-2 border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white px-6 py-3 sm:px-8 rounded-xl transition-all duration-300 text-sm sm:text-base">
            View All 50+ Specialties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialistsGrid;
