import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen"> {/* Removed bg-black */}
      <Header />
      <main className="flex-grow pt-16"> {/* Added pt-16 to offset fixed header */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
