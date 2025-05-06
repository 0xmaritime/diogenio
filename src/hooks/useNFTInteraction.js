import { useState } from 'react';
import { useWallet } from '../context/WalletContext';
import { writeContract, waitForTransaction } from '@wagmi/core';

const CONTRACT_ADDRESS = '0x...'; // Replace with actual contract address

export function useNFTInteraction() {
  const { isConnected, address } = useWallet();
  const [isMinting, setIsMinting] = useState(false);
  const [error, setError] = useState(null);

  const mint = async (tokenId) => {
    if (!isConnected) {
      setError('Please connect your wallet first');
      return;
    }

    setIsMinting(true);
    setError(null);

    try {
      const { hash } = await writeContract({
        address: CONTRACT_ADDRESS,
        abi: [], // Add contract ABI here
        functionName: 'mint',
        args: [tokenId],
      });

      await waitForTransaction({ hash });

      return hash;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setIsMinting(false);
    }
  };

  return {
    mint,
    isMinting,
    error,
    isConnected,
    address
  };
}
