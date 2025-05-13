import React, { useState, useEffect } from 'react';

const BarrelNotes = () => {
  const [currentNote, setCurrentNote] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const notes = [
    {
      id: "001",
      text: "Diogenes slept in a barrel not because he was poor, but because most people live in containers they don't recognize. Choose your constraints.",
      author: "FROM THE BARREL"
    },
    {
      id: "002", 
      text: "When they asked him what wine he preferred, he said: \"Another man's.\" The best strategies are borrowed, not invented. But the perspective has to be yours.",
      author: "FROM THE BARREL"
    },
    {
      id: "003",
      text: "Before posting, ask: is this signal or noise? Before trading, ask: is this wealth or cope? Before minting, ask: is this art or status?",
      author: "FROM THE BARREL"
    },
    {
      id: "004",
      text: "Every protocol is just another container. The question isn't which one you choose, but whether you're aware you're choosing.",
      author: "FROM THE BARREL"
    }
  ];
  
  const goToNote = (index) => {
    if (index === currentNote) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentNote(index);
      setIsTransitioning(false);
    }, 400);
  };
  
  return (
    <div className="max-w-4xl mx-auto px-8 py-16" style={{ fontFamily: "'Times New Roman', serif" }}>
      {/* Ornamental border container */}
      <div className="relative">
        {/* Decorative corners */}
        <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-black"></div>
        <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-black"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-black"></div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-black"></div>
        
        {/* Main content area */}
        <div className="bg-zinc-50 border-2 border-black" style={{ boxShadow: '8px 8px 0 rgba(0,0,0,0.1)' }}>
          {/* Header */}
          <div className="border-b-2 border-black bg-white">
            <div className="flex justify-between items-center p-6">
              <div>
                <h2 className="font-serif text-lg tracking-widest text-black uppercase">
                  Notes from the Barrel
                </h2>
                <div className="text-xs text-gray-600 mt-1 tracking-wider">
                  VOL. I—NO. {notes[currentNote].id}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-600 tracking-wider">EST. 2025</div>
                <div className="text-xs text-gray-600 mt-1">{currentNote + 1} of {notes.length}</div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-12 relative">
            {/* Subtle pattern overlay */}
            <div 
              className="absolute inset-0 opacity-3"
              style={{
                backgroundImage: 'radial-gradient(circle at center, black 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            
            <div 
              className={`relative z-10 transition-all duration-400 ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              {/* Quote */}
              <blockquote className="text-black leading-relaxed text-xl mb-8" style={{ lineHeight: '1.8' }}>
                <span className="text-4xl text-gray-400 absolute -left-4 -top-4">"</span>
                <span className="ml-8">{notes[currentNote].text}</span>
                <span className="text-4xl text-gray-400 absolute right-0 bottom-0">"</span>
              </blockquote>
              
              {/* Attribution */}
              <div className="text-center border-t border-gray-300 pt-6">
                <cite className="text-xs tracking-widest text-gray-600 not-italic">
                  {notes[currentNote].author}
                </cite>
                <div className="mt-2 text-xs text-gray-400">
                  DIOGENIO STUDIOS
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="border-t-2 border-black bg-white p-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                {notes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToNote(index)}
                    className={`relative transition-all duration-200 ${
                      index === currentNote 
                        ? 'text-black' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <span className="text-xs font-serif tracking-wider">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {index === currentNote && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black" />
                    )}
                  </button>
                ))}
              </div>
              
              {/* Subscribe link */}
              <a 
                href="#" 
                className="text-xs tracking-wider text-black border-b border-black hover:border-b-2 transition-all"
              >
                SUBSCRIBE
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Edition info */}
      <div className="mt-8 text-center">
        <div className="inline-block px-4 py-2 border border-black bg-white text-xs tracking-wider">
          PUBLISHED WEEKLY — AVAILABLE ON-CHAIN
        </div>
      </div>
    </div>
  );
};

export default BarrelNotes;
