
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import SpecialistsGrid from '@/components/home/SpecialistsGrid';
import CtaBanner from '@/components/home/CtaBanner';
import AnimatedSection from '@/components/global/AnimatedSection';
import KeyFeaturesSection from '@/components/home/KeyFeaturesSection'; // Import new section

const HomePage: React.FC = () => {
  return (
    <div>
      <AnimatedSection animationClass="animate-fade-in"> {/* Ensuring a smooth initial fade-in for hero */}
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection>
        <KeyFeaturesSection /> {/* Add new KeyFeaturesSection */}
      </AnimatedSection>
      <AnimatedSection>
        <SpecialistsGrid />
      </AnimatedSection>
      <AnimatedSection>
        <CtaBanner />
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
