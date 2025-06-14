import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
    <Card className="flex flex-col h-full bg-card shadow-subtle-lift rounded-2xl overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-103">
      <CardHeader className="p-0 overflow-hidden relative">
        <img
          src={specialist.imageUrl}
          alt={`Dr. ${specialist.name} portrait`}
          className="w-full h-60 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl font-display text-charcoal mb-1.5 leading-tight">{specialist.name}</CardTitle>
        <p className="text-deep-teal font-medium text-sm mb-3">{specialist.specialty}</p>
        <p className="text-sm text-muted-foreground leading-body">{specialist.bioSample}</p>
      </CardContent>
      <CardFooter className="p-6 pt-2">
        <Button asChild variant="outline" className="w-full border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white transition-all duration-300 group-hover:shadow-lg">
          <Link to="/patient-intake" aria-label={`Book an appointment with Dr. ${specialist.name}`}>
            <span className="inline-flex items-center justify-center w-full">
              Book with Dr. {specialist.name.split(' ').pop()}
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SpecialistCard;
