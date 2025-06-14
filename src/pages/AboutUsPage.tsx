import React from 'react';
import AnimatedSection from '@/components/global/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Award, CheckCircle, Clock, HeartPulse, Lightbulb, Rocket, ShieldCheck, User2 } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Eleanor Vance',
    title: 'Chief Medical Officer',
    description: 'A visionary leader with over 20 years of experience in healthcare innovation.',
    imageUrl: 'https://images.unsplash.com/photo-1612349378822-63254c36eaf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    name: 'Michael Davis',
    title: 'Head of Technology',
    description: 'Expert in building scalable and secure healthcare platforms.',
    imageUrl: 'https://images.unsplash.com/photo-1580489843578-3907f860d707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1161&q=80',
  },
  {
    name: 'Sarah Johnson',
    title: 'Patient Care Manager',
    description: 'Dedicated to ensuring every patient receives personalized and compassionate care.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-943150e4f986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  },
];

const values = [
  {
    icon: <Lightbulb size={40} className="text-deep-teal" />,
    title: 'Innovation',
    description: 'We embrace cutting-edge technology to deliver the best healthcare solutions.',
  },
  {
    icon: <HeartPulse size={40} className="text-deep-teal" />,
    title: 'Compassion',
    description: 'We are committed to providing empathetic and personalized care to every patient.',
  },
  {
    icon: <ShieldCheck size={40} className="text-deep-teal" />,
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in all our interactions.',
  },
  {
    icon: <Rocket size={40} className="text-deep-teal" />,
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our service, from technology to patient care.',
  },
];

const stats = [
  { number: "15+", label: "Years of Experience", icon: Clock },
  { number: "5000+", label: "Happy Patients", icon: User2 },
  { number: "99%", label: "Satisfaction Rate", icon: CheckCircle },
  { number: "10+", label: "Awards Won", icon: Award }
];

const AboutUsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative section-padding pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-deep-teal/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-deep-teal/10 rounded-full text-sm font-medium text-deep-teal mb-6">
                <ShieldCheck className="w-4 h-4 mr-2" />
                Our Commitment to Excellence
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight">
                About
                <br />
                <span className="bg-gradient-to-r from-deep-teal to-blue-600 bg-clip-text text-transparent">
                  WellnessPortal
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                Learn about our mission, values, and the dedicated team behind our premium healthcare services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/patient-intake">
                  <Button size="lg" className="bg-deep-teal hover:bg-deep-teal/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    Book Consultation
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:border-deep-teal hover:text-deep-teal px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                  Explore Services
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Founded in 2024, WellnessPortal was born out of a vision to revolutionize healthcare access and quality. We saw an opportunity to leverage technology to connect patients with the best specialists, provide personalized care, and simplify the healthcare journey.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our commitment to innovation, compassion, and excellence drives us to continuously improve and expand our services, ensuring that our patients receive the best possible care.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1532938314634-03c93e941d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                  alt="Our Story" 
                  className="rounded-3xl shadow-2xl" 
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our team comprises experienced healthcare professionals, technology experts, and dedicated support staff, all working together to provide you with the best possible care.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <img src={member.imageUrl} alt={member.name} className="w-full h-64 object-cover object-center" />
                  <div className="p-6">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-deep-teal font-medium mb-3">{member.title}</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These values guide our decisions and actions, ensuring we always put our patients first.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-deep-teal/10 rounded-2xl flex items-center justify-center group-hover:bg-deep-teal/20 transition-colors duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Our Achievements
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are proud of the impact we've made in the lives of our patients and the healthcare industry.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-deep-teal/10 rounded-2xl flex items-center justify-center group-hover:bg-deep-teal/20 transition-colors duration-300">
                      <stat.icon className="w-8 h-8 text-deep-teal" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-deep-teal to-blue-600 text-white">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Partner with Healthcare Excellence
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Ready to experience healthcare that puts you first? 
                Join our community of satisfied patients today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/patient-intake">
                  <Button size="lg" className="bg-white text-deep-teal hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    Book Consultation
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-deep-teal px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                  onClick={() => handleNavigation('/contact')}
                >
                  Contact Our Team
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
