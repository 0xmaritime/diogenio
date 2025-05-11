import React from 'react';
import { nftCollection } from '../../data/nftData';

export default function NftGallery() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const total = nftCollection.length;

  const navigate = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % total);
    } else {
      setCurrentIndex((prev) => (prev - 1 + total) % total);
    }
  };

  return (
    <section className="py-24 relative bg-[var(--color-gallery)] overflow-hidden">
      {/* Removed matrix-code div */}
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]">
          THE COLLECTION
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] mx-auto mt-4"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="relative min-h-[600px] flex justify-center items-center">
          <div className="relative w-full max-w-2xl h-[550px] perspective-1000 mx-16">
            <div className="controls absolute top-1/2 left-0 right-0 -translate-y-1/2 z-50 flex justify-between pointer-events-none">
              <button 
                onClick={() => navigate('prev')}
                className="pointer-events-auto bg-white border-4 border-[var(--color-black-opacity-30)] px-6 py-4 cursor-pointer font-mono text-2xl transition-all hover:scale-110 rounded-lg hover:bg-[var(--color-accent-1)] hover:text-white shadow-lg md:-translate-x-40 -translate-x-16"
              >
                ←
              </button>
              <button 
                onClick={() => navigate('next')}
                className="pointer-events-auto bg-white border-4 border-[var(--color-black-opacity-30)] px-6 py-4 cursor-pointer font-mono text-2xl transition-all hover:scale-110 rounded-lg hover:bg-[var(--color-accent-1)] hover:text-white shadow-lg md:translate-x-40 translate-x-16"
              >
                →
              </button>
            </div>
            
            <div className="cards-wrapper relative w-full h-full flex justify-center items-center">
              {nftCollection.map((nft, index) => {
                const position = 
                  index === currentIndex ? 'current' :
                  index === (currentIndex - 1 + total) % total ? 'prev' :
                  index === (currentIndex + 1) % total ? 'next' : 'hidden';
                
                return (
                  <div
                    key={nft.id}
                    className={`pokemon-card absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out
                      ${position === 'current' ? 'z-30 opacity-100 scale-100' :
                        position === 'prev' ? 'z-20 opacity-80 scale-90 -rotate-6 -translate-x-[120%]' :
                        position === 'next' ? 'z-20 opacity-80 scale-90 rotate-6 translate-x-[20%]' :
                        'opacity-0 scale-75'}`}
                  >
                    {/* New editorial card design */}
                    <div className="relative group overflow-hidden bg-[var(--color-ivory)] rounded-none w-[350px]">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src={nft.image}
                          alt={nft.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                        <h3 className="font-display text-xl text-white mb-1">{nft.name}</h3>
                        <p className="text-white/70 text-sm">{nft.attributes.rarity}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="counter absolute bottom-0 w-full text-center font-mono text-lg transition-opacity">
              {currentIndex + 1}/{total}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div 
            className="inline-block bg-transparent border-2 border-[var(--color-accent-1)]
                       text-[var(--color-accent-1)] px-8 py-3 rounded-lg
                       hover:bg-[var(--color-accent-1)]/20 transition-all
                       font-mono relative overflow-hidden group cursor-pointer" // Added cursor-pointer
          >
            <span className="relative z-10">VIEW ALL DIOGENIOS</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] opacity-0 
                             group-hover:opacity-30 transition-opacity"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
