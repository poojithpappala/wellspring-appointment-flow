
import React from 'react';
import Navbar from './Navbar';
// import Footer from './Footer'; // We can add a footer later if needed

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
