import { useNFTInteraction } from '../../hooks/useNFTInteraction';

export default function MintButton({ tokenId, className }) {
  const { acquire, isAcquiring, error, isConnected } = useNFTInteraction(); // Changed mint to acquire, isMinting to isAcquiring

  const handleAcquire = async () => { // Changed handleMint to handleAcquire
    const hash = await acquire(tokenId); // Changed mint to acquire
    if (hash) {
      // Show success notification
      console.log('Acquired successfully:', hash); // Changed Minted to Acquired
    }
  };

  return (
    <div>
      <button
        onClick={handleAcquire} // Changed handleMint to handleAcquire
        disabled={!isConnected || isAcquiring} // Changed isMinting to isAcquiring
        className={`
          px-6 py-3 rounded-lg font-medium transition-all duration-200
          ${!isConnected
            ? 'bg-zinc-800 text-zinc-400 cursor-not-allowed'
            : isAcquiring // Changed isMinting to isAcquiring
              ? 'bg-zinc-700 text-zinc-300 cursor-wait'
              : 'bg-white text-black hover:bg-zinc-200 active:scale-95'
          }
          ${className}
        `}
      >
        {!isConnected
          ? 'Connect Wallet to Acquire' // Changed Mint to Acquire
          : isAcquiring // Changed isMinting to isAcquiring
            ? 'Acquiring...' // Changed Minting to Acquiring
            : 'Acquire NFT' // Changed Mint to Acquire
        }
      </button>
      {error && (
        <p className="mt-2 text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
}
