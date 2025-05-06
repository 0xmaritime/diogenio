export const nftCollection = [
  {
    id: 1,
    name: 'Diogenes Prime',
    description: 'The original cynic, master of the barrel life.',
    image: '/nfts/diogenes-prime.png',
    attributes: {
      rarity: 'Legendary',
      wisdom: 100,
      cynicism: 100,
      barrel: 'Original Oak',
      philosophy: 'Pure Cynicism'
    }
  },
  {
    id: 2,
    name: 'Digital Lantern',
    description: 'Seeking honest humans in the metaverse.',
    image: '/nfts/digital-lantern.png',
    attributes: {
      rarity: 'Epic',
      wisdom: 85,
      cynicism: 90,
      lantern: 'Ethereum Powered',
      philosophy: 'Digital Truth'
    }
  },
  // Add more NFTs here
];

export const rarityLevels = {
  Common: { color: 'text-zinc-400', chance: '45%' },
  Uncommon: { color: 'text-green-400', chance: '30%' },
  Rare: { color: 'text-blue-400', chance: '15%' },
  Epic: { color: 'text-purple-400', chance: '7%' },
  Legendary: { color: 'text-yellow-400', chance: '3%' }
};
