
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Stethoscope } from 'lucide-react'; // Using Stethoscope as a logo icon
import { Button } from '@/components/ui/button'; // Using shadcn button

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Patient Intake', path: '/patient-intake' },
  { title: 'Doctor Portal', path: '/doctor' },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-background/80 backdrop-blur-md shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Increased height to 5rem/80px */}
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-deep-teal hover:text-opacity-80 transition-colors">
            <Stethoscope size={32} strokeWidth={2} />
            <span className="font-bold text-xl tracking-tight">WellnessPortal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="text-charcoal hover:text-deep-teal px-3 py-2 rounded-md text-base font-medium transition-colors leading-body"
                aria-label={link.title}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Open main menu"
              aria-expanded={mobileMenuOpen}
              className="text-charcoal hover:text-deep-teal hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background shadow-lg z-40 rounded-b-2xl mx-2">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)} // Close menu on click
                className="block text-charcoal hover:text-deep-teal hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors leading-body"
                aria-label={link.title}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
