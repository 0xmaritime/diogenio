import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 bg-[var(--color-ivory)] relative overflow-hidden"> {/* Ivory background */}
      {/* Greek barrel pattern background */}
      <div className="absolute inset-0 bg-repeat opacity-5"
           style={{ backgroundImage: 'url("/images/barrel-pattern.png")', backgroundSize: '100px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8 text-center">
          <div className="inline-block">
            <pre className="font-mono text-xs md:text-sm text-[var(--color-accent-3)] whitespace-pre overflow-hidden"> {/* Pale Olive ASCII art */}
{`
██████╗ ██╗ ██████╗  ██████╗ ███████╗███╗   ██╗██╗ ██████╗ 
██╔══██╗██║██╔═══██╗██╔════╝ ██╔════╝████╗  ██║██║██╔═══██╗
██║  ██║██║██║   ██║██║  ███╗█████╗  ██╔██╗ ██║██║██║   ██║
██║  ██║██║██║   ██║██║   ██║██╔══╝  ██║╚██╗██║██║██║   ██║
██████╔╝██║╚██████╔╝╚██████╔╝███████╗██║ ╚████║██║╚██████╔╝
╚═════╝ ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚═╝ ╚═════╝  
`}
            </pre>
          </div>
          
          <p className="text-[var(--color-text-secondary)] mt-4 font-mono text-sm italic"> {/* Warm Gray text */}
            "Finding truth with a lantern in the digital age."
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column: blockchain info */}
          <div className="terminal-box bg-[var(--color-ivory-opacity-80)] border border-[var(--color-black-opacity-10)] p-4 rounded-lg"> {/* Ivory opacity bg, black opacity border */}
            <h3 className="font-mono text-[var(--color-accent-1)] text-lg mb-4">{'>'} chain info</h3> {/* Teal Blue heading */}
            <div className="space-y-2 font-mono text-sm">
              <p className="text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-text-secondary)]/70 mr-2">$</span>
                <span className="text-[var(--color-text-primary)]">Chain:</span> Ethereum
              </p>
              <p className="text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-text-secondary)]/70 mr-2">$</span>
                <span className="text-[var(--color-text-primary)]">Contract:</span> 0xDio...
              </p>
              <p className="text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-text-secondary)]/70 mr-2">$</span>
                <span className="text-[var(--color-text-primary)]">Total Supply:</span> 4,200
              </p>
              <p className="text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-text-secondary)]/70 mr-2">$</span>
                <span className="text-[var(--color-text-primary)]">License:</span> CC0
              </p>
            </div>
          </div>
          
          {/* Middle column: navigation */}
          <div className="terminal-box bg-[var(--color-ivory-opacity-80)] border border-[var(--color-black-opacity-10)] p-4 rounded-lg">
            <h3 className="font-mono text-[var(--color-accent-2)] text-lg mb-4">{'>'} navigation</h3> {/* Forest Green heading */}
            <div className="grid grid-cols-2 gap-3 font-mono text-sm">
              {/* Links removed as per user request */}
            </div>
          </div>
          
          {/* Right column: socials & connect */}
          <div className="terminal-box bg-[var(--color-ivory-opacity-80)] border border-[var(--color-black-opacity-10)] p-4 rounded-lg">
            <h3 className="font-mono text-[var(--color-accent-3)] text-lg mb-4">{'>'} connect</h3> {/* Pale Olive heading */}
            <div className="grid grid-cols-2 gap-3 font-mono text-sm">
              <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-1)] transition-colors"> {/* Teal Blue hover */}
                <span className="text-[var(--color-text-secondary)]/70 mr-2">$</span>
                ssh twitter
              </a>
              <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-1)] transition-colors">
                <span className="text-[var(--color-text-secondary)]/70 mr-2">$</span>
                ssh discord
              </a>
              <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-1)] transition-colors">
                <span className="text-[var(--color-text-secondary)]/70 mr-2">$</span>
                ssh opensea
              </a>
              <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-1)] transition-colors">
                <span className="text-[var(--color-text-secondary)]/70 mr-2">$</span>
                ssh github
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom signature with visitor counter and timestamp */}
        <div className="mt-12 pt-8 border-t border-[var(--color-black-opacity-10)] text-center"> {/* Subtle black border */}
          <div className="inline-block bg-[var(--color-ivory)] border border-[var(--color-black-opacity-10)] px-3 py-1 font-mono text-xs text-[var(--color-text-secondary)]/70"> {/* Ivory bg, subtle black border, dark gray text */}
            <span>Visitors: 69,420</span>
            <span className="mx-2">|</span>
            <span>Last updated: 05.06.2025</span>
          </div>
          
          <p className="text-[var(--color-text-secondary)]/70 mt-6 text-xs font-mono"> {/* Warm Gray text */}
            Based in a digital barrel. CC0 under Viral Public License.
          </p>
        </div>
      </div>
    </footer>
  );
}
