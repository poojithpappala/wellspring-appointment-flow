
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow overflow-x-hidden w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
