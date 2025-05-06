import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black">
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <footer className="py-8 text-center text-zinc-600 dark:text-zinc-400">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm">
            "Finding truth with a lantern in the digital age." — DioGenio, 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
