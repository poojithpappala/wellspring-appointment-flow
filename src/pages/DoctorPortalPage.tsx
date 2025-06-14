
import React, { useState } from 'react';
import LoginForm from '@/components/doctor-portal/LoginForm';
import DoctorDashboard from '@/components/doctor-portal/DoctorDashboard';
import AnimatedSection from '@/components/global/AnimatedSection';

const DoctorPortalPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="container mx-auto section-padding min-h-screen bg-background text-foreground">
      <AnimatedSection>
        {!isAuthenticated ? (
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        ) : (
          <DoctorDashboard onLogout={handleLogout} />
        )}
      </AnimatedSection>
    </div>
  );
};

export default DoctorPortalPage;
