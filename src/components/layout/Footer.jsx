import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 bg-black relative overflow-hidden">
      {/* Greek barrel pattern background */}
      <div className="absolute inset-0 bg-repeat opacity-5"
           style={{ backgroundImage: 'url("/images/barrel-pattern.png")', backgroundSize: '100px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8 text-center">
          <div className="inline-block">
            <pre className="font-mono text-xs md:text-sm text-medal-gold whitespace-pre overflow-hidden">
{`
   _____ _      _____            _       
  |  __ (_)    / ____|          (_)      
  | |  \\| ___ | |  __  ___ _ __  _  ___  
  | | __| |/ _ \\ | |_ |/ _ \\ '_ \\| |/ _ \\ 
  | |_\\ \\ | (_) | |__| |  __/ | | | | (_) |
   \\____/_|\\___/ \\_____|\\___| |_|_|_|\\___/ 
`}
            </pre>
          </div>
          
          <p className="text-zinc-500 mt-4 font-mono text-sm italic">
            "Finding truth with a lantern in the digital age."
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column: blockchain info */}
          <div className="terminal-box bg-black/50 border border-zinc-800 p-4 rounded-lg">
            <h3 className="font-mono text-pink-hair text-lg mb-4">{'>'} chain info</h3>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-zinc-400">
                <span className="text-zinc-600 mr-2">$</span>
                <span className="text-white">Chain:</span> Ethereum
              </p>
              <p className="text-zinc-400">
                <span className="text-zinc-600 mr-2">$</span>
                <span className="text-white">Contract:</span> 0xDio...
              </p>
              <p className="text-zinc-400">
                <span className="text-zinc-600 mr-2">$</span>
                <span className="text-white">Total Supply:</span> 4,200
              </p>
              <p className="text-zinc-400">
                <span className="text-zinc-600 mr-2">$</span>
                <span className="text-white">License:</span> CC0
              </p>
            </div>
          </div>
          
          {/* Middle column: navigation */}
          <div className="terminal-box bg-black/50 border border-zinc-800 p-4 rounded-lg">
            <h3 className="font-mono text-blue-eyes text-lg mb-4">{'>'} navigation</h3>
            <div className="grid grid-cols-2 gap-3 font-mono text-sm">
              <a href="/" className="text-zinc-400 hover:text-blue-eyes transition-colors">
                <span className="text-zinc-600 mr-2">$</span>
                cd /home
              </a>
              <a href="/gallery" className="text-zinc-400 hover:text-blue-eyes transition-colors">
                <span className="text-zinc-600 mr-2">$</span>
                cd /gallery
              </a>
              <a href="/elements" className="text-zinc-400 hover:text-blue-eyes transition-colors">
                <span className="text-zinc-600 mr-2">$</span>
                cd /elements
              </a>
              <a href="/lore" className="text-zinc-400 hover:text-blue-eyes transition-colors">
                <span className="text-zinc-600 mr-2">$</span>
                cd /lore
              </a>
              <a href="/about" className="text-zinc-400 hover:text-blue-eyes transition-colors">
                <span className="text-zinc-600 mr-2">$</span>
                cd /about
              </a>
              <a href="/faq" className="text-zinc-400 hover:text-blue-eyes transition-colors">
                <span className="text-zinc-600 mr-2">$</span>
                cd /faq
              </a>
            </div>
          </div>
          
          {/* Right column: socials & connect */}
          <div className="terminal-box bg-black/50 border border-zinc-800 p-4 rounded-lg">
            <h3 className="font-mono text-medal-gold text-lg mb-4">{'>'} connect</h3>
            <div className="grid grid-cols-2 gap-3 font-mono text-sm">
              <a href="#" className="text-zinc-400 hover:text-medal-gold transition-colors">
                <span className="text-zinc-600 mr-2">$</span>
                ssh twitter
              </a>
              <a href="#" className="text-zinc-400 hover:text-medal-gold transition-colors">
                <span className="text-zinc-600 mr-2">$</span>
                ssh discord
              </a>
              <a href="#" className="text-zinc-400 hover:text-medal-gold transition-colors">
                <span className="text-zinc-600 mr-2">$</span>
                ssh opensea
              </a>
              <a href="#" className="text-zinc-400 hover:text-medal-gold transition-colors">
                <span className="text-zinc-600 mr-2">$</span>
                ssh github
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom signature with visitor counter and timestamp */}
        <div className="mt-12 pt-8 border-t border-zinc-900 text-center">
          <div className="inline-block bg-black border border-zinc-800 px-3 py-1 font-mono text-xs text-zinc-600">
            <span>Visitors: 69,420</span>
            <span className="mx-2">|</span>
            <span>Last updated: 05.06.2025</span>
          </div>
          
          <p className="text-zinc-700 mt-6 text-xs font-mono">
            Based in a digital barrel. CC0 under Viral Public License.
          </p>
        </div>
      </div>
    </footer>
  );
}
