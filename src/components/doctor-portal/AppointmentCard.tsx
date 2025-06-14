
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, MessageSquare } from 'lucide-react';

export interface Appointment {
  id: string;
  dateTime: string; // e.g., "2025-07-15 10:00 AM"
  patientFirstName: string;
  concern: string;
}

interface AppointmentCardProps {
  appointment: Appointment;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  return (
    <Card className="shadow-soft rounded-2xl mb-4 bg-background">
      <CardHeader>
        <CardTitle className="text-lg text-deep-teal flex items-center leading-heading">
          <Calendar size={20} className="mr-2" /> {new Date(appointment.dateTime).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
          {' at '}
          {new Date(appointment.dateTime).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center text-charcoal">
          <User size={18} className="mr-2 text-muted-foreground" />
          <span>Patient: {appointment.patientFirstName}</span>
        </div>
        <div className="flex items-start text-charcoal">
          <MessageSquare size={18} className="mr-2 mt-1 text-muted-foreground flex-shrink-0" />
          <span className="leading-body">Concern: {appointment.concern}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;
