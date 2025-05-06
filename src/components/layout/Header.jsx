import { useWallet } from '../../context/WalletContext';
import Navigation from '../ui/Navigation';

export default function Header() {
  const { isConnected, connect, disconnect } = useWallet();

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-sm border-b border-pink-hair/20">
      <div className="absolute inset-0 bg-gradient-to-b from-city-bg to-black/90" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 @container">
          <div className="flex items-center shrink-0 mr-4">
            <a 
              href="/" 
              className="text-xl @sm:text-2xl @md:text-3xl font-bold text-gradient-primary 
                font-stretch-[60%] @supports-[text-wrap: balance]:text-wrap-balance
                transition-all duration-200"
            >
              DioGenio
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center max-w-2xl mx-4">
            <Navigation variant="desktop" />
          </div>
          
          <div className="flex items-center gap-3 @sm:gap-4">
            <button
              onClick={isConnected ? disconnect : connect}
              className="text-sm @sm:text-base bg-pink-hair text-white 
                px-4 @sm:px-6 py-2 rounded-md font-medium 
                hover:bg-pink-hair/90 transition-all duration-200 
                transform active:scale-95 shadow-lg
                hover:shadow-xl whitespace-nowrap
                relative after:absolute after:inset-0 
                after:rounded-md after:ring-2 after:ring-white/10 
                after:hover:ring-white/20 after:transition-all"
            >
              {isConnected ? 'Disconnect' : 'Connect'}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="lg:hidden -mt-1 pb-2 border-t border-zinc-800/50">
          <div className="py-1">
            <Navigation variant="mobile" />
          </div>
        </div>
      </div>
    </header>
  );
};
