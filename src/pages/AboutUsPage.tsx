
import React from 'react';
import AnimatedSection from '@/components/global/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Users, Target } from 'lucide-react'; // Icons for sections

const AboutUsPage: React.FC = () => {
  return (
    <div className="container mx-auto section-padding">
      <AnimatedSection>
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 leading-heading">
            About WellnessPortal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-body">
            Dedicated to simplifying your journey to better health with seamless access to expert medical care.
          </p>
        </header>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <Card className="shadow-soft rounded-2xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center text-deep-teal">
              <Target size={28} className="mr-3" /> Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-body space-y-4">
            <p>
              At WellnessPortal, our mission is to empower individuals by providing easy and transparent access to a network of trusted medical specialists. We believe that managing your health should be straightforward and stress-free. Our platform is designed to connect you with the right experts quickly and efficiently, ensuring you receive personalized care tailored to your needs.
            </p>
            <p>
              We are committed to leveraging technology to bridge the gap between patients and healthcare providers, fostering a community built on trust, expertise, and compassionate care.
            </p>
          </CardContent>
        </Card>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581091226809-5003f7a23f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNhbCUyMHRlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              alt="WellnessPortal Team"
              className="rounded-2xl shadow-xl w-full h-auto object-cover max-h-[400px]"
              loading="lazy"
            />
          </div>
          <div className="text-muted-foreground leading-body space-y-4">
            <h2 className="text-3xl font-semibold text-charcoal mb-4 leading-heading">Our Vision for a Healthier Future</h2>
            <p>
              We envision a world where healthcare is not just reactive but proactive, where technology enhances the human touch in medicine, and where every individual has the tools and support to manage their well-being effectively.
            </p>
            <p>
              WellnessPortal aims to be at the forefront of this change, continuously innovating and expanding our services to meet the evolving needs of our community.
            </p>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-center text-charcoal mb-10 leading-heading">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Card className="shadow-soft rounded-2xl p-6">
            <Stethoscope size={40} className="mx-auto mb-4 text-deep-teal" />
            <h3 className="text-xl font-semibold text-charcoal mb-2">Expert Specialists</h3>
            <p className="text-sm text-muted-foreground leading-body">Access a curated network of highly qualified and experienced medical professionals across various specialties.</p>
          </Card>
          <Card className="shadow-soft rounded-2xl p-6">
            <Users size={40} className="mx-auto mb-4 text-deep-teal" />
            <h3 className="text-xl font-semibold text-charcoal mb-2">Patient-Centric Approach</h3>
            <p className="text-sm text-muted-foreground leading-body">Your health and convenience are our top priorities. We provide a seamless and supportive experience.</p>
          </Card>
          <Card className="shadow-soft rounded-2xl p-6">
            <Target size={40} className="mx-auto mb-4 text-deep-teal" /> {/* Re-using Target, could be other icon */}
            <h3 className="text-xl font-semibold text-charcoal mb-2">Seamless Technology</h3>
            <p className="text-sm text-muted-foreground leading-body">Our user-friendly platform makes booking appointments and managing your health information easy.</p>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutUsPage;

