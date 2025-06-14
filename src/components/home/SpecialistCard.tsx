
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award } from 'lucide-react';

export interface Specialist {
  id: string;
  name: string;
  specialty: string;
  bioSample: string;
  imageUrl: string;
  rating?: number;
  experience?: string;
  education?: string;
}

interface SpecialistCardProps {
  specialist: Specialist;
}

const SpecialistCard: React.FC<SpecialistCardProps> = ({ specialist }) => {
  const rating = specialist.rating || 4.9;
  const experience = specialist.experience || "10+ years";
  const education = specialist.education || "Harvard Medical School";

  return (
    <Card className="group relative overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl">
      {/* Premium badge */}
      <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
        Premium
      </div>
      
      <CardHeader className="p-0 overflow-hidden relative">
        <div className="relative h-64">
          <img
            src={specialist.imageUrl}
            alt={`Dr. ${specialist.name} portrait`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Rating overlay */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-semibold text-gray-900">{rating}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 flex-grow">
        <div className="mb-4">
          <CardTitle className="text-2xl font-display text-gray-900 mb-2 group-hover:text-deep-teal transition-colors duration-300">
            {specialist.name}
          </CardTitle>
          <p className="text-deep-teal font-semibold text-base mb-2">{specialist.specialty}</p>
          
          {/* Credentials */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <Award className="h-4 w-4 mr-2 text-deep-teal" />
              <span>{education}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Award className="h-4 w-4 mr-2 text-deep-teal" />
              <span>{experience} experience</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 leading-relaxed text-sm mb-6">{specialist.bioSample}</p>
        
        {/* Specialties tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-deep-teal/10 text-deep-teal px-3 py-1 rounded-full text-xs font-medium">
            Board Certified
          </span>
          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
            Same Day
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Link to="/patient-intake" className="w-full">
          <Button className="w-full bg-gradient-to-r from-deep-teal to-blue-600 hover:from-deep-teal/90 hover:to-blue-600/90 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <span className="inline-flex items-center justify-center w-full">
              Book with Dr. {specialist.name.split(' ').pop()}
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </Link>
      </CardFooter>
      
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-deep-teal/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </Card>
  );
};

export default SpecialistCard;
