import { useState } from 'react';
import { rarityLevels } from '../../data/nftData';

export default function NFTCard({ nft }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const rarityStyle = rarityLevels[nft.attributes.rarity]?.color || 'text-zinc-400';

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        relative overflow-hidden rounded-xl bg-card-dark border border-pink-hair/30
        transform transition-all duration-300
        ${isHovered ? 'scale-[1.02] shadow-xl' : ''}
      `}>
        {/* Image */}
        <div className="aspect-square overflow-hidden">
          <img
            src={nft.image}
            alt={nft.name}
            className="w-full h-full object-cover transform transition-transform duration-700
              group-hover:scale-110"
          />
        </div>

        {/* Info Overlay */}
        <div className={`
          absolute inset-0 bg-gradient-to-t from-city-bg/90 via-city-bg/50 to-transparent
          flex flex-col justify-end p-4 transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-90'}
        `}>
          <h3 className="text-xl font-bold text-white mb-1">{nft.name}</h3>
          <p className={`text-sm font-medium ${rarityStyle}`}>
            {nft.attributes.rarity}
          </p>
        </div>

        {/* Hover Details */}
        <div className={`
          absolute inset-0 bg-gradient-to-r from-city-bg/90 to-tech-bg/90 backdrop-blur-sm p-4
          flex flex-col justify-center items-center text-center
          transition-all duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}>
          <p className="text-zinc-300 mb-4">{nft.description}</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {Object.entries(nft.attributes).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-zinc-500 capitalize">{key}</div>
                <div className="text-white font-medium">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
