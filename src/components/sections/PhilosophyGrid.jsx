import React, { useState, useEffect } from 'react';

const PhilosophyGrid = () => {
  const [activeItem, setActiveItem] = useState('container');
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const philosophyItems = [
    {
      id: 'container',
      number: '01',
      title: 'CONTAINER',
      subtitle: 'The Barrel Principle',
      description: 'The barrel isn\'t a symbol of poverty, but of conscious limitation. When you select your own constraints, they become a source of power rather than confinement. This is the foundation of independent thought in algorithmic spaces.',
      quote: 'I don\'t need more room; I need less walls.',
      attribution: 'On Containment',
      detail: 'The container—whether barrel, code, or protocol—becomes invisible to most who inhabit it. The first act of sovereignty is recognizing which containers hold you.',
      image: '/images/container_image.png' // Added image path
    },
    {
      id: 'perspective',
      number: '02',
      title: 'PERSPECTIVE',
      subtitle: 'Sovereign Viewpoint',
      description: 'In markets flooded with information, clarity becomes the scarcest resource. The ability to see clearly where others see consensus is worth more than any trade. Perspective is the ultimate alpha.',
      quote: 'Step outside consensus to see clearly.',
      attribution: 'On Markets',
      detail: 'Diogenes achieved clarity by rejecting convention. Today we achieve clarity by understanding which conventions to reject and which to employ strategically.',
      image: '/images/perspective_image.png' // Added image path
    },
    {
      id: 'truth',
      number: '03',
      title: 'TRUTH',
      subtitle: 'Lantern Methodology',
      description: 'Diogenes wandered with his lantern searching for an honest man. Today\'s markets have the same deficit. Truth-finding requires active illumination rather than passive consumption—a skill few cultivate.',
      quote: 'Carry the lantern, not for others, but to see your own path.',
      attribution: 'On Vision',
      detail: 'The lantern is both tool and symbol. It cuts through darkness not by force but by creating a sphere of clarity around the bearer, no matter how vast the surrounding darkness.',
      image: '/images/truth_image.png' // Added image path
    },
    {
      id: 'freedom',
      number: '04',
      title: 'FREEDOM',
      subtitle: 'Protocol Independence',
      description: 'True freedom isn\'t the absence of systems, but the awareness of which systems contain you. The first step is seeing the container as a choice rather than an inevitability.',
      quote: 'When you recognize the algorithm, you\'re already outside it.',
      attribution: 'On Liberation',
      detail: 'Freedom begins with the recognition that choices exist even within constraints. The philosopher in the barrel has more freedom than the emperor unaware of his palace walls.',
      image: '/images/freedom_image.png' // Added image path
    }
  ];

  useEffect(() => {
    // Handle transition animations
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
      
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handleItemChange = (id) => {
    if (id === activeItem) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveItem(id);
    }, 300);
  };

  // Current active philosophy item
  const current = philosophyItems.find(item => item.id === activeItem);
  
  return (
    <div className="relative py-16 md:py-32" style={{ fontFamily: "'Times New Roman', serif" }}>
      {/* Large index number background */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none" aria-hidden="true">
        <div className="text-[30rem] font-serif leading-none select-none">
          {current.number}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
        {/* Header Section */}
        <header className="mb-32 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 leading-tight tracking-tight">
              The Philosophy of Containment
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 sm:mb-16 max-w-2xl">
              Four foundational concepts from Diogenes, reimagined for the terminal age.
              A framework for seeing clearly in algorithmic markets.
            </p>
          </div>
          
          <div className="hidden md:block md:col-span-4 lg:col-span-6 relative">
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-black"></div>
          </div>
        </header>
        
        {/* Navigation Dots */}
        <div className="hidden md:flex justify-center mb-24">
          <div className="inline-flex items-center border-2 border-black bg-white">
            {philosophyItems.map((item) => (
              <button
                key={item.id}
                className={`px-8 py-4 text-xs tracking-widest uppercase transition-all relative
                          ${activeItem === item.id ? 'text-white' : 'text-black hover:text-gray-500'}`}
                onClick={() => handleItemChange(item.id)}
              >
                {item.number}
                {activeItem === item.id && (
                  <div className="absolute inset-0 bg-black z-0"></div>
                )}
                <span className="relative z-10">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden mb-12">
          <div className="border-t-2 border-b-2 border-black py-4">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs tracking-widest text-gray-500 block">VIEWING</span>
                <span className="text-xl">{current.number}. {current.title}</span>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => {
                    const currentIndex = philosophyItems.findIndex(p => p.id === activeItem);
                    const prevIndex = (currentIndex - 1 + philosophyItems.length) % philosophyItems.length;
                    handleItemChange(philosophyItems[prevIndex].id);
                  }}
                  className="w-12 h-12 flex items-center justify-center border-2 border-black"
                >
                  ←
                </button>
                <button 
                  onClick={() => {
                    const currentIndex = philosophyItems.findIndex(p => p.id === activeItem);
                    const nextIndex = (currentIndex + 1) % philosophyItems.length;
                    handleItemChange(philosophyItems[nextIndex].id);
                  }}
                  className="w-12 h-12 flex items-center justify-center border-2 border-black"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="relative min-h-[70vh]">
          {/* Transition container */}
          <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-16">
              {/* Left Column - Image */}
              <div className="md:col-span-6">
                <div className="relative mb-24">
                  {/* Main featured image */}
                  <div className="relative">
                    <div className="border-2 border-black overflow-hidden" style={{ boxShadow: '12px 12px 0 rgba(0,0,0,0.08)' }}>
                      <div className="aspect-[4/5] bg-gray-100">
                        {/* Use dynamic image source */}
                        <img
                          src={current.image} 
                          alt={current.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Image footnote */}
                    <div className="absolute -bottom-6 -right-6 bg-white border-2 border-black p-4">
                      <p className="text-xs tracking-widest">{current.title.toLowerCase()} / {current.number}</p>
                    </div>
                  </div>
                  
                  {/* Quote card */}
                  <div className="relative mt-12 ml-12">
                    <div className="absolute -top-3 -left-3 w-full h-full border-2 border-black bg-black"></div>
                    <div className="relative border-2 border-black bg-white p-8">
                      <blockquote className="text-xl italic mb-4">
                        "{current.quote}"
                      </blockquote>
                      <cite className="text-xs tracking-widest not-italic">
                        {current.attribution} — DioGenio
                      </cite>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Content */}
              <div className="md:col-span-6 flex flex-col justify-center mt-8 md:mt-0">
                <div className="sticky top-24">
                  <div className="mb-3">
                    <span className="text-sm tracking-widest text-gray-500">{current.number}</span>
                  </div>
                  
                  <h2 className="text-4xl mb-3">{current.title}</h2>
                  <p className="text-xl text-gray-700 mb-8">{current.subtitle}</p>
                  
                  <div className="w-16 h-px bg-black mb-12"></div>
                  
                  <div className="prose prose-lg mb-12">
                    <p className="mb-6 leading-relaxed">{current.description}</p>
                    <p className="leading-relaxed">{current.detail}</p>
                  </div>
                  
                  {/* Related Navigation */}
                  <div className="mt-16">
                    <p className="text-xs tracking-widest text-gray-500 mb-4">NAVIGATE</p>
                    <div className="grid grid-cols-2 gap-4">
                      {philosophyItems
                        .filter(p => p.id !== current.id)
                        .map((item) => (
                          <button
                            key={item.id}
                            className="text-left group"
                            onClick={() => handleItemChange(item.id)}
                          >
                            <div className="border-b border-gray-200 pb-2 mb-2">
                              <span className="text-xs text-gray-500 tracking-widest group-hover:text-black transition-colors">
                                {item.number}
                              </span>
                            </div>
                            <p className="font-medium group-hover:text-black transition-colors text-gray-700">
                              {item.title}
                            </p>
                            <p className="text-sm text-gray-500 transition-colors group-hover:text-gray-700">
                              {item.subtitle}
                            </p>
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer quote */}
        <footer className="mt-40 border-t-2 border-black pt-24 text-center">
          <div className="max-w-2xl mx-auto">
            <blockquote className="text-2xl italic leading-relaxed mb-8">
              "The foundation of every state is the education of its youth.
              The foundation of every mind is the education of its perspective."
            </blockquote>
            <cite className="inline-block border-t border-gray-300 pt-4 text-xs tracking-widest text-gray-500 not-italic">
              DIOGENIO — MMXXV
            </cite>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PhilosophyGrid;
