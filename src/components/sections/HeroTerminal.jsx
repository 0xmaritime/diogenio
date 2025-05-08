import React from 'react';

export default function HeroTerminal() {
  return (
    <section className="h-screen relative overflow-hidden">
      {/* Updated background to align with new theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-city-bg)] via-[var(--color-tech-bg-opacity)] to-[var(--color-dark-eyes)]"> {/* Off-white to Dark Brown gradient */}
        {/* Animated grid lines resembling a digital version of Greek columns */}
        <div className="absolute inset-0 grid-pattern animate-pulse-slow opacity-5" style={{ 
          '--grid-color-1': 'var(--color-dark-eyes)',
          '--grid-color-2': 'var(--color-green-jacket)',
          backgroundImage: 'linear-gradient(to bottom, rgba(57,50,43,0.1), rgba(41,105,85,0.2), rgba(57,50,43,0.1))'
        }}></div>
        
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-5xl pt-[calc(4rem+20px)] md:pt-0"> {/* 4rem for header height + 20px extra space */}
        <div className="terminal-window bg-black border-2 border-[var(--color-dark-brown-opacity-30)] rounded-lg overflow-hidden shadow-[0_0_20px_rgba(57,50,43,0.4)]"> {/* Updated border and shadow */}
          {/* Terminal header */}
          <div className="terminal-header flex items-center bg-[var(--color-accent-1)] px-4 py-2 border-b border-[var(--color-dark-brown-opacity-30)]"> {/* Updated header bg and border */}
            <div className="flex gap-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-white/50"></div> {/* Simplified dots */}
              <div className="w-3 h-3 rounded-full bg-white/50"></div>
              <div className="w-3 h-3 rounded-full bg-white/50"></div>
            </div>
            <div className="font-mono text-xs text-white">diogenes@barrel:~</div> {/* Updated text color */}
          </div>
          
          {/* Terminal content */}
          <div className="p-6 space-y-8">
            {/* ASCII art logo */}
            <pre className="terminal-ascii font-mono text-sm md:text-base text-[var(--color-accent-3)] whitespace-pre-wrap leading-tight overflow-hidden"> {/* Updated text color to Pale Olive */}
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
              <p className="font-mono text-[var(--color-accent-3)]"> {/* Updated text color to Pale Olive */}
                <span className="text-[var(--color-text-secondary)]">$</span> <span className="text-[var(--color-text-primary)]">./wisdom.sh --based --unfiltered</span>
              </p>
              
              <p className="font-mono text-[var(--color-text-primary)] leading-relaxed max-w-3xl typing-delay-1">
                <span className="text-[var(--color-accent-3)]">[INIT]</span> Loading 4,200 Digital Cynics into the blockchain... {/* Pale Olive for status */}
              </p>
              
              <p className="font-mono text-[var(--color-text-primary)] leading-relaxed max-w-3xl typing-delay-2">
                <span className="text-[var(--color-accent-2)]">[STDOUT]</span> "There's only a finger's width between genius and complete retardation" - Diogenes (probably) {/* Forest Green for stdout */}
              </p>
              
              <p className="font-mono text-[var(--color-text-primary)] leading-relaxed max-w-3xl typing-delay-3">
                <span className="text-[var(--color-accent-1)]">[ALERT]</span> Ancient wisdom for terminal degenerates detected. Philosophical shitposting as a service now online. {/* Teal Blue for alert */}
              </p>
              
              {/* Command prompt without blinking cursor */}
              <div className="font-mono text-[var(--color-text-primary)] flex items-center typing-delay-4">
                <span className="text-zinc-400 mr-2">$</span>
                <span className="typing-prompt">Enter the barrel</span>
              </div>
            </div>
            
            {/* Action buttons that appear after typing animation */}
            <div className="space-x-4 typing-delay-5 opacity-0 animate-fade-in">
              <a 
                href="/gallery" 
                className="inline-block bg-[var(--color-accent-1)] text-[var(--color-text-primary)] px-8 py-3 rounded-md glitch-hover font-mono font-bold hover:bg-[var(--color-accent-1)]/80 transition-colors" /* Teal Blue bg, white text, hover effect */
              >
                $ cd /gallery
              </a>
              <a 
                href="/about" 
                className="inline-block bg-transparent text-[var(--color-city-bg)] border border-[var(--color-accent-2)] px-8 py-3 rounded-md glitch-hover font-mono hover:bg-[var(--color-accent-2)] hover:text-[var(--color-text-primary)] transition-colors" /* Forest Green border, Off-White text, hover effect */
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
      <div className="absolute top-5 left-5 text-xs font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent-1)] transition-colors hidden md:block"> {/* Teal Blue hover */}
        The cancelled will inherit the blockchain.
      </div>
      <div className="absolute bottom-5 right-5 text-xs font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-accent-3)] transition-colors hidden md:block"> {/* Pale Olive hover */}
        Stand out of my digital sunlight.
      </div>
    </section>
  );
}
