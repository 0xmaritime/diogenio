import React, { useState } from 'react';

const DioGenioElements = () => {
  const [activeElement, setActiveElement] = useState('barrel');
  
  const elements = {
    barrel: {
      id: '01',
      title: 'BARREL = CONTAINER',
      description: 'The barrel isn\'t about constraint, but sovereign choice. Diogenes didn\'t retreat to a barrel; he defined his boundaries. Choose your container before it chooses you.',
      tags: [
        { id: 'wooden_barrel', label: 'wooden_barrel' },
        { id: 'gaming_pc', label: 'gaming_pc' },
        { id: 'fridge', label: 'fridge' },
        { id: 'bunker', label: 'bunker' },
        { id: 'pip_boy', label: 'pip_boy' },
        { id: 'switch', label: 'switch' }
      ]
    },
    lantern: {
      id: '02',
      title: 'LANTERN = WISDOM OBJECT',
      description: 'Carrying a lantern at noon wasn\'t performance but revelation. In information floods, clarity becomes the scarcest resource. The best alpha is perspective itself.',
      tags: [
        { id: 'oil_lantern', label: 'oil_lantern' },
        { id: 'white_monster', label: 'white_monster' },
        { id: 'sword', label: 'sword' },
        { id: 'controller', label: 'controller' },
        { id: 'duck', label: 'duck' },
        { id: 'gun', label: 'gun' }
      ]
    },
    marketplace: {
      id: '03',
      title: 'MARKETPLACE = BACKGROUND',
      description: 'The agora wasn\'t just commerce but contested territory. When Diogenes challenged Alexander, the market became philosophical terrain. Not every protocol deserves your presence.',
      tags: [
        { id: 'athens_market', label: 'athens_market' },
        { id: 'matrix_code', label: 'matrix_code' },
        { id: 'epstein_island', label: 'epstein_island' },
        { id: 'pump_terminal', label: 'pump_terminal' },
        { id: 'pony_land', label: 'pony_land' },
        { id: 'uganda', label: 'uganda' }
      ]
    },
    dogs: {
      id: '04',
      title: 'DOGS = AUDIENCE',
      description: 'Ancient DAWG energy precedes the modern incarnation. Diogenes embraced the canine comparison — unfiltered, loyal to truth rather than convention. The true audience validates sovereignty.',
      tags: [
        { id: 'stray_dogs', label: 'stray_dogs' },
        { id: 'pepe', label: 'pepe' },
        { id: 'wojak', label: 'wojak' },
        { id: 'npc', label: 'npc' },
        { id: 'cat', label: 'cat' },
        { id: 'amogus', label: 'amogus' }
      ]
    }
  };
  
  const current = elements[activeElement];

  return (
    <section className="py-24 relative overflow-hidden bg-zinc-50">
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,0,0,0.2) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8">
        {/* Terminal Command Header */}
        <div className="mb-16">
          <div className="inline-block border-2 border-black bg-zinc-50 py-3 px-5 relative">
            <div className="flex items-center font-mono">
              <span className="text-gray-500 mr-3">[user@barrel]$</span>
              <span className="text-black font-medium tracking-tight">cat /elements.md</span>
            </div>
            
            {/* Shadow element */}
            <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-black opacity-20"></div>
          </div>
        </div>
        
        {/* Main Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12">
          {/* Left Column - Terminal Output */}
          <div className="lg:col-span-7">
            <div className="border-2 border-black bg-white">
              {/* Terminal Header */}
              <div className="border-b-2 border-black px-6 py-3 flex justify-between items-center bg-black text-white">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-xs text-gray-400">elements.md</div>
                <div className="w-4"></div> {/* Spacer for flex alignment */}
              </div>
              
              {/* Terminal Content */}
              <div className="p-4 sm:p-6 font-mono">
                <div className="mb-6">
                  <span className="font-serif text-xl not-italic">Core Elements:</span>
                </div>
                
                {/* Element Blocks */}
                <div className="space-y-10">
                  {Object.keys(elements).map((key) => {
                    const element = elements[key];
                    const isActive = activeElement === key;
                    
                    return (
                      <div 
                        key={key}
                        className={`
                          transition-all duration-300 cursor-pointer
                          ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-80'}
                        `}
                        onClick={() => setActiveElement(key)}
                      >
                        <div className={`
                          border-l-4 p-5
                          ${isActive ? 'border-black bg-black/5' : 'border-gray-200 hover:border-gray-400'}
                        `}>
                          <h3 className="flex items-baseline mb-4">
                            <span className="text-gray-500 mr-3">[{element.id}]</span>
                            <span className="text-lg font-medium">{element.title}</span>
                          </h3>
                          
                          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                            {element.tags.map((tag) => (
                              <div 
                                key={tag.id}
                                className="bg-white px-2 sm:px-3 py-1 border border-black/70 text-xs"
                              >
                                {tag.label}
                              </div>
                            ))}
                          </div>
                          
                          {isActive && (
                            <p className="text-sm mt-4 text-gray-700 not-italic font-serif">
                              {element.description}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Terminal prompt */}
                <div className="flex items-center mt-8 font-mono">
                  <span className="text-gray-500 mr-2">[user@barrel]$</span>
                  <span className="w-3 h-5 bg-black animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Diogenes Visual */}
          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <div className="sticky top-8">
              {/* Diogenes Image */}
              <div className="relative mb-8">
                <div className="relative overflow-hidden border-2 border-black" style={{ boxShadow: '6px 6px 0 rgba(0,0,0,0.1)' }}>
                  <img 
                    src="/images/diogenes-original.png" // Updated image source
                    alt="Diogenes Original" // Updated alt text
                    className="w-full object-cover"
                  />
                  
                  {/* Image credit */}
                  <div className="absolute bottom-0 right-0 bg-white border-l border-t border-black p-2">
                    <span className="text-xs font-mono">diogenes-original.png</span> {/* Updated credit text */}
                  </div>
                  
                  {/* Scan effect overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-30"
                    style={{ 
                      background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.1) 50%)',
                      backgroundSize: '100% 4px'
                    }}
                  ></div>
                </div>
              </div>
              
              {/* Info Panel */}
              <div className="border-2 border-black bg-white p-6">
                <h3 className="font-mono text-lg mb-4 glitch-text">Diogenes.exe</h3>
                
                <p className="italic text-gray-700 mb-6">
                  "When I look upon seamen, men of science and philosophers, man is the wisest of all beings. When I look upon priests, prophets and interpreters of dreams, nothing is so contemptible as man."
                </p>
                
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Diogenes didn't reject society from poverty but from clarity. His barrel wasn't shelter but sovereign territory. His lantern wasn't seeking honest men—it was exposing the terminal falsity of consensus thinking.
                  </p>
                  
                  <p className="text-gray-700">
                    DioGenio translates this ancient DAWG energy into the terminal age. Not as historical pastiche, but as protocol architecture for those who've escaped the wage cage only to find new containers.
                  </p>
                </div>
                
                {/* Current Element Reference */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-baseline">
                    <span className="text-gray-500 text-xs tracking-wide uppercase mr-2">Current:</span>
                    <span className="font-mono">[{current.id}] {current.title}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DioGenioElements;
