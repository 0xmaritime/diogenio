import { useNFTInteraction } from '../../hooks/useNFTInteraction';

export default function MintButton({ tokenId, className }) {
  const { mint, isMinting, error, isConnected } = useNFTInteraction();

  const handleMint = async () => {
    const hash = await mint(tokenId);
    if (hash) {
      // Show success notification
      console.log('Minted successfully:', hash);
    }
  };

  return (
    <div>
      <button
        onClick={handleMint}
        disabled={!isConnected || isMinting}
        className={`
          px-6 py-3 rounded-lg font-medium transition-all duration-200
          ${!isConnected 
            ? 'bg-zinc-800 text-zinc-400 cursor-not-allowed'
            : isMinting
              ? 'bg-zinc-700 text-zinc-300 cursor-wait'
              : 'bg-white text-black hover:bg-zinc-200 active:scale-95'
          }
          ${className}
        `}
      >
        {!isConnected 
          ? 'Connect Wallet to Mint'
          : isMinting
            ? 'Minting...'
            : 'Mint NFT'
        }
      </button>
      {error && (
        <p className="mt-2 text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
}
