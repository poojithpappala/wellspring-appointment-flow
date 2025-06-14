import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import SpecialistsGrid from '@/components/home/SpecialistsGrid';
import CtaBanner from '@/components/home/CtaBanner';
import AnimatedSection from '@/components/global/AnimatedSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <AnimatedSection>
        <HeroSection />
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
