import { ThemeProvider } from './context/ThemeContext';
import { WalletProvider } from './context/WalletContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from './Router';
import './styles/theme.css';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <WalletProvider>
          <AppRouter />
        </WalletProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
