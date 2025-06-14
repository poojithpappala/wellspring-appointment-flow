
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import PremiumFeaturesSection from '@/components/home/PremiumFeaturesSection';
import StatsSection from '@/components/home/StatsSection';
import SpecialistsGrid from '@/components/home/SpecialistsGrid';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaBanner from '@/components/home/CtaBanner';
import AnimatedSection from '@/components/global/AnimatedSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <AnimatedSection animationClass="animate-fade-in">
        <HeroSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <StatsSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <PremiumFeaturesSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <SpecialistsGrid />
      </AnimatedSection>
      
      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <CtaBanner />
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
