
import React from 'react';
import AppointmentCard, { Appointment } from './AppointmentCard';
import StatsWidget from './StatsWidget';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, LogOut } from 'lucide-react';

interface DoctorDashboardProps {
  onLogout: () => void;
}

// Dummy data for appointments
const upcomingAppointments: Appointment[] = [
  { id: '1', dateTime: '2025-06-15T10:00:00', patientFirstName: 'Alice', concern: 'Follow-up consultation for seasonal allergies and prescription renewal.' },
  { id: '2', dateTime: '2025-06-15T14:30:00', patientFirstName: 'Bob', concern: 'Initial consultation for persistent headaches and dizziness.' },
  { id: '3', dateTime: '2025-06-16T09:00:00', patientFirstName: 'Carol', concern: 'Discuss recent lab results and adjust medication plan.' },
];

const DoctorDashboard: React.FC<DoctorDashboardProps> = ({ onLogout }) => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-charcoal leading-heading">Doctor Dashboard</h2>
        <Button variant="outline" onClick={onLogout} aria-label="Logout from doctor portal" className="border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white hover:scale-102">
          <LogOut size={18} className="mr-2" /> Logout
        </Button>
      </div>

      <Alert variant="default" className="bg-yellow-50 border-yellow-300 text-yellow-700 rounded-2xl">
        <AlertTriangle className="h-5 w-5 text-yellow-600" />
        <AlertTitle className="font-semibold text-yellow-800">Portfolio Demo Note</AlertTitle>
        <AlertDescription>
          This is a portfolio demonstration. No real patient data is stored or displayed. All information is fictional.
        </AlertDescription>
      </Alert>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column: Upcoming Appointments */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold text-charcoal mb-4 leading-heading">Upcoming Appointments</h3>
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map(app => <AppointmentCard key={app.id} appointment={app} />)
          ) : (
            <p className="text-muted-foreground">No upcoming appointments.</p>
          )}
        </div>

        {/* Right Column: Quick Stats */}
        <div className="md:col-span-1">
           <StatsWidget />
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
