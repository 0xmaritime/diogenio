import React, { useState, useEffect, useRef } from 'react';

const DioGenioBarrel = () => {
  const [currentView, setCurrentView] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [currentQuote, setCurrentQuote] = useState("");
  const [quoteVisible, setQuoteVisible] = useState(true);
  const containerRef = useRef(null);
  const barrelRef = useRef(null);
  
  // Quotes for each perspective
  const quotes = [
    "Perspective is the ultimate luxury",
    "Ancient DAWG energy for those who refuse containment",
    "Diogenes found freedom in constraints. So can you.",
    "The barrel is both vessel and haven",
    "Step inside to discover new perspectives"
  ];
  
  // Initialize with first quote
  useEffect(() => {
    setCurrentQuote(quotes[0]);
  }, []);
  
  // Handle smooth perspective changes with animation
  const changePerspective = (index) => {
    if (index === currentView || animating) return;
    
    // Start animation
    setAnimating(true);
    
    // Fade out quote first
    setQuoteVisible(false);
    
    // Change perspective after quote fades out
    setTimeout(() => {
      setCurrentView(index);
      setCurrentQuote(quotes[index]);
      
      // Fade in quote after perspective changes
      setTimeout(() => {
        setQuoteVisible(true);
        
        // End animation state
        setTimeout(() => {
          setAnimating(false);
        }, 300);
      }, 300);
    }, 300);
  };
  
  // Mouse movement handling for barrel interaction
  const handleMouseMove = (e) => {
    if (!barrelRef.current) return;
    
    const rect = barrelRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x, y });
    
    // Handle dragging for perspective changes
    if (dragging) {
      const deltaX = e.clientX - dragStart.x;
      
      // Determine if we should change perspective based on drag distance
      if (Math.abs(deltaX) > 70) {
        const direction = deltaX > 0 ? -1 : 1;
        const newView = Math.max(0, Math.min(4, currentView + direction));
        
        if (newView !== currentView) {
          changePerspective(newView);
          setDragStart({ x: e.clientX, y: e.clientY });
        }
      }
    }
  };
  
  // Mouse drag handling
  const handleMouseDown = (e) => {
    setDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    barrelRef.current.style.cursor = 'grabbing';
  };
  
  const handleMouseUp = () => {
    setDragging(false);
    if (barrelRef.current) {
      barrelRef.current.style.cursor = 'grab';
    }
  };
  
  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      const newView = Math.min(4, currentView + 1);
      if (newView !== currentView) {
        changePerspective(newView);
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      const newView = Math.max(0, currentView - 1);
      if (newView !== currentView) {
        changePerspective(newView);
      }
    }
  };
  
  // Handle scroll to change perspectives with a slower threshold
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || animating) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Only process if container is in view
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Calculate scroll position relative to container
        const scrollPosition = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        
        // Map to perspective index with a slower rate to make all 5 views accessible
        const scrollRange = scrollPosition * 5.5; // Expanded range to ensure all 5 views are accessible
        const newIndex = Math.min(Math.floor(scrollRange), 4);
        
        if (newIndex !== currentView && !animating) {
          changePerspective(newIndex);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView, animating]);
  
  // Mouse event listeners and keyboard focus
  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseUp);
    document.addEventListener('keydown', handleKeyDown);
    
    // Set initial focus for keyboard navigation
    if (barrelRef.current) {
      barrelRef.current.tabIndex = 0;
      barrelRef.current.focus();
    }
    
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseUp);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentView]);
  
  // Get dynamic transform for barrel based on current view and mouse position
  const getBarrelStyle = () => {
    // Base style with 3D transform
    const style = {
      transition: dragging ? 'none' : 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
      transformOrigin: '50% 50%',
      transform: 'rotateX(0deg) rotateY(0deg)'
    };
    
    // Calculate mouse influence (subtle rotation based on mouse position)
    const mouseInfluenceX = (mousePosition.x - 0.5) * 15;
    const mouseInfluenceY = (mousePosition.y - 0.5) * 15;
    
    // Add perspective-specific transforms plus mouse influence
    switch (currentView) {
      case 0: // Side view
        return {
          ...style,
          transform: `rotateX(${mouseInfluenceY}deg) rotateY(${mouseInfluenceX}deg)`
        };
      case 1: // Top view
        return {
          ...style,
          transform: `rotateX(${65 + mouseInfluenceY * 0.5}deg) rotateY(${mouseInfluenceX}deg)`
        };
      case 2: // Interior view
        return {
          ...style,
          transform: `rotateX(${10 + mouseInfluenceY}deg) rotateY(${20 + mouseInfluenceX}deg) translateZ(50px)`
        };
      case 3: // Cutaway view
        return {
          ...style,
          transform: `rotateX(${30 + mouseInfluenceY * 0.7}deg) rotateY(${-30 + mouseInfluenceX}deg) translateZ(30px)`
        };
      case 4: // Portal view
        return {
          ...style,
          transform: `rotateX(${5 + mouseInfluenceY * 0.5}deg) rotateY(${mouseInfluenceX}deg) scale(${1.1 + Math.abs(mousePosition.y - 0.5) * 0.1})`
        };
      default:
        return style;
    }
  };
  
  // Enhanced light effect based on mouse position and current view
  const getLightStyle = () => {
    // Base positions for each view
    const basePositions = [
      { top: '40%', left: '35%' }, // Side view
      { top: '30%', left: '50%' }, // Top view
      { top: '50%', left: '50%' }, // Interior view
      { top: '45%', left: '60%' }, // Cutaway view
      { top: '60%', left: '50%' }  // Portal view
    ];
    
    const basePos = basePositions[currentView];
    
    // Calculate mouse influence on light position
    const mouseInfluenceX = (mousePosition.x - 0.5) * 25;
    const mouseInfluenceY = (mousePosition.y - 0.5) * 25;
    
    // Parse base positions as percentages
    const baseTop = parseFloat(basePos.top);
    const baseLeft = parseFloat(basePos.left);
    
    // Apply mouse influence to base positions
    const top = `${baseTop + mouseInfluenceY}%`;
    const left = `${baseLeft + mouseInfluenceX}%`;
    
    // Determine light intensity based on view and mouse position
    const intensity = currentView === 4 ? 0.9 : 0.7;
    const mouseDistance = Math.sqrt(
      Math.pow(mousePosition.x - 0.5, 2) + 
      Math.pow(mousePosition.y - 0.5, 2)
    );
    
    // Light gets more intense as mouse moves closer to light source
    const adjustedIntensity = intensity * (1 - mouseDistance);
    
    // Enhanced light effect with multiple layers and colors
    return {
      primary: {
        position: 'absolute',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: `radial-gradient(circle, rgba(255,248,220,${adjustedIntensity}) 0%, rgba(255,248,220,${adjustedIntensity * 0.4}) 40%, rgba(255,248,220,0) 70%)`,
        top,
        left,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        transition: dragging ? 'none' : 'all 0.4s ease',
        zIndex: 1,
        mixBlendMode: 'screen'
      },
      secondary: {
        position: 'absolute',
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        background: `radial-gradient(circle, rgba(255,230,180,${adjustedIntensity * 0.8}) 0%, rgba(255,230,180,${adjustedIntensity * 0.3}) 50%, rgba(255,230,180,0) 80%)`,
        top,
        left,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        transition: dragging ? 'none' : 'all 0.4s ease',
        zIndex: 2,
        mixBlendMode: 'screen',
        filter: 'blur(4px)'
      },
      core: {
        position: 'absolute',
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        background: `radial-gradient(circle, rgba(255,255,255,${adjustedIntensity}) 0%, rgba(255,248,220,${adjustedIntensity * 0.8}) 50%, rgba(255,230,180,0) 100%)`,
        top,
        left,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        transition: dragging ? 'none' : 'all 0.4s ease',
        zIndex: 3,
        boxShadow: `0 0 20px rgba(255,248,220,${adjustedIntensity * 0.7})`,
        filter: 'blur(2px)'
      }
    };
  };
  
  const lightStyle = getLightStyle();
  
  // Get cursor style based on dragging state
  const getCursorStyle = () => {
    if (dragging) return 'grabbing';
    return 'grab';
  };
  
  return (
    <div 
      ref={containerRef} 
      className="max-w-7xl mx-auto px-4 py-10 min-h-[100vh] font-serif"
    >
      <header className="text-center mb-16">
        <h1 className="text-5xl font-normal tracking-widest m-0">
          DIOGENIO
        </h1>
      </header>
      
      {/* Barrel visualization container */}
      <div 
        ref={barrelRef}
        className="h-[500px] relative perspective-800 mb-12 cursor-grab outline-none"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        tabIndex="0"
      >
        {/* Enhanced light effects */}
        <div style={lightStyle.primary} />
        <div style={lightStyle.secondary} />
        <div style={lightStyle.core} />
        
        {/* Current state indicator (subtle) */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 flex gap-2 z-5">
          {[0, 1, 2, 3, 4].map(index => (
            <div 
              key={index}
              className={`w-1.5 h-1.5 rounded-full border border-black/30 opacity-50 ${
                currentView === index ? 'bg-black' : 'bg-transparent'
              }`}
            />
          ))}
        </div>
        
        {/* 3D Barrel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center perspective-1000">
          {/* Barrel container with 3D transforms */}
          <div 
            className="w-[300px] h-[400px] relative preserve-3d"
            style={getBarrelStyle()}
          >
            {/* Barrel visualization */}
            {currentView === 0 && (
              <div className="side-view w-full h-full relative flex flex-col justify-between items-center">
                {/* Top ellipse */}
                <div className="w-full h-20 rounded-full border-2 border-black bg-[rgba(245,240,230,0.2)]" />
                
                {/* Barrel body */}
                <div className="absolute top-10 left-0 w-full h-[calc(100%-80px)] flex justify-between">
                  {/* Left side */}
                  <div className="w-0.5 h-full bg-black" />
                  
                  {/* Staves */}
                  <div className="w-px h-full bg-black opacity-70" />
                  <div className="w-px h-full bg-black opacity-70" />
                  <div className="w-px h-full bg-black opacity-70" />
                  <div className="w-px h-full bg-black opacity-70" />
                  <div className="w-px h-full bg-black opacity-70" />
                  
                  {/* Right side */}
                  <div className="w-0.5 h-full bg-black" />
                </div>
                
                {/* Hoops */}
                <div className="absolute top-1/4 left-0 w-full h-0.5 bg-black" />
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black" />
                <div className="absolute top-3/4 left-0 w-full h-0.5 bg-black" />
                
                {/* Bottom ellipse */}
                <div className="w-full h-20 rounded-full border-2 border-black bg-[rgba(245,240,230,0.2)]" />
              </div>
            )}
            
            {currentView === 1 && (
              <div className="top-view w-full h-full relative flex justify-center items-center">
                <div className="w-[280px] h-[200px] rounded-full border-2 border-black bg-[rgba(245,240,230,0.2)] flex justify-center items-center">
                  <div className="w-[200px] h-[140px] rounded-full border-[1.5px] border-black" />
                </div>
                
                {/* Staves */}
                <div className="absolute w-0.5 h-[200px] bg-black rotate-0" />
                <div className="absolute w-0.5 h-[200px] bg-black rotate-45" />
                <div className="absolute w-0.5 h-[200px] bg-black rotate-90" />
                <div className="absolute w-0.5 h-[200px] bg-black rotate-135" />
              </div>
            )}
            
            {currentView === 2 && (
              <div className="interior-view w-full h-full relative flex flex-col justify-between items-center">
                {/* Top ellipse */}
                <div className="w-full h-20 rounded-full border-2 border-black bg-[rgba(245,240,230,0.2)]" />
                
                {/* Barrel body */}
                <div className="absolute top-10 left-0 w-full h-[calc(100%-80px)] flex justify-between">
                  <div className="w-0.5 h-full bg-black" />
                  <div className="w-0.5 h-full bg-black" />
                </div>
                
                {/* Interior cutaway */}
                <div className="absolute top-20 left-[60px] w-[180px] h-[calc(100%-160px)] bg-[rgba(245,240,230,0.3)] border-x border-black" />
                
                {/* Bottom ellipse */}
                <div className="w-full h-20 rounded-full border-2 border-black bg-[rgba(245,240,230,0.2)]" />
              </div>
            )}
            
            {currentView === 3 && (
              <div className="cutaway-view w-full h-full relative flex flex-col justify-between items-center">
                {/* Top ellipse */}
                <div className="w-full h-20 rounded-full border-2 border-black bg-[rgba(245,240,230,0.2)]" />
                
                {/* Barrel body */}
                <div className="absolute top-10 left-0 w-full h-[calc(100%-80px)] flex justify-between">
                  <div className="w-0.5 h-full bg-black" />
                  <div className="w-0.5 h-full bg-black" />
                </div>
                
                {/* Cutaway section */}
                <div className="absolute top-20 right-0 w-[150px] h-[calc(100%-160px)] bg-[rgba(245,240,230,0.3)] border-l border-black border-dashed" />
                
                {/* Vertical divider */}
                <div className="absolute top-10 left-1/2 w-px h-[calc(100%-80px)] bg-black" />
                
                {/* Bottom ellipse */}
                <div className="w-full h-20 rounded-full border-2 border-black bg-[rgba(245,240,230,0.2)]" />
              </div>
            )}
            
            {currentView === 4 && (
              <div className="portal-view w-full h-full relative flex flex-col justify-between items-center">
                {/* Top ellipse */}
                <div className="w-full h-20 rounded-full border-2 border-black bg-[rgba(245,240,230,0.2)]" />
                
                {/* Barrel body */}
                <div className="absolute top-10 left-0 w-full h-[calc(100%-80px)] flex justify-between">
                  <div className="w-0.5 h-full bg-black" />
                  <div className="w-0.5 h-full bg-black" />
                </div>
                
                {/* Hoops */}
                <div className="absolute top-1/4 left-0 w-full h-0.5 bg-black" />
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black" />
                <div className="absolute top-3/4 left-0 w-full h-0.5 bg-black" />
                
                {/* Doorway */}
                <div className="absolute bottom-20 left-[120px] w-[60px] h-[100px] bg-black/10 border-[1.5px] border-black border-b-0 flex flex-col justify-around items-center">
                  <div className="w-px h-[100px] bg-black opacity-50" />
                </div>
                
                {/* Bottom ellipse */}
                <div className="w-full h-20 rounded-full border-2 border-black bg-[rgba(245,240,230,0.2)]" />
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Quote with smooth transitions */}
      <div className="text-center mb-12 h-20 flex justify-center items-center">
        <p className={`text-4xl italic leading-relaxed m-0 transition-all duration-400 ${
          quoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'
        }`}>
          "{currentQuote}"
        </p>
      </div>
      
      {/* CTA Button - final view only */}
      {currentView === 4 && (
        <div className={`text-center transition-opacity duration-500 ${
          animating ? 'opacity-0' : 'opacity-100'
        }`}>
          <button
            onClick={() => alert('Stepping inside...')}
            className="px-10 py-3 bg-black text-white border-none text-base tracking-wider cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
          >
            STEP INSIDE
          </button>
        </div>
      )}
    </div>
  );
};

export default DioGenioBarrel; 