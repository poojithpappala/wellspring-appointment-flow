
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Use NavLink for active styling
import { Menu, X, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About Us', path: '/about' },
  { title: 'Services', path: '/services' },
  { title: 'Health Hub', path: '/health-hub' },
  { title: 'Patient Intake', path: '/patient-intake' },
  { title: 'Doctor Portal', path: '/doctor' },
  { title: 'Contact Us', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const activeLinkClass = "text-deep-teal font-semibold relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-deep-teal after:bottom-[-4px] after:left-0";
  const inactiveLinkClass = "text-charcoal hover:text-deep-teal transition-colors duration-200 ease-in-out";


  return (
    <header className="bg-background/90 backdrop-blur-lg shadow-soft sticky top-0 z-50 border-b border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24"> {/* Increased height */}
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5 text-deep-teal hover:opacity-80 transition-opacity duration-200">
            <Stethoscope size={36} strokeWidth={1.8} /> {/* Slightly larger icon */}
            <span className="font-display font-bold text-2xl tracking-tight">WellnessPortal</span> {/* Using display font */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4"> {/* Increased spacing */}
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.path}
                className={({ isActive }) =>
                  `${isActive ? activeLinkClass : inactiveLinkClass} px-3 py-2 rounded-md text-sm font-medium leading-body`
                }
                aria-label={link.title}
              >
                {link.title}
              </NavLink>
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
              className="text-charcoal hover:text-deep-teal hover:bg-gray-100/80 p-2 rounded-lg"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 bg-background shadow-xl z-40 rounded-b-2xl mx-2 border border-border/60">
          <div className="px-4 pt-3 pb-4 space-y-2 sm:px-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.path}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
                className={({ isActive }) =>
                  `${isActive ? 'bg-deep-teal/10 text-deep-teal font-semibold' : 'text-charcoal hover:text-deep-teal hover:bg-gray-50/70'} block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ease-in-out leading-body`
                }
                aria-label={link.title}
              >
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
