import React from 'react';

export default function Manifesto() {
  return (
    <section className="py-24 relative bg-black overflow-hidden">
      {/* Background with subtle ancient Greek patterns */}
      <div className="absolute inset-0 bg-cover bg-center opacity-5"
           style={{ backgroundImage: 'url("/images/greek-pattern.png")' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* The Manifesto Terminal */}
          <div className="bg-black border-2 border-green-jacket rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,200,100,0.2)]">
            {/* Terminal header */}
            <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex justify-between items-center">
              <div className="font-mono text-sm text-green-jacket">MANIFESTO.md</div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              </div>
            </div>
            
            {/* Terminal content with markdown-like formatting */}
            <div className="p-6 font-mono">
              <div className="border-b border-zinc-800 pb-2 mb-4">
                <h2 className="text-green-jacket text-2xl font-bold"># The DioGenio Manifesto</h2>
              </div>
              
              <div className="space-y-4 text-zinc-300">
                <p className="text-lg">
                  ## THESIS
                </p>
                
                <p className="pl-4 border-l-2 border-green-jacket">
                  The digital realm has become cluttered with meaningless creations. Just as Diogenes 
                  sought honesty in a world of pretense, we seek authenticity in a sea of derivative NFTs.
                </p>
                
                <p className="text-lg">
                  ## THE BARREL PRINCIPLE
                </p>
                
                <p className="pl-4 border-l-2 border-green-jacket">
                  Diogenes lived in a barrel to demonstrate that happiness requires nothing more 
                  than meeting one's natural needs. Our digital barrels represent the spaces—physical 
                  or virtual—where we find clarity amid the noise of modern existence.
                </p>
                
                <p className="text-lg">
                  ## THE CANCELLED WILL INHERIT THE EARTH
                </p>
                
                <p className="pl-4 border-l-2 border-green-jacket">
                  Just as Diogenes was often rejected by Athenian society, today's culture cancels 
                  those who speak uncomfortable truths. Yet like Diogenes, the cancelled continue to 
                  influence culture from the margins—and ultimately outlast their critics.
                </p>
                
                <p className="text-lg">
                  ## PHILOSOPHICAL SHITPOSTING
                </p>
                
                <p className="pl-4 border-l-2 border-green-jacket">
                  Diogenes was history's original shitposter—defecating in the theater, masturbating 
                  in the marketplace, and trolling Plato with a plucked chicken. DioGenio continues this 
                  tradition of provocative truth-telling in digital spaces.
                </p>
                
                <p className="text-lg">
                  ## THE ALGORITHM OF WISDOM
                </p>
                
                <p className="pl-4 border-l-2 border-green-jacket mb-6">
                  We've replaced Diogenes' lantern with the hash algorithms of the blockchain, 
                  continuing his search for honest humans in the most dishonest of spaces.
                </p>
                
                <div className="text-right text-green-jacket italic">
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
