export const nftCollection = [
  {
    id: 1,
    name: 'Barrel Prophet',
    description: 'Defier of kings, dweller of barrels, truth-speaker to the powerful',
    image: '/nfts/diogenio-1.png',
    attributes: {
      rarity: 'Legendary',
      wisdom: 100,
      cynicism: 100,
      barrel: 'Weathered Oak',
      philosophy: 'Truth needs no roof but the open sky'
    }
  },
  {
    id: 2,
    name: 'Lantern Bearer',
    description: 'His light exposes hypocrisy in the darkest corners of the metaverse',
    image: '/nfts/diogenio-2.png',
    attributes: {
      rarity: 'Epic',
      wisdom: 95,
      cynicism: 90,
      lantern: 'Soulfire Torch',
      philosophy: 'A single honest man is worth a thousand liars'
    }
  },
  {
    id: 3,
    name: 'Iron Cynic',
    description: 'His barrel is steel, his words cut deeper than any blade',
    image: '/nfts/diogenio-3.png',
    attributes: {
      rarity: 'Rare',
      wisdom: 80,
      cynicism: 85,
      barrel: 'Forged Iron',
      philosophy: 'Civilization is the disease, simplicity the cure'
    }
  },
  {
    id: 4,
    name: 'Sunlight Bandit',
    description: 'Stole truth from emperors, gave it back to the people',
    image: '/nfts/diogenio-4.png',
    attributes: {
      rarity: 'Epic',
      wisdom: 90,
      cynicism: 95,
      rebuke: 'Kingslayer',
      philosophy: 'Power is the greatest illusion of all'
    }
  },
  {
    id: 5,
    name: 'Void Philosopher',
    description: 'Wanders the cosmos, his barrel the only constant in an absurd universe',
    image: '/nfts/diogenio-featured.png',
    attributes: {
      rarity: 'Legendary',
      wisdom: 110,
      cynicism: 105,
      barrel: 'Singularity Vessel',
      philosophy: 'The void stares back - I laugh at it'
    }
  }
];

export const rarityLevels = {
  Common: { color: 'text-[var(--color-dark-eyes)]', chance: '45%' },       /* Dark Brown */
  Uncommon: { color: 'text-[var(--color-text-secondary)]', chance: '30%' }, /* Warm Gray for Uncommon as a mid-tier */
  Rare: { color: 'text-[var(--color-accent-1)]', chance: '15%' },         /* Teal Blue */
  Epic: { color: 'text-[var(--color-accent-2)]', chance: '7%' },           /* Forest Green */
  Legendary: { color: 'text-[var(--color-accent-3)]', chance: '3%' }      /* Pale Olive */
};
