import React from 'react';

export default function Manifesto() {
  return (
    <section className="py-24 relative bg-[var(--color-city-bg)] overflow-hidden"> {/* Off-White background */}
      {/* Background with subtle ancient Greek patterns */}
      <div className="absolute inset-0 bg-cover bg-center opacity-5"
           style={{ backgroundImage: 'url("/images/greek-pattern.png")' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* The Manifesto Terminal */}
          <div className="bg-[var(--color-dark-eyes)] border-2 border-[var(--color-accent-2)] rounded-lg overflow-hidden shadow-[0_0_30px_rgba(41,105,85,0.3)]"> {/* Dark Brown bg, Forest Green border & shadow */}
            {/* Terminal header */}
            <div className="bg-[var(--color-accent-3)] px-4 py-2 border-b border-[var(--color-accent-2)] flex justify-between items-center"> {/* Pale Olive bg, Forest Green border */}
              <div className="font-mono text-sm text-[var(--color-black)]">MANIFESTO.md</div> {/* Black text on Pale Olive bg */}
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--color-black)]/50"></div> {/* Black dots with opacity */}
                <div className="w-3 h-3 rounded-full bg-[var(--color-black)]/50"></div>
                <div className="w-3 h-3 rounded-full bg-[var(--color-black)]/50"></div>
              </div>
            </div>
            
            {/* Terminal content with markdown-like formatting */}
            <div className="p-6 font-mono">
              <div className="border-b border-[var(--color-accent-2)]/50 pb-2 mb-4"> {/* Forest Green border accent */}
                <h2 className="text-[var(--color-accent-3)] text-2xl font-bold"># The DioGenio Manifesto</h2> {/* Pale Olive heading */}
              </div>
              
              <div className="space-y-4 text-[var(--color-text-secondary)]"> {/* Dark Gray text */}
                <p className="text-lg text-[var(--color-black)]"> {/* Black for subheadings */}
                  ## THESIS
                </p>
                
                <p className="pl-4 border-l-2 border-[var(--color-accent-2)]"> {/* Forest Green border accent */}
                  The digital realm has become cluttered with meaningless creations. Just as Diogenes 
                  sought honesty in a world of pretense, we seek authenticity in a sea of derivative NFTs.
                </p>
                
                <p className="text-lg text-[var(--color-black)]">
                  ## THE BARREL PRINCIPLE
                </p>
                
                <p className="pl-4 border-l-2 border-[var(--color-accent-2)]">
                  Diogenes lived in a barrel to demonstrate that happiness requires nothing more 
                  than meeting one's natural needs. Our digital barrels represent the spaces—physical 
                  or virtual—where we find clarity amid the noise of modern existence.
                </p>
                
                <p className="text-lg text-[var(--color-black)]">
                  ## THE CANCELLED WILL INHERIT THE EARTH
                </p>
                
                <p className="pl-4 border-l-2 border-[var(--color-accent-2)] text-xl">
                  Just as Diogenes was often rejected by Athenian society, today's culture cancels 
                  those who speak uncomfortable truths. Yet like Diogenes, the cancelled continue to 
                  influence culture from the margins—and ultimately outlast their critics.
                </p>
                
                <p className="text-lg text-[var(--color-black)]">
                  ## PHILOSOPHICAL SHITPOSTING
                </p>
                
                <p className="pl-4 border-l-2 border-[var(--color-accent-2)]">
                  Diogenes was history's original shitposter—defecating in the theater, masturbating 
                  in the marketplace, and trolling Plato with a plucked chicken. DioGenio continues this 
                  tradition of provocative truth-telling in digital spaces.
                </p>
                
                <p className="text-lg text-[var(--color-black)]">
                  ## THE ALGORITHM OF WISDOM
                </p>
                
                <p className="pl-4 border-l-2 border-[var(--color-accent-2)] mb-6">
                  We've replaced Diogenes' lantern with the hash algorithms of the blockchain, 
                  continuing his search for honest humans in the most dishonest of spaces.
                </p>
                
                <div className="text-right text-[var(--color-accent-3)] italic"> {/* Pale Olive for signature */}
                  - Written from a barrel, somewhere on the blockchain
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
