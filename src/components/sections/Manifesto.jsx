import React from 'react';

export default function Manifesto() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[var(--color-paper)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="border-l-2 border-[var(--color-gold)] pl-4 sm:pl-6 md:pl-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 text-[var(--color-black)] leading-tight">
            The DioGenio Manifesto
          </h2>
          
          <div className="space-y-6 sm:space-y-8">
            <p className="text-base sm:text-lg leading-relaxed text-[var(--color-text-secondary)]">
              In an age of digital abundance, we return to the radical simplicity of Diogenes—
              not as pastiche, but as practice.
            </p>
            
            <blockquote className="border-l-4 border-[var(--color-sage)] pl-4 sm:pl-6 py-2">
              <p className="font-display text-lg sm:text-xl italic text-[var(--color-text-primary)]">
                "The foundation of every state is the education of its youth."
              </p>
              <cite className="block mt-2 text-sm text-[var(--color-text-tertiary)]">
                — Diogenes of Sinope
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
