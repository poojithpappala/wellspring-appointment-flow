
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // Added Footer import

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-charcoal"> {/* Ensured text-charcoal is default */}
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer /> {/* Added Footer component */}
    </div>
  );
};

export default Layout;
