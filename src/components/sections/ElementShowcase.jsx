import React from 'react';

export default function ElementShowcase() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-black to-zinc-900">
      <div className="absolute inset-0 barrel-pattern opacity-5"></div>
      
      {/* Section title that looks like a command prompt */}
      <div className="container mx-auto px-4 mb-16">
        <div className="command-prompt inline-block px-4 py-2 bg-black border border-green-jacket">
          <span className="text-green-jacket font-mono text-sm">[user@barrel]$</span>
          <h2 className="text-white font-mono text-3xl font-bold inline-block ml-2">cat /elements.md</h2>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Core elements breakdown in a terminal window style */}
          <div className="terminal-panel bg-black border border-zinc-700 rounded-lg p-6">
            <div className="mb-6 border-b border-zinc-800 pb-4">
              <h3 className="font-mono text-xl text-blue-eyes">Core Elements:</h3>
            </div>
            
            <div className="space-y-8">
              <div className="element-row bg-black/50 p-4 border-l-4 border-pink-hair">
                <h4 className="font-mono text-lg text-pink-hair mb-2 flex items-center">
                  <span className="text-zinc-500 mr-2">[01]</span> BARREL = CONTAINER
                </h4>
                <div className="flex gap-4 flex-wrap">
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">wooden_barrel</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">gaming_pc</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">fridge</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">bunker</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">pip_boy</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">switch</div>
                </div>
              </div>
              
              <div className="element-row bg-black/50 p-4 border-l-4 border-medal-gold">
                <h4 className="font-mono text-lg text-medal-gold mb-2 flex items-center">
                  <span className="text-zinc-500 mr-2">[02]</span> LANTERN = WISDOM OBJECT
                </h4>
                <div className="flex gap-4 flex-wrap">
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">oil_lantern</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">white_monster</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">sword</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">controller</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">duck</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">gun</div>
                </div>
              </div>
              
              <div className="element-row bg-black/50 p-4 border-l-4 border-blue-eyes">
                <h4 className="font-mono text-lg text-blue-eyes mb-2 flex items-center">
                  <span className="text-zinc-500 mr-2">[03]</span> MARKETPLACE = BACKGROUND
                </h4>
                <div className="flex gap-4 flex-wrap">
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">athens_market</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">matrix_code</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">epstein_island</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">pump_terminal</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">pony_land</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">uganda</div>
                </div>
              </div>
              
              <div className="element-row bg-black/50 p-4 border-l-4 border-green-jacket">
                <h4 className="font-mono text-lg text-green-jacket mb-2 flex items-center">
                  <span className="text-zinc-500 mr-2">[04]</span> DOGS = AUDIENCE
                </h4>
                <div className="flex gap-4 flex-wrap">
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">stray_dogs</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">pepe</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">wojak</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">npc</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">cat</div>
                  <div className="element-tag bg-zinc-900 px-3 py-1 rounded-full text-xs">amogus</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Diogenes panel with art and philosophy */}
          <div className="diogenes-panel relative">
            <div className="painting-frame relative mb-8 group">
              <div className="relative overflow-hidden rounded-lg border-4 border-medal-gold/50 shadow-2xl">
                {/* Base Image */}
                <img 
                  src="/images/diogenes-original.png" 
                  alt="Diogenes in his barrel" 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />

                {/* Effect Layers - More visible by default */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-eyes/40 to-pink-hair/40 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
            
            <div className="philosophy-note bg-black/70 backdrop-blur-sm border border-zinc-700 p-6 rounded-lg">
              <h3 className="text-white font-mono text-xl mb-4 glitch-text">Diogenes.exe</h3>
              
              <p className="text-zinc-300 italic mb-4">
                "The foundation of every state is the education of its youth."
              </p>
              
              <p className="text-zinc-400 mb-4">
                Diogenes rejected societal norms, lived in a barrel, and carried a lantern in 
                daylight "searching for an honest man." His radical minimalism and public 
                truth-telling became the foundation of Cynicism.
              </p>
              
              <p className="text-zinc-400">
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
