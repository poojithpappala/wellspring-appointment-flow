
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, ListChecks } from 'lucide-react';

interface StatItemProps {
  icon: React.ElementType;
  label: string;
  value: number;
  colorClass: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon: Icon, label, value, colorClass }) => (
  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
    <Icon size={28} className={`${colorClass}`} />
    <div>
      <p className="text-2xl font-semibold text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  </div>
);

const StatsWidget: React.FC = () => {
  // Dummy data
  const stats = {
    totalBooked: 125,
    pending: 15,
    completed: 110,
  };

  return (
    <Card className="shadow-soft rounded-2xl bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl text-foreground leading-heading">Quick Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <StatItem icon={ListChecks} label="Total Booked" value={stats.totalBooked} colorClass="text-blue-500" />
        <StatItem icon={Clock} label="Pending" value={stats.pending} colorClass="text-yellow-500" />
        <StatItem icon={CheckCircle} label="Completed" value={stats.completed} colorClass="text-green-500" />
      </CardContent>
    </Card>
  );
};

export default StatsWidget;
