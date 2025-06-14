
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustIndicators from '@/components/home/TrustIndicators';
import PremiumFeaturesSection from '@/components/home/PremiumFeaturesSection';
import AdvancedBookingSection from '@/components/home/AdvancedBookingSection';
import StatsSection from '@/components/home/StatsSection';
import SpecialistsGrid from '@/components/home/SpecialistsGrid';
import PricingSection from '@/components/home/PricingSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaBanner from '@/components/home/CtaBanner';
import AnimatedSection from '@/components/global/AnimatedSection';

const HomePage: React.FC = () => {
  return (
    <div className="-mt-24 pt-24">
      <AnimatedSection animationClass="animate-fade-in">
        <HeroSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <TrustIndicators />
      </AnimatedSection>
      
      <AnimatedSection>
        <StatsSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <PremiumFeaturesSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <AdvancedBookingSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <SpecialistsGrid />
      </AnimatedSection>
      
      <AnimatedSection>
        <PricingSection />
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
