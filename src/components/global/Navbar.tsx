import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About Us', path: '/about' },
  { title: 'Services', path: '/services', comingSoon: true },
  { title: 'Patient Intake', path: '/patient-intake' },
  { title: 'Doctor Portal', path: '/doctor' },
  { title: 'Contact Us', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-background/80 backdrop-blur-md shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-deep-teal hover:text-opacity-80 transition-colors">
            <Stethoscope size={32} strokeWidth={2} />
            <span className="font-bold text-xl tracking-tight">WellnessPortal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.comingSoon ? '#' : link.path}
                className={`text-charcoal hover:text-deep-teal px-3 py-2 rounded-md text-sm font-medium transition-colors leading-body ${link.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label={link.title}
                onClick={link.comingSoon ? (e) => e.preventDefault() : undefined}
              >
                {link.title}
                {link.comingSoon && <span className="text-xs ml-1 opacity-70">(Soon)</span>}
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
                to={link.comingSoon ? '#' : link.path}
                onClick={() => {
                  if (!link.comingSoon) setMobileMenuOpen(false);
                }}
                className={`block text-charcoal hover:text-deep-teal hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors leading-body ${link.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label={link.title}
              >
                {link.title}
                {link.comingSoon && <span className="text-xs ml-1 opacity-70">(Soon)</span>}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
