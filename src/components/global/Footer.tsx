
import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-gray-300 section-padding pb-8 pt-16 border-t-4 border-deep-teal">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2.5 text-white hover:opacity-90 transition-opacity duration-200 mb-4">
              <Stethoscope size={32} strokeWidth={1.8} />
              <span className="font-display font-bold text-xl tracking-tight">WellnessPortal</span>
            </Link>
            <p className="text-sm leading-body text-gray-400">
              Your health, simplified. Easily book appointments and access trusted health information.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="hover:text-deep-teal transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-deep-teal transition-colors">Services</Link></li>
              <li><Link to="/health-hub" className="hover:text-deep-teal transition-colors">Health Hub</Link></li>
              <li><Link to="/contact" className="hover:text-deep-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-deep-teal" />
                <a href="mailto:support@wellnessportal.example.com" className="hover:text-deep-teal transition-colors">support@wellnessportal.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-deep-teal" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-deep-teal mt-1" />
                <span>123 Wellness Ave, Health City, HC 54321</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter/Placeholder - can be expanded */}
           <div className="md:col-span-3 lg:col-span-1">
            <h3 className="font-display text-lg font-semibold text-white mb-4">Stay Updated</h3>
             <p className="text-sm text-gray-400 mb-3">Subscribe to our newsletter for the latest health tips and news.</p>
             {/* Placeholder for a newsletter form */}
             <form onSubmit={(e) => e.preventDefault()} className="flex">
                <input type="email" placeholder="Your email" className="bg-gray-700 text-white px-4 py-2.5 rounded-l-md focus:ring-deep-teal focus:border-deep-teal border-transparent flex-grow text-sm outline-none" />
                <button type="submit" className="bg-deep-teal text-white px-4 py-2.5 rounded-r-md hover:bg-opacity-90 transition-colors text-sm font-medium">Subscribe</button>
             </form>
          </div>

        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} WellnessPortal. All rights reserved.</p>
          <p className="mt-1">
            <Link to="/privacy-policy" className="hover:text-deep-teal transition-colors">Privacy Policy</Link> | <Link to="/terms-of-service" className="hover:text-deep-teal transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
