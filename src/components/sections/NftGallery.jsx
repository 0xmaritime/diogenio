import React from 'react';

export default function NftGallery() {
  return (
    <section className="py-24 relative bg-gradient-to-b from-zinc-900 to-black overflow-hidden">
      {/* Matrix code background */}
      <div className="absolute inset-0 matrix-code opacity-5 pointer-events-none"></div>
      
      {/* Glitchy section title */}
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="inline-block relative font-display text-4xl md:text-5xl font-black glitch-text-subtle"
            data-text="THE COLLECTION">
          THE COLLECTION
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-hair to-blue-eyes mx-auto mt-4"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="gallery-perspective relative h-[600px] perspective-container">
          {/* NFT cards positioned in 3D space */}
          <div className="absolute top-[10%] left-[20%] w-64 h-64 gallery-card transform-3d rotate-y-15 rotate-x-5">
            <div className="w-full h-full relative gallery-card-inner group">
              <img 
                src="/nfts/diogenio-1.png" 
                alt="DioGenio #1" 
                className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-pink-hair"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              flex flex-col justify-end p-4 rounded-lg">
                <h3 className="text-white font-mono text-lg">Reality Glitch #042</h3>
                <p className="text-zinc-300 text-sm">Rarity: Legendary</p>
              </div>
            </div>
          </div>
          
          <div className="absolute top-[5%] right-[25%] w-56 h-56 gallery-card transform-3d rotate-y-neg10 rotate-x-5">
            <div className="w-full h-full relative gallery-card-inner group">
              <img 
                src="/nfts/diogenio-2.png" 
                alt="DioGenio #2" 
                className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-blue-eyes"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              flex flex-col justify-end p-4 rounded-lg">
                <h3 className="text-white font-mono text-lg">Terminal Sage #137</h3>
                <p className="text-zinc-300 text-sm">Rarity: Epic</p>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-[15%] left-[30%] w-60 h-60 gallery-card transform-3d rotate-y-20 rotate-x-neg5">
            <div className="w-full h-full relative gallery-card-inner group">
              <img 
                src="/nfts/diogenio-3.png" 
                alt="DioGenio #3" 
                className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-medal-gold"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              flex flex-col justify-end p-4 rounded-lg">
                <h3 className="text-white font-mono text-lg">Crypto Hermit #789</h3>
                <p className="text-zinc-300 text-sm">Rarity: Rare</p>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-[10%] right-[15%] w-52 h-52 gallery-card transform-3d rotate-y-neg25 rotate-x-neg10">
            <div className="w-full h-full relative gallery-card-inner group">
              <img 
                src="/nfts/diogenio-4.png" 
                alt="DioGenio #4" 
                className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-green-jacket"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              flex flex-col justify-end p-4 rounded-lg">
                <h3 className="text-white font-mono text-lg">Based Philosopher #420</h3>
                <p className="text-zinc-300 text-sm">Rarity: Common</p>
              </div>
            </div>
          </div>
          
          {/* Center featured NFT */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 gallery-card featured-card">
            <div className="w-full h-full relative gallery-card-inner group">
              <img 
                src="/nfts/diogenio-featured.png" 
                alt="Featured DioGenio" 
                className="w-full h-full object-cover rounded-lg shadow-[0_0_30px_rgba(255,0,140,0.3)] 
                           border-2 border-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              flex flex-col justify-end p-4 rounded-lg">
                <div className="bg-pink-hair/80 text-black px-2 py-1 text-xs inline-block mb-2">FEATURED</div>
                <h3 className="text-white font-mono text-lg">DioGenio Prime #001</h3>
                <p className="text-zinc-300 text-sm">Rarity: Mythic</p>
              </div>
            </div>
          </div>
          
          {/* Connection lines between NFTs - subtle */}
          <svg className="absolute inset-0 w-full h-full z-0 connection-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="20" y1="10" x2="50" y2="50" className="line-connect opacity-20 stroke-pink-hair" />
            <line x1="75" y1="5" x2="50" y2="50" className="line-connect opacity-20 stroke-blue-eyes" />
            <line x1="30" y1="85" x2="50" y2="50" className="line-connect opacity-20 stroke-medal-gold" />
            <line x1="85" y1="90" x2="50" y2="50" className="line-connect opacity-20 stroke-green-jacket" />
          </svg>
        </div>
        
        {/* View more link */}
        <div className="text-center mt-16">
          <a 
            href="/gallery" 
            className="inline-block bg-transparent border-2 border-pink-hair
                       text-white px-8 py-3 rounded-lg
                       hover:bg-pink-hair/20 transition-all
                       font-mono relative overflow-hidden group"
          >
            <span className="relative z-10">VIEW ALL DIOGENIOS</span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-hair to-blue-eyes opacity-0 
                             group-hover:opacity-30 transition-opacity"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
