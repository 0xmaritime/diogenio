import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="min-h-[100svh] pt-16 pb-20 relative @container">
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-b 
        from-color-mix(in oklch, var(--cynical) 90%, black) 
        to-color-mix(in oklch, var(--wisdom) 80%, black)" />
      
      {/* Radial pattern overlay */}
      <div className="absolute inset-0 opacity-5 
        bg-radial-[circle_at_center] from-white to-70% to-transparent 
        animate-[pulse_10s_ease-in-out_infinite]" />
      
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center 
        justify-center min-h-[calc(100svh-9rem)] relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl @sm:text-6xl @md:text-7xl @lg:text-9xl 
            font-bold text-white mb-4 @sm:mb-8 tracking-tight
            animate-[fade-in_0.5s_ease-out]">
            DioGenio
          </h1>
          <p className="text-lg @sm:text-xl @md:text-2xl @lg:text-3xl 
            text-zinc-300 mb-6 @sm:mb-12 px-4 leading-relaxed">
            "There's only a finger's width between genius
            <br className="hidden @sm:block" />
            and complete retardation" — Diogenes (probably)
          </p>
          <div className="space-y-4 @sm:space-y-6 px-4">
            <p className="text-base @sm:text-lg @md:text-xl text-zinc-400 
              max-w-3xl mx-auto leading-relaxed">
              4,200 Digital Cynics. Ancient wisdom for terminal degenerates.
              Philosophical shitposting as a service.
            </p>
            <Link 
              to="/gallery" 
              className="inline-flex items-center justify-center bg-white text-black 
                min-w-[200px] px-6 @sm:px-8 @md:px-12 py-3 @sm:py-4 rounded-md 
                text-base @sm:text-lg font-bold hover:bg-zinc-200 
                transition-all duration-200 transform hover:scale-105 active:scale-95
                shadow-lg hover:shadow-xl backdrop-blur-sm relative
                after:absolute after:inset-0 after:rounded-md
                after:ring-2 after:ring-white/10 after:hover:ring-white/20
                after:transition-all"
            >
              Enter the Barrel
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 animate-[bounce_2s_infinite]
          opacity-50 hover:opacity-100 transition-opacity duration-200">
          <div className="w-5 @sm:w-6 h-8 @sm:h-10 border-2 border-zinc-400 
            rounded-full transition-colors hover:border-white">
            <div className="w-1 h-2 bg-zinc-400 rounded-full mx-auto mt-2 
              transition-colors group-hover:bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
