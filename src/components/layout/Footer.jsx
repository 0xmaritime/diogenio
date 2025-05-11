import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 bg-[var(--color-section)] border-t border-[var(--color-border-light)]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-lg mb-4 text-[var(--color-black)]">About</h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              DioGenio explores the intersection of ancient philosophy and contemporary digital culture through blockchain-based art.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg mb-4 text-[var(--color-black)]">Collection</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-[var(--color-text-secondary)] text-sm hover:text-[var(--color-text-accent)] transition-colors">
                Barrel Editions
              </a>
              <a href="#" className="block text-[var(--color-text-secondary)] text-sm hover:text-[var(--color-text-accent)] transition-colors">
                Lantern Series
              </a>
            </nav>
          </div>
          <div>
            <h3 className="font-display text-lg mb-4 text-[var(--color-black)]">Connect</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-[var(--color-text-secondary)] text-sm hover:text-[var(--color-text-accent)] transition-colors">
                Twitter
              </a>
              <a href="#" className="block text-[var(--color-text-secondary)] text-sm hover:text-[var(--color-text-accent)] transition-colors">
                OpenSea
              </a>
            </nav>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[var(--color-border-light)] text-center">
          <p className="text-[var(--color-text-tertiary)] text-xs tracking-wider">
            © 2025 DIOGENIO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
