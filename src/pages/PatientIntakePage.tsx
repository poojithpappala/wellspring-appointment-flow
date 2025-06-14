
import React, { useState } from 'react';
import OnboardingModal from '@/components/patient-intake/OnboardingModal';
import PatientIntakeForm from '@/components/patient-intake/PatientIntakeForm';
import CalendlyEmbed from '@/components/patient-intake/CalendlyEmbed';
import AnimatedSection from '@/components/global/AnimatedSection';

const PatientIntakePage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [showModal, setShowModal] = useState(true);

  const handleFormSubmit = (name: string) => {
    setFullName(name);
    setFormSubmitted(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto section-padding min-h-screen bg-background text-foreground">
      {showModal && <OnboardingModal onClose={handleModalClose} />}
      
      {!formSubmitted ? (
        <AnimatedSection>
          <PatientIntakeForm onSubmitSuccess={handleFormSubmit} />
        </AnimatedSection>
      ) : (
        <AnimatedSection>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-foreground leading-heading">
              Thanks, {fullName}! You're one step away…
            </h2>
          </div>
          <CalendlyEmbed />
          <p className="text-sm text-muted-foreground text-center mt-4">
            If you don't see the calendar, refresh or try again.
          </p>
        </AnimatedSection>
      )}
    </div>
  );
};

export default PatientIntakePage;
