import { useState } from 'react';
import Layout from '../components/layout/Layout';
import NFTCard from '../components/ui/NFTCard';
import { nftCollection } from '../data/nftData';

export default function GalleryPage() {
  const [sortBy, setSortBy] = useState('id');
  const [filterRarity, setFilterRarity] = useState('all');

  const filteredNFTs = nftCollection.filter(nft => 
    filterRarity === 'all' || nft.attributes.rarity.toLowerCase() === filterRarity
  ).sort((a, b) => {
    if (sortBy === 'rarity') {
      return b.attributes.rarity.localeCompare(a.attributes.rarity);
    }
    return a[sortBy] - b[sortBy];
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gradient-primary mb-4">Digital Cynics Gallery</h1>
          <p className="text-xl text-text-secondary">Browse the collection of philosophical misfits</p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-8">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-card-dark text-white px-4 py-2 rounded-lg border border-pink-hair/20"
          >
            <option value="id">Latest</option>
            <option value="rarity">Rarity</option>
          </select>

          <select
            value={filterRarity}
            onChange={(e) => setFilterRarity(e.target.value)}
            className="bg-card-dark text-white px-4 py-2 rounded-lg border border-pink-hair/20"
          >
            <option value="all">All Rarities</option>
            <option value="common">Common</option>
            <option value="uncommon">Uncommon</option>
            <option value="rare">Rare</option>
            <option value="epic">Epic</option>
            <option value="legendary">Legendary</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredNFTs.map(nft => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
