
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export interface Specialist {
  id: string;
  name: string;
  specialty: string;
  bioSample: string;
  imageUrl: string;
}

interface SpecialistCardProps {
  specialist: Specialist;
}

const SpecialistCard: React.FC<SpecialistCardProps> = ({ specialist }) => {
  return (
    <Card className="flex flex-col h-full shadow-soft rounded-2xl overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-102">
      <CardHeader className="p-0">
        <img
          src={specialist.imageUrl}
          alt={`Dr. ${specialist.name} portrait`}
          className="w-full h-56 object-cover"
          loading="lazy"
        />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold text-charcoal mb-1 leading-heading">{specialist.name}</CardTitle>
        <p className="text-deep-teal font-medium mb-3">{specialist.specialty}</p>
        <p className="text-sm text-muted-foreground leading-body">{specialist.bioSample}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link to="/patient-intake" className="w-full">
          <Button variant="outline" className="w-full border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white transition-colors hover:scale-102" aria-label={`Book an appointment with Dr. ${specialist.name}`}>
            Book with Dr. {specialist.name.split(' ').pop()}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SpecialistCard;
