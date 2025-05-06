import { createContext, useContext, useState } from 'react';
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';

const WalletContext = createContext();

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  autoConnect: true,
});

export function WalletProvider({ children }) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  const connect = async () => {
    // Implement wallet connection logic here
    // This is a placeholder for actual wallet connection
    setIsConnected(true);
    setAddress('0x...');
  };

  const disconnect = () => {
    setIsConnected(false);
    setAddress('');
  };

  const value = {
    isConnected,
    address,
    connect,
    disconnect
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
