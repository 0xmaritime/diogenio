import React from 'react';
import PerspectiveBarrel from './PerspectiveBarrel';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#f5f0e6] to-[#e8e0d0] overflow-hidden">
      {/* Radial pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.03)_0%,_rgba(0,0,0,0)_100%)]" />
      
      {/* Main content */}
      <PerspectiveBarrel />
    </section>
  );
};

export default HeroSection;
