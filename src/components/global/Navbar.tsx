
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Stethoscope, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About Us', path: '/about' },
  { title: 'Services', path: '/services' },
  { title: 'Health Hub', path: '/health-hub' },
  { title: 'Contact Us', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const activeLinkClass = "text-deep-teal dark:text-primary font-semibold relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-deep-teal dark:after:bg-primary after:bottom-[-4px] after:left-0";
  const inactiveLinkClass = "text-foreground hover:text-deep-teal dark:hover:text-primary transition-colors duration-200 ease-in-out";

  return (
    <header className="bg-background/95 backdrop-blur-lg shadow-soft sticky top-0 z-50 border-b border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center space-x-2 sm:space-x-3 text-deep-teal dark:text-primary hover:opacity-80 transition-opacity duration-200">
            <div className="relative">
              <Stethoscope size={32} strokeWidth={1.8} />
              <Crown size={14} className="absolute -top-1 -right-1 text-yellow-500" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tight">WellnessPortal</span>
              <div className="text-xs text-deep-teal/70 dark:text-primary/70 font-medium -mt-1">Premium Healthcare</div>
            </div>
            <div className="sm:hidden">
              <span className="font-display font-bold text-lg tracking-tight">WellnessPortal</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navLinks.map((link) => (
              <button
                key={link.title}
                onClick={() => handleNavigation(link.path)}
                className={`px-3 py-2 rounded-md text-sm font-medium leading-body transition-colors duration-200 ease-in-out ${
                  window.location.pathname === link.path ? activeLinkClass : inactiveLinkClass
                }`}
                aria-label={link.title}
              >
                {link.title}
              </button>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <ThemeToggle />
            <button onClick={() => handleNavigation('/doctor')} className="hidden lg:block">
              <Button variant="ghost" className="text-foreground hover:text-deep-teal dark:hover:text-primary hover:bg-muted/50 transition-all duration-200 text-sm">
                Doctor Portal
              </Button>
            </button>
            <button onClick={() => handleNavigation('/patient-intake')}>
              <Button className="bg-gradient-to-r from-deep-teal to-blue-600 hover:from-deep-teal/90 hover:to-blue-600/90 text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                <Crown className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Book Premium</span>
                <span className="sm:hidden">Book</span>
              </Button>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Open main menu"
              aria-expanded={mobileMenuOpen}
              className="text-foreground hover:text-deep-teal dark:hover:text-primary hover:bg-muted p-2 rounded-lg"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 sm:top-24 left-0 right-0 bg-background/95 backdrop-blur-lg shadow-xl z-40 rounded-b-2xl mx-2 border border-border/60">
          <div className="px-4 pt-3 pb-4 space-y-2 sm:px-5">
            {navLinks.map((link) => (
              <button
                key={link.title}
                onClick={() => handleNavigation(link.path)}
                className={`${
                  window.location.pathname === link.path 
                    ? 'bg-primary/10 text-primary font-semibold' 
                    : 'text-foreground hover:text-primary hover:bg-muted/70'
                } block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ease-in-out leading-body`}
                aria-label={link.title}
              >
                {link.title}
              </button>
            ))}
            
            <div className="border-t border-border pt-4 mt-4 space-y-2">
              <button onClick={() => handleNavigation('/doctor')} className="w-full">
                <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary hover:bg-muted/50">
                  Doctor Portal
                </Button>
              </button>
              <button onClick={() => handleNavigation('/patient-intake')} className="w-full">
                <Button className="w-full bg-gradient-to-r from-deep-teal to-blue-600 hover:from-deep-teal/90 hover:to-blue-600/90 text-white rounded-xl shadow-lg">
                  <Crown className="w-4 h-4 mr-2" />
                  Book Premium
                </Button>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
