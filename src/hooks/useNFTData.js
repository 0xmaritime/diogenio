import { useState, useEffect } from 'react';
import { nftData } from '../data/nftData';

export function useNFTData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setData(nftData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch NFT data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    nfts: data,
    loading,
    error
  };
}
