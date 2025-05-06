import React from 'react';

export default function HeroTerminal() {
  return (
    <section className="h-screen relative overflow-hidden">
      {/* Animated background that resembles a glitchy digital barrel */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-city-bg to-black">
        {/* Animated grid lines resembling a digital version of Greek columns */}
        <div className="absolute inset-0 grid-pattern animate-pulse-slow opacity-10"></div>
        
        {/* Floating barrels and lanterns */}
        <div className="absolute h-full w-full">
          <div className="absolute top-[10%] left-[20%] opacity-20 barrel-float-1">🛢️</div>
          <div className="absolute top-[30%] right-[15%] opacity-20 barrel-float-2">🛢️</div>
          <div className="absolute bottom-[25%] left-[40%] opacity-20 barrel-float-3">🛢️</div>
          <div className="absolute top-[5%] right-[30%] opacity-20 lantern-float-1">🪔</div>
          <div className="absolute bottom-[10%] right-[25%] opacity-20 lantern-float-2">🪔</div>
        </div>
      </div>
      
      {/* Terminal window containing main content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-5xl">
        <div className="terminal-window bg-black border-2 border-pink-hair rounded-lg overflow-hidden shadow-[0_0_30px_rgba(255,0,140,0.3)]">
          {/* Terminal header */}
          <div className="terminal-header flex items-center bg-zinc-900 px-4 py-2 border-b border-zinc-800">
            <div className="flex gap-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-pink-hair"></div>
              <div className="w-3 h-3 rounded-full bg-medal-gold"></div>
              <div className="w-3 h-3 rounded-full bg-blue-eyes"></div>
            </div>
            <div className="font-mono text-xs text-zinc-400">diogenes@barrel:~</div>
          </div>
          
          {/* Terminal content */}
          <div className="p-6 space-y-8">
            {/* ASCII art logo */}
            <pre className="font-mono text-sm md:text-base text-medal-gold whitespace-pre-wrap leading-tight overflow-hidden">
{`
██████╗ ██╗ ██████╗  ██████╗ ███████╗███╗   ██╗██╗ ██████╗ 
██╔══██╗██║██╔═══██╗██╔════╝ ██╔════╝████╗  ██║██║██╔═══██╗
██║  ██║██║██║   ██║██║  ███╗█████╗  ██╔██╗ ██║██║██║   ██║
██║  ██║██║██║   ██║██║   ██║██╔══╝  ██║╚██╗██║██║██║   ██║
██████╔╝██║╚██████╔╝╚██████╔╝███████╗██║ ╚████║██║╚██████╔╝
╚═════╝ ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚═╝ ╚═════╝                                                           
`}
            </pre>
            
            {/* Terminal text with typewriter effect */}
            <div className="space-y-4">
              <p className="font-mono text-green-jacket typewriter-text">
                <span className="text-zinc-400">$</span> <span className="text-white">./wisdom.sh --based --unfiltered</span>
              </p>
              
              <p className="font-mono text-white leading-relaxed max-w-3xl typing-delay-1">
                <span className="text-medal-gold">[INIT]</span> Loading 4,200 Digital Cynics into the blockchain...
              </p>
              
              <p className="font-mono text-white leading-relaxed max-w-3xl typing-delay-2">
                <span className="text-blue-eyes">[STDOUT]</span> "There's only a finger's width between genius and complete retardation" - Diogenes (probably)
              </p>
              
              <p className="font-mono text-white leading-relaxed max-w-3xl typing-delay-3">
                <span className="text-pink-hair">[ALERT]</span> Ancient wisdom for terminal degenerates detected. Philosophical shitposting as a service now online.
              </p>
              
              {/* Command prompt with blinking cursor */}
              <div className="font-mono text-white flex items-center typing-delay-4">
                <span className="text-zinc-400 mr-2">$</span>
                <span className="typing-prompt">Enter the barrel</span>
                <span className="blinking-cursor ml-1">█</span>
              </div>
            </div>
            
            {/* Action buttons that appear after typing animation */}
            <div className="space-x-4 typing-delay-5 opacity-0 animate-fade-in">
              <a 
                href="/gallery" 
                className="inline-block bg-pink-hair text-black px-8 py-3 rounded-md glitch-hover font-mono font-bold"
              >
                $ cd /gallery
              </a>
              <a 
                href="/about" 
                className="inline-block bg-transparent text-medal-gold border border-medal-gold px-8 py-3 rounded-md glitch-hover font-mono"
              >
                $ man diogenio
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Binary code rain in background - subtle */}
      <div className="absolute inset-0 matrix-code opacity-5 pointer-events-none"></div>
      
      {/* Hidden philosophical quotes that appear on hover */}
      <div className="absolute top-5 left-5 text-xs font-mono text-zinc-600 hover:text-pink-hair transition-colors hidden md:block">
        The cancelled will inherit the blockchain.
      </div>
      <div className="absolute bottom-5 right-5 text-xs font-mono text-zinc-600 hover:text-medal-gold transition-colors hidden md:block">
        Stand out of my digital sunlight.
      </div>
    </section>
  );
}
