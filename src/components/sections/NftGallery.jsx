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
    <section className="py-24 relative bg-[var(--color-city-bg)] overflow-hidden">
      <div className="absolute inset-0 matrix-code opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="inline-block relative font-display text-4xl md:text-5xl font-black glitch-text-subtle text-[var(--color-black)]"
            data-text="THE COLLECTION">
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
                    <div className="bg-white border-4 border-[var(--color-black-opacity-30)] rounded-2xl shadow-xl w-[350px] h-[500px] p-6 overflow-hidden">
                      <div className="card-header flex justify-between items-center mb-4 min-h-[2.5rem]">
                        <div className="name font-mono text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px]">
                          {nft.name}
                        </div>
                        <div className="type bg-[var(--color-accent-1)] border-2 border-[var(--color-black-opacity-30)] rounded-lg px-2 py-1 text-xs font-bold uppercase">
                          {nft.attributes.rarity}
                        </div>
                      </div>
                      
                      <div className="image-container w-full h-48 mb-6 border-3 border-[var(--color-black-opacity-30)] rounded-lg overflow-hidden bg-gray-100">
                        <img src={nft.image} alt={nft.name} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="stats mb-6">
                        <div className="hp font-mono mb-3">Wisdom: {nft.attributes.wisdom}</div>
                        <div className="attacks mb-3">
                          <strong className="font-mono">Philosophy:</strong>
                          <ul className="mt-2">
                            <li className="bg-gray-100 border-2 border-gray-300 rounded-md px-3 py-2 mb-2 font-mono">
                              {nft.attributes.philosophy}
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="footer text-center text-sm border-t-2 border-[var(--color-black-opacity-30)] pt-4 font-mono">
                        DioGenio ID: <span>#{nft.id}</span>
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
