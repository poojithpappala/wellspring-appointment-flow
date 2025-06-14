import React from 'react';
import SpecialistCard, { Specialist } from './SpecialistCard';

const specialistsData: Specialist[] = [
  {
    id: '1',
    name: 'Dr. Ayesha Khan',
    specialty: 'Cardiologist',
    bioSample: 'Dr. Ayesha Khan is a Cardiologist with 10+ years in pediatric surgery and adult cardiac care.',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
  },
  {
    id: '2',
    name: 'Dr. Ben Carter',
    specialty: 'Dermatologist',
    bioSample: 'Dr. Ben Carter specializes in advanced dermatology and cosmetic procedures.',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
  },
  {
    id: '3',
    name: 'Dr. Clara Danes',
    specialty: 'Neurologist',
    bioSample: 'Dr. Clara Danes focuses on neurological disorders and cutting-edge research.',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da60310?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
  },
  {
    id: '4',
    name: 'Dr. David Lee',
    specialty: 'Pediatrician',
    bioSample: 'Dr. David Lee provides compassionate care for children of all ages.',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
  },
];

const SpecialistsGrid: React.FC = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-display text-center text-charcoal mb-4 leading-tight" aria-label="Meet Our Esteemed Specialists">
          Meet Our Esteemed Specialists
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Our team of dedicated specialists is here to provide you with expert care across various medical fields.
          Learn more about their expertise and find the right doctor for your needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {specialistsData.map((specialist) => (
            <SpecialistCard key={specialist.id} specialist={specialist} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialistsGrid;
