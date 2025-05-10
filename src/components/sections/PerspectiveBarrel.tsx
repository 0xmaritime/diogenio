import React, { useState, useEffect, useRef } from 'react';
import { useScrollLock } from '../../hooks/useScrollLock';

const DioGenioBarrel = () => {
  const [currentView, setCurrentView] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [currentQuote, setCurrentQuote] = useState("");
  const [quoteVisible, setQuoteVisible] = useState(true);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [scrollLock, setScrollLock] = useState(false); // This will be controlled by onMouseEnter/onMouseLeave
  const [scrollProgress, setScrollProgress] = useState(0);
  useScrollLock(scrollLock); // useScrollLock will react to changes in the scrollLock state
  const containerRef = useRef<HTMLDivElement>(null);
  const barrelRef = useRef<HTMLDivElement>(null);
  
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
  
  // Enhanced touch handler
  const handleTouchStart = (e: TouchEvent) => {
    if (animating) return;
    // Prevent default only if the event target is the barrel or its children
    if (barrelRef.current?.contains(e.target as Node)) {
      e.preventDefault();
      e.stopPropagation();
      // setScrollLock(true); // Scroll lock is now primarily managed by onMouseEnter/Leave
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (animating) return;
    if (barrelRef.current?.contains(e.target as Node)) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  
  // Enhanced Keyboard navigation for scroll prevention
  const handleEnhancedKeyDown = (e: KeyboardEvent) => { // Renamed to avoid conflict with existing handleKeyDown if any
    // Original keyboard navigation for perspective change
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      const newView = currentView === 4 ? 0 : currentView + 1;
      if (newView !== currentView) {
        changePerspective(newView);
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      const newView = currentView === 0 ? 4 : currentView - 1;
      if (newView !== currentView) {
        changePerspective(newView);
      }
    }

    // Scroll prevention for relevant keys when barrel is focused or mouse is over
    if (isMouseOver || document.activeElement === barrelRef.current) {
      if (['Space', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.code)) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  };

  // Handle wheel events (scroll) directly on the barrel component
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (animating) return;
    
    // Prevent default scrolling behavior
    e.preventDefault();
    e.stopPropagation();
    // setScrollLock(true); // Scroll lock is now primarily managed by onMouseEnter/Leave
    
    // Track scroll progress (optional, if used for visual feedback or other logic)
    setScrollProgress(prev => {
      const newProgress = prev + e.deltaY * 0.001; // Adjust sensitivity
      return Math.max(0, Math.min(1, newProgress));
    });
    
    // Determine scroll direction
    const scrollingDown = e.deltaY > 0;
    
    // Calculate next perspective with looping
    let newIndex;
    if (scrollingDown) {
      // If scrolling down at the end, loop to the beginning
      newIndex = currentView === 4 ? 0 : currentView + 1;
    } else {
      // If scrolling up at the beginning, loop to the end
      newIndex = currentView === 0 ? 4 : currentView - 1;
    }
    
    // Only change if it's a new perspective
    if (newIndex !== currentView) {
      changePerspective(newIndex);
    }
  };
  
  // Handle native wheel events
  const handleNativeWheel = (e: WheelEvent) => {
    if (animating) return;
    
    // Prevent default scrolling behavior
    e.preventDefault();
    e.stopPropagation();
    
    // Determine scroll direction
    const scrollingDown = e.deltaY > 0;
    
    // Calculate next perspective with looping
    let newIndex;
    if (scrollingDown) {
      // If scrolling down at the end, loop to the beginning
      newIndex = currentView === 4 ? 0 : currentView + 1;
    } else {
      // If scrolling up at the beginning, loop to the end
      newIndex = currentView === 0 ? 4 : currentView - 1;
    }
    
    // Only change if it's a new perspective
    if (newIndex !== currentView) {
      changePerspective(newIndex);
    }
  };
  
  // Handle smooth perspective changes with animation
  const changePerspective = (index) => {
    if (index === currentView || animating) return;
    
    setAnimating(true);
    setQuoteVisible(false); // Start fading out quote

    // Update current view and quote. The CSS transition on barrelRef will handle the visual change.
    setCurrentView(index); 
    setCurrentQuote(quotes[index]);

    // Synchronize quote visibility with barrel animation
    // Assuming barrel animation is around 600ms (from getBarrelStyle)
    // Fade in quote slightly after barrel starts moving, and ensure animation state is cleared after all transitions
    setTimeout(() => {
      setQuoteVisible(true);
    }, 150); // Start fading quote in a bit into the barrel animation

    setTimeout(() => {
      setAnimating(false);
    }, 600); // Duration of the barrel's transform transition
  };
  
  // Handle mouse movement for barrel interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!barrelRef.current) return;
    
    const rect = barrelRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x, y });
    
    // Handle dragging for perspective changes with looping
    if (dragging) {
      const deltaX = e.clientX - dragStart.x;
      
      // Determine if we should change perspective based on drag distance
      if (Math.abs(deltaX) > 70) {
        // Determine direction of drag
        const direction = deltaX > 0 ? -1 : 1;
        
        // Calculate new view with looping
        let newView;
        if (direction === 1) { // Moving forward
          newView = currentView === 4 ? 0 : currentView + 1;
        } else { // Moving backward
          newView = currentView === 0 ? 4 : currentView - 1;
        }
        
        if (newView !== currentView) {
          changePerspective(newView);
          setDragStart({ x: e.clientX, y: e.clientY });
        }
      }
    }
  };
  
  // Mouse drag handling
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    if (barrelRef.current) {
      barrelRef.current.style.cursor = 'grabbing';
    }
  };
  
  const handleMouseUp = () => {
    setDragging(false);
    if (barrelRef.current) {
      barrelRef.current.style.cursor = 'grab';
    }
  };
  
  // Control scrollLock state based on mouse enter/leave for the main interactive area
  useEffect(() => {
    setScrollLock(isMouseOver);
  }, [isMouseOver]);

  // Keyboard navigation and wheel events
  useEffect(() => {
    const barrelElement = barrelRef.current;

    // Specific event listeners for the barrel element
    if (barrelElement) {
      // Native wheel listener on the barrel itself
      barrelElement.addEventListener('wheel', handleNativeWheel, { passive: false, capture: true });
      // Touch listeners on the barrel
      barrelElement.addEventListener('touchstart', handleTouchStart, { passive: false });
      barrelElement.addEventListener('touchmove', handleTouchMove, { passive: false });
    }
    
    // Global listeners that might affect dragging or keyboard interaction
    document.addEventListener('mouseup', handleMouseUp);
    // document.addEventListener('mouseleave', handleMouseUp); // This might be too aggressive if mouse leaves window
    document.addEventListener('keydown', handleEnhancedKeyDown, { capture: true }); 
    
    if (barrelElement) {
      barrelElement.tabIndex = 0; 
    }
    
    return () => {
      if (barrelElement) {
        barrelElement.removeEventListener('wheel', handleNativeWheel, { capture: true });
        barrelElement.removeEventListener('touchstart', handleTouchStart);
        barrelElement.removeEventListener('touchmove', handleTouchMove);
      }
      document.removeEventListener('mouseup', handleMouseUp);
      // document.removeEventListener('mouseleave', handleMouseUp);
      document.removeEventListener('keydown', handleEnhancedKeyDown, { capture: true });
    };
  }, [currentView, animating, isMouseOver]); // isMouseOver dependency ensures keydown listener context is correct
  
  // Get dynamic transform for barrel based on current view and mouse position
  const getBarrelStyle = () => {
    // Base style with 3D transform
    const style = {
      // Adjusted cubic-bezier for a slightly smoother start and end, and potentially faster overall feel
      transition: dragging ? 'none' : 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
      transformOrigin: '50% 50%',
      transform: 'rotateX(0deg) rotateY(0deg)'
    };
    
    // Calculate mouse influence (subtle rotation based on mouse position)
    // Reduced multiplier for less exaggerated movement, making it feel more direct
    const mouseInfluenceX = (mousePosition.x - 0.5) * 10; // Reduced from 15
    const mouseInfluenceY = (mousePosition.y - 0.5) * 10; // Reduced from 15
    
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
    
    // Calculate mouse influence on light position - make it more direct
    // The mousePosition.x and mousePosition.y are already normalized (0 to 1)
    // So, we can use them more directly to set top/left percentages.
    const lightX = mousePosition.x * 100;
    const lightY = mousePosition.y * 100;
        
    const top = `${lightY}%`;
    const left = `${lightX}%`;
    
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
        position: 'absolute' as const,
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: `radial-gradient(circle, rgba(255,248,220,${adjustedIntensity}) 0%, rgba(255,248,220,${adjustedIntensity * 0.4}) 40%, rgba(255,248,220,0) 70%)`,
        top,
        left,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none' as const,
        transition: dragging ? 'none' : 'all 0.4s ease',
        zIndex: 1,
        mixBlendMode: 'screen' as const
      },
      secondary: {
        position: 'absolute' as const,
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        background: `radial-gradient(circle, rgba(255,230,180,${adjustedIntensity * 0.8}) 0%, rgba(255,230,180,${adjustedIntensity * 0.3}) 50%, rgba(255,230,180,0) 80%)`,
        top,
        left,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none' as const,
        transition: dragging ? 'none' : 'all 0.4s ease',
        zIndex: 2,
        mixBlendMode: 'screen' as const,
        filter: 'blur(4px)'
      },
      core: {
        position: 'absolute' as const,
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        background: `radial-gradient(circle, rgba(255,255,255,${adjustedIntensity}) 0%, rgba(255,248,220,${adjustedIntensity * 0.8}) 50%, rgba(255,230,180,0) 100%)`,
        top,
        left,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none' as const,
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
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '40px 20px',
        minHeight: '100vh',
        fontFamily: 'serif'
      }}
    >
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 'normal',
          letterSpacing: '0.15em',
          margin: 0
        }}>
          DIOGENIO
        </h1>
      </header>
      
      {/* Barrel container */}
      <div 
        style={{
          height: '600px',
          position: 'relative',
          marginBottom: '3rem'
        }}
      >
        {/* Interactive barrel area */}
        <div
          style={{
            height: '100%',
            width: '100%',
            position: 'relative'
          }}
          onWheel={handleWheel}
        >
          {/* Barrel component */}
          <div 
            ref={barrelRef}
            style={{
              height: '500px',
              position: 'relative',
              perspective: '800px',
              cursor: getCursorStyle(),
              outline: 'none'
            }}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            tabIndex={0}
          >
            {/* Enhanced light effects */}
            <div style={lightStyle.primary} />
            <div style={lightStyle.secondary} />
            <div style={lightStyle.core} />
            
            {/* 3D Barrel */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              perspective: '1000px'
            }}>
              {/* Barrel container with 3D transforms */}
              <div style={{
                width: '300px',
                height: '400px',
                position: 'relative',
                transformStyle: 'preserve-3d',
                ...getBarrelStyle()
              }}>
                {/* Barrel visualization */}
                {currentView === 0 && (
                  <div className="side-view" style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    {/* Top ellipse */}
                    <div style={{ 
                      width: '100%', 
                      height: '80px', 
                      borderRadius: '50%', 
                      border: '2px solid #000',
                      backgroundColor: 'rgba(245, 240, 230, 0.2)'
                    }} />
                    
                    {/* Barrel body */}
                    <div style={{
                      position: 'absolute',
                      top: '40px',
                      left: 0,
                      width: '100%',
                      height: 'calc(100% - 80px)',
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}>
                      {/* Left side */}
                      <div style={{ width: '2px', height: '100%', backgroundColor: '#000' }} />
                      
                      {/* Staves */}
                      <div style={{ width: '1px', height: '100%', backgroundColor: '#000', opacity: 0.7 }} />
                      <div style={{ width: '1px', height: '100%', backgroundColor: '#000', opacity: 0.7 }} />
                      <div style={{ width: '1px', height: '100%', backgroundColor: '#000', opacity: 0.7 }} />
                      <div style={{ width: '1px', height: '100%', backgroundColor: '#000', opacity: 0.7 }} />
                      <div style={{ width: '1px', height: '100%', backgroundColor: '#000', opacity: 0.7 }} />
                      
                      {/* Right side */}
                      <div style={{ width: '2px', height: '100%', backgroundColor: '#000' }} />
                    </div>
                    
                    {/* Hoops */}
                    <div style={{
                      position: 'absolute',
                      top: '25%',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#000'
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#000'
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: '75%',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#000'
                    }} />
                    
                    {/* Bottom ellipse */}
                    <div style={{ 
                      width: '100%', 
                      height: '80px', 
                      borderRadius: '50%', 
                      border: '2px solid #000',
                      backgroundColor: 'rgba(245, 240, 230, 0.2)'
                    }} />
                  </div>
                )}
                
                {currentView === 1 && (
                  <div className="top-view" style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <div style={{ 
                      width: '280px', 
                      height: '200px', 
                      borderRadius: '50%', 
                      border: '2px solid #000',
                      backgroundColor: 'rgba(245, 240, 230, 0.2)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <div style={{ 
                        width: '200px', 
                        height: '140px', 
                        borderRadius: '50%', 
                        border: '1.5px solid #000'
                      }} />
                    </div>
                    
                    {/* Staves */}
                    <div style={{
                      position: 'absolute',
                      width: '2px',
                      height: '200px',
                      backgroundColor: '#000',
                      transform: 'rotate(0deg)'
                    }} />
                    <div style={{
                      position: 'absolute',
                      width: '2px',
                      height: '200px',
                      backgroundColor: '#000',
                      transform: 'rotate(45deg)'
                    }} />
                    <div style={{
                      position: 'absolute',
                      width: '2px',
                      height: '200px',
                      backgroundColor: '#000',
                      transform: 'rotate(90deg)'
                    }} />
                    <div style={{
                      position: 'absolute',
                      width: '2px',
                      height: '200px',
                      backgroundColor: '#000',
                      transform: 'rotate(135deg)'
                    }} />
                  </div>
                )}
                
                {currentView === 2 && (
                  <div className="interior-view" style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    {/* Top ellipse */}
                    <div style={{ 
                      width: '100%', 
                      height: '80px', 
                      borderRadius: '50%', 
                      border: '2px solid #000',
                      backgroundColor: 'rgba(245, 240, 230, 0.2)'
                    }} />
                    
                    {/* Barrel body */}
                    <div style={{
                      position: 'absolute',
                      top: '40px',
                      left: 0,
                      width: '100%',
                      height: 'calc(100% - 80px)',
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{ width: '2px', height: '100%', backgroundColor: '#000' }} />
                      <div style={{ width: '2px', height: '100%', backgroundColor: '#000' }} />
                    </div>
                    
                    {/* Interior cutaway */}
                    <div style={{
                      position: 'absolute',
                      top: '80px',
                      left: '60px',
                      width: '180px',
                      height: 'calc(100% - 160px)',
                      backgroundColor: 'rgba(245, 240, 230, 0.3)',
                      borderLeft: '1px solid #000',
                      borderRight: '1px solid #000'
                    }} />
                    
                    {/* Bottom ellipse */}
                    <div style={{ 
                      width: '100%', 
                      height: '80px', 
                      borderRadius: '50%', 
                      border: '2px solid #000',
                      backgroundColor: 'rgba(245, 240, 230, 0.2)'
                    }} />
                  </div>
                )}
                
                {currentView === 3 && (
                  <div className="cutaway-view" style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    {/* Top ellipse */}
                    <div style={{ 
                      width: '100%', 
                      height: '80px', 
                      borderRadius: '50%', 
                      border: '2px solid #000',
                      backgroundColor: 'rgba(245, 240, 230, 0.2)'
                    }} />
                    
                    {/* Barrel body */}
                    <div style={{
                      position: 'absolute',
                      top: '40px',
                      left: 0,
                      width: '100%',
                      height: 'calc(100% - 80px)',
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{ width: '2px', height: '100%', backgroundColor: '#000' }} />
                      <div style={{ width: '2px', height: '100%', backgroundColor: '#000' }} />
                    </div>
                    
                    {/* Cutaway section */}
                    <div style={{
                      position: 'absolute',
                      top: '80px',
                      right: '0',
                      width: '150px',
                      height: 'calc(100% - 160px)',
                      backgroundColor: 'rgba(245, 240, 230, 0.3)',
                      borderLeft: '1px solid #000',
                      borderStyle: 'dashed',
                      borderWidth: '0 0 0 1px'
                    }} />
                    
                    {/* Vertical divider */}
                    <div style={{
                      position: 'absolute',
                      top: '40px',
                      left: '50%',
                      width: '1px',
                      height: 'calc(100% - 80px)',
                      backgroundColor: '#000'
                    }} />
                    
                    {/* Bottom ellipse */}
                    <div style={{ 
                      width: '100%', 
                      height: '80px', 
                      borderRadius: '50%', 
                      border: '2px solid #000',
                      backgroundColor: 'rgba(245, 240, 230, 0.2)'
                    }} />
                  </div>
                )}
                
                {currentView === 4 && (
                  <div className="portal-view" style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    {/* Top ellipse */}
                    <div style={{ 
                      width: '100%', 
                      height: '80px', 
                      borderRadius: '50%', 
                      border: '2px solid #000',
                      backgroundColor: 'rgba(245, 240, 230, 0.2)'
                    }} />
                    
                    {/* Barrel body */}
                    <div style={{
                      position: 'absolute',
                      top: '40px',
                      left: 0,
                      width: '100%',
                      height: 'calc(100% - 80px)',
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{ width: '2px', height: '100%', backgroundColor: '#000' }} />
                      <div style={{ width: '2px', height: '100%', backgroundColor: '#000' }} />
                    </div>
                    
                    {/* Hoops */}
                    <div style={{
                      position: 'absolute',
                      top: '25%',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#000'
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#000'
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: '75%',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#000'
                    }} />
                    
                    {/* Doorway */}
                    <div style={{
                      position: 'absolute',
                      bottom: '80px',
                      left: '120px',
                      width: '60px',
                      height: '100px',
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                      border: '1.5px solid #000',
                      borderBottom: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      alignItems: 'center'
                    }}>
                      <div style={{ width: '1px', height: '100px', backgroundColor: '#000', opacity: 0.5 }} />
                    </div>
                    
                    {/* Bottom ellipse */}
                    <div style={{ 
                      width: '100%', 
                      height: '80px', 
                      borderRadius: '50%', 
                      border: '2px solid #000',
                      backgroundColor: 'rgba(245, 240, 230, 0.2)'
                    }} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quote with smooth transitions */}
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <p style={{
          fontSize: '2rem',
          fontStyle: 'italic',
          lineHeight: 1.4,
          margin: 0,
          opacity: quoteVisible ? 1 : 0,
          transform: `translateY(${quoteVisible ? 0 : '10px'})`,
          transition: 'opacity 0.4s ease, transform 0.4s ease'
        }}>
          "{currentQuote}"
        </p>
      </div>
      
      {/* CTA Button - final view only */}
      {currentView === 4 && (
        <div style={{
          textAlign: 'center',
          opacity: animating ? 0 : 1,
          transition: 'opacity 0.5s ease'
        }}>
          <button
            onClick={() => alert('Stepping inside...')}
            style={{
              padding: '12px 40px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              fontSize: '1rem',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              const target = e.target as HTMLButtonElement;
              target.style.transform = 'translateY(-2px)';
              target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              const target = e.target as HTMLButtonElement;
              target.style.transform = 'translateY(0)';
              target.style.boxShadow = 'none';
            }}
          >
            STEP INSIDE
          </button>
        </div>
      )}
    </div>
  );
};

export default DioGenioBarrel;
