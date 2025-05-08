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
        relative overflow-hidden rounded-xl bg-[var(--color-card-dark-opacity)] border border-[var(--color-teal-blue-opacity-30)]
        transform transition-all duration-300
        ${isHovered ? 'scale-[1.02] shadow-xl border-[var(--color-accent-1)]' : ''} 
      `}> {/* Updated bg, border, and hover border */}
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
          absolute inset-0 bg-gradient-to-t from-[var(--color-card-dark)] via-[var(--color-card-dark-opacity)] to-transparent
          flex flex-col justify-end p-4 transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-90'}
        `}> {/* Updated gradient */}
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">{nft.name}</h3>
          <p className={`text-sm font-medium ${rarityStyle}`}>
            {nft.attributes.rarity}
          </p>
        </div>

        {/* Hover Details */}
        <div className={`
          absolute inset-0 bg-gradient-to-r from-[var(--color-card-dark)] to-[var(--color-card-dark-opacity)] backdrop-blur-sm p-4
          flex flex-col justify-center items-center text-center
          transition-all duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}> {/* Updated gradient */}
          <p className="text-[var(--color-text-secondary)] mb-4">{nft.description}</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {Object.entries(nft.attributes).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-[var(--color-text-secondary)] capitalize">{key}</div>
                <div className="text-[var(--color-text-primary)] font-medium">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
