import React from 'react';

export default function ElementShowcase() {
  return (
    <section className="py-24 relative overflow-hidden bg-[var(--color-city-bg)]"> {/* Off-White background */}
      <div className="absolute inset-0 barrel-pattern opacity-5" style={{ '--barrel-pattern-color': 'var(--color-accent-3)'}}></div> {/* Updated barrel pattern color */}
      
      {/* Section title that looks like a command prompt */}
      <div className="container mx-auto px-4 mb-16">
        <div className="command-prompt inline-block px-4 py-2 bg-[var(--color-dark-eyes)] border border-[var(--color-accent-3)]"> {/* Dark Brown bg, Pale Olive border */}
          <span className="text-[var(--color-accent-3)] font-mono text-sm">[user@barrel]$</span> {/* Pale Olive text */}
          <h2 className="text-[var(--color-text-primary)] font-mono text-3xl font-bold inline-block ml-2">cat /elements.md</h2>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Core elements breakdown in a terminal window style */}
          <div className="terminal-panel bg-[var(--color-card-dark-opacity)] border border-[var(--color-dark-brown-opacity-30)] rounded-lg p-6"> {/* Dark Brown bg and border */}
            <div className="mb-6 border-b border-[var(--color-dark-brown-opacity-30)] pb-4"> {/* Dark Brown border */}
              <h3 className="font-mono text-xl text-[var(--color-accent-1)]">Core Elements:</h3> {/* Teal Blue text */}
            </div>
            
            <div className="space-y-8">
              <div className="element-row bg-[var(--color-dark-eyes)]/50 p-4 border-l-4 border-[var(--color-accent-1)]"> {/* Teal Blue border */}
                <h4 className="font-mono text-lg text-[var(--color-accent-1)] mb-2 flex items-center"> {/* Teal Blue text */}
                  <span className="text-[var(--color-text-secondary)] mr-2">[01]</span> BARREL = CONTAINER
                </h4>
                <div className="flex gap-4 flex-wrap">
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">wooden_barrel</div> {/* Dark Brown bg, Off-White text */}
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">gaming_pc</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">fridge</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">bunker</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">pip_boy</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">switch</div>
                </div>
              </div>
              
              <div className="element-row bg-[var(--color-dark-eyes)]/50 p-4 border-l-4 border-[var(--color-accent-3)]"> {/* Pale Olive border */}
                <h4 className="font-mono text-lg text-[var(--color-accent-3)] mb-2 flex items-center"> {/* Pale Olive text */}
                  <span className="text-[var(--color-text-secondary)] mr-2">[02]</span> LANTERN = WISDOM OBJECT
                </h4>
                <div className="flex gap-4 flex-wrap">
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">oil_lantern</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">white_monster</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">sword</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">controller</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">duck</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">gun</div>
                </div>
              </div>
              
              <div className="element-row bg-[var(--color-dark-eyes)]/50 p-4 border-l-4 border-[var(--color-accent-2)]"> {/* Forest Green border */}
                <h4 className="font-mono text-lg text-[var(--color-accent-2)] mb-2 flex items-center"> {/* Forest Green text */}
                  <span className="text-[var(--color-text-secondary)] mr-2">[03]</span> MARKETPLACE = BACKGROUND
                </h4>
                <div className="flex gap-4 flex-wrap">
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">athens_market</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">matrix_code</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">epstein_island</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">pump_terminal</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">pony_land</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">uganda</div>
                </div>
              </div>
              
              <div className="element-row bg-[var(--color-dark-eyes)]/50 p-4 border-l-4 border-[var(--color-dark-eyes)]"> {/* Dark Brown border */}
                <h4 className="font-mono text-lg text-[var(--color-text-secondary)] mb-2 flex items-center"> {/* Warm Gray text for Dogs (Dark Brown was too dark for text) */}
                  <span className="text-[var(--color-text-secondary)] mr-2">[04]</span> DOGS = AUDIENCE
                </h4>
                <div className="flex gap-4 flex-wrap">
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">stray_dogs</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">pepe</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">wojak</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">npc</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">cat</div>
                  <div className="element-tag bg-[var(--color-dark-eyes)] px-3 py-1 rounded-full text-xs text-[var(--color-city-bg)]">amogus</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Diogenes panel with art and philosophy */}
          <div className="diogenes-panel relative">
            <div className="painting-frame relative mb-8 group">
              <div className="relative overflow-hidden rounded-lg border-4 border-[var(--color-accent-3)]/50 shadow-2xl"> {/* Pale Olive border for frame */}
                {/* Base Image */}
                <img 
                  src="/images/diogenes-original.png" 
                  alt="Diogenes in his barrel" 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />

                {/* Effect Layers - More visible by default */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-2)]/40 to-[var(--color-accent-1)]/40 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-20"></div> {/* Forest Green to Teal Blue gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-eyes)]/60 to-transparent"></div> {/* Dark Brown gradient */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxmaWx0ZXIgaWQ9Im5vaXNlIj4KICAgIDxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjA1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+CiAgICA8ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+CiAgPC9maWx0ZXI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4xNSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBvdmVybGF5OyIvPgo8L3N2Zz4=')] opacity-20 group-hover:opacity-40 mix-blend-overlay"></div>
                
                {/* Glitch Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 group-hover:animate-[glitch_0.5s_linear_infinite]"></div>
                </div>

                {/* CRT Scanlines - Always visible */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)50%,rgba(0,0,0,0.25)50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-50"></div>

                {/* Interactive Hover Effect */}
                <div className="absolute inset-0 backdrop-blur-sm opacity-10 group-hover:opacity-30 transition-all duration-300"></div>
              </div>
            </div>
            
            <div className="philosophy-note bg-[var(--color-card-dark-opacity)] backdrop-blur-sm border border-[var(--color-dark-brown-opacity-30)] p-6 rounded-lg"> {/* Dark Brown bg and border */}
              <h3 className="text-[var(--color-text-primary)] font-mono text-xl mb-4 glitch-text">Diogenes.exe</h3>
              
              <p className="text-[var(--color-text-secondary)] italic mb-4">
                "The foundation of every state is the education of its youth."
              </p>
              
              <p className="text-[var(--color-text-secondary)] mb-4">
                Diogenes rejected societal norms, lived in a barrel, and carried a lantern in 
                daylight "searching for an honest man." His radical minimalism and public 
                truth-telling became the foundation of Cynicism.
              </p>
              
              <p className="text-[var(--color-text-secondary)]">
                Our collection transforms his ancient barrel into digital containers, 
                his truth-seeking lantern into modern objects, and his philosophy 
                into blockchain-based wisdom for the 21st century.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
