import { useState } from 'react';
import Layout from '../components/layout/Layout';

const elements = [
  {
    name: 'The Barrel',
    description: 'Primary dwelling unit, represents minimalism and rejection of luxury.',
    attributes: ['Weatherproof', 'Mobile', 'Sustainable', 'Eco-friendly'],
    category: 'Housing'
  },
  {
    name: 'The Lantern',
    description: 'Tool for seeking truth and enlightenment in the digital age.',
    attributes: ['Ethereum-powered', 'Truth-seeking', 'Illuminating', 'Web3-enabled'],
    category: 'Tools'
  },
  {
    name: 'The Marketplace',
    description: 'Public space for philosophical discourse and NFT trading.',
    attributes: ['Decentralized', 'Community-driven', 'Interactive', 'Open-source'],
    category: 'Infrastructure'
  }
];

export default function ElementsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', ...new Set(elements.map(el => el.category))];
  
  const filteredElements = elements.filter(el => 
    activeCategory === 'all' || el.category === activeCategory
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gradient-primary mb-4">
            Architectural Elements
          </h1>
          <p className="text-xl text-text-secondary">
            Core components of the DioGenio philosophy and infrastructure
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2 rounded-lg font-medium transition-colors
                ${activeCategory === category
                  ? 'bg-pink-hair text-white'
                  : 'bg-card-dark text-text-secondary hover:bg-pink-hair/20 hover:text-white'
                }
              `}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredElements.map(element => (
            <div 
              key={element.name}
              className="bg-card-dark rounded-xl p-6 border border-pink-hair/30
                hover:border-pink-hair/50 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {element.name}
              </h3>
              <p className="text-text-secondary mb-4">
                {element.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {element.attributes.map(attr => (
                  <span 
                    key={attr}
                    className="px-3 py-1 bg-tech-bg text-text-secondary rounded-full text-sm"
                  >
                    {attr}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
