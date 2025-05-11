import { useWallet } from '../../context/WalletContext';

export default function Header() {
  const { isConnected, connect } = useWallet(); // Removed disconnect as it's not used in the new header

  return (
    <header className="fixed w-full top-0 z-50 bg-[var(--color-ivory)] border-b border-[var(--color-border-light)]">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-display font-bold tracking-wider text-[var(--color-black)]">
            DIOGENIO
          </a>
          <button 
            onClick={connect} // Assuming connect handles both connect/disconnect logic or it's simplified
            className="bg-[var(--color-black)] text-[var(--color-ivory)] px-6 py-2 text-sm tracking-wide hover:bg-[var(--color-midnight)] transition-colors">
            {isConnected ? 'CONNECTED' : 'CONNECT'}
          </button>
        </div>
      </div>
    </header>
  );
}
