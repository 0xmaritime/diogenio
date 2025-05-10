import { useState, useEffect } from 'react';
import { nftCollection } from '../data/nftData'; // Changed import

export function useNFTData() {
  const [nfts, setNfts] = useState([]); // Renamed state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => { // Removed async and await for local data
      try {
        // For local data, no need to simulate API delay unless specifically desired for UX testing
        setNfts(nftCollection); // Use imported nftCollection
        setLoading(false);
      } catch (err) {
        console.error("Error processing NFT data:", err); // Log the actual error
        setError('Failed to process NFT data'); // More specific error for local data
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    nfts, // Return nfts directly
    loading,
    error
  };
}
