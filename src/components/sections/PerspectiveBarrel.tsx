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
  const [allowPageScrollOverride, setAllowPageScrollOverride] = useState(false); // New state for page scroll override
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

    const scrollingDown = e.deltaY > 0;

    if (scrollingDown && currentView === 4) {
      setAllowPageScrollOverride(true);
      // Do not preventDefault or stopPropagation to allow page scroll
      // Do not changePerspective
      return; 
    }

    // If not scrolling down at the last view, or scrolling up, prevent page scroll and handle perspective change.
    e.preventDefault();
    e.stopPropagation();
    setAllowPageScrollOverride(false); // Ensure barrel regains scroll control

    setScrollProgress(prev => {
      const newProgress = prev + e.deltaY * 0.001; // Adjust sensitivity
      return Math.max(0, Math.min(1, newProgress));
    });

    let newIndex;
    if (scrollingDown) {
      newIndex = currentView + 1; // currentView will be < 4 here
    } else {
      // If scrolling up at the beginning, loop to the end
      newIndex = currentView === 0 ? 4 : currentView - 1;
    }

    if (newIndex !== currentView) {
      changePerspective(newIndex);
    }
  };
  
  // Handle native wheel events
  const handleNativeWheel = (e: WheelEvent) => {
    if (animating) return;

    const scrollingDown = e.deltaY > 0;

    if (scrollingDown && currentView === 4) {
      setAllowPageScrollOverride(true);
      // Do not preventDefault or stopPropagation to allow page scroll
      // Do not changePerspective
      return;
    }

    // If not scrolling down at the last view, or scrolling up, prevent page scroll and handle perspective change.
    e.preventDefault();
    e.stopPropagation();
    setAllowPageScrollOverride(false); // Ensure barrel regains scroll control
    
    let newIndex;
    if (scrollingDown) {
      newIndex = currentView + 1; // currentView will be < 4 here
    } else {
      // If scrolling up at the beginning, loop to the end
      newIndex = currentView === 0 ? 4 : currentView - 1;
    }
    
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
  
  // Control scrollLock state based on mouse enter/leave and override for the main interactive area
  useEffect(() => {
    if (allowPageScrollOverride) {
      setScrollLock(false); // Force scrollLock off if override is active
    } else {
      setScrollLock(isMouseOver); // Otherwise, base it on mouse presence
    }
  }, [isMouseOver, allowPageScrollOverride, setScrollLock]);

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
      transform: 'rotateX(0deg) rotateY(0deg)',
      willChange: 'transform' as const,
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

  // Subtle Atmospheric Light Effect
  const getLightStyle = () => {
    // Base style for the light
    const style = {
      position: 'absolute' as const,
      borderRadius: '50%',
      pointerEvents: 'none' as const,
      transition: 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Slower, smoother transition
      zIndex: 1, // Above background SVG, below Diogenes image and barrel visuals
      willChange: 'transform, opacity, background, width, height, filter' as const,
    };

    // Calculate a subtle shift based on mouse position, but greatly dampened
    const mouseInfluenceX = (mousePosition.x - 0.5) * 20; // Reduced influence
    const mouseInfluenceY = (mousePosition.y - 0.5) * 20; // Reduced influence

    let lightProps = {
      width: '400px',
      height: '400px',
      top: '50%',
      left: '50%',
      opacity: 0.1, // Very subtle base opacity
      background: `radial-gradient(circle, rgba(220, 200, 170, 0.2) 0%, rgba(220, 200, 170, 0) 70%)`, // Soft warm glow
      transform: `translate(-50%, -50%) translate(${mouseInfluenceX}px, ${mouseInfluenceY}px)`,
      filter: 'blur(50px)', // Softer blur
    };

    // Adjust slightly per view for thematic consistency
    switch (currentView) {
      case 0: // Side view
        lightProps.opacity = 0.08;
        lightProps.transform = `translate(-60%, -60%) translate(${mouseInfluenceX}px, ${mouseInfluenceY}px) scale(1.1)`;
        break;
      case 1: // Top view
        lightProps.top = '40%';
        lightProps.opacity = 0.07;
        lightProps.background = `radial-gradient(circle, rgba(200, 210, 220, 0.15) 0%, rgba(200, 210, 220, 0) 70%)`; // Cooler tone
        lightProps.transform = `translate(-50%, -50%) translate(${mouseInfluenceX}px, ${mouseInfluenceY * 0.5}px) scale(0.9)`;
        break;
      case 2: // Interior view
        lightProps.opacity = 0.12;
        lightProps.width = '450px';
        lightProps.height = '450px';
        lightProps.background = `radial-gradient(circle, rgba(230, 210, 180, 0.25) 0%, rgba(230, 210, 180, 0) 70%)`; // Slightly warmer/brighter
        lightProps.transform = `translate(-50%, -50%) translate(${mouseInfluenceX * 0.8}px, ${mouseInfluenceY * 0.8}px) scale(1.2)`;
        break;
      case 3: // Cutaway view
        lightProps.left = '40%';
        lightProps.opacity = 0.09;
        lightProps.transform = `translate(-50%, -50%) translate(${mouseInfluenceX}px, ${mouseInfluenceY}px) scale(1.0)`;
        break;
      case 4: // Portal view
        lightProps.opacity = 0.15;
        lightProps.width = '500px';
        lightProps.height = '500px';
        lightProps.background = `radial-gradient(circle, rgba(240, 220, 190, 0.3) 0%, rgba(240, 220, 190, 0) 65%)`; // More focused glow for portal
        lightProps.transform = `translate(-50%, -40%) translate(${mouseInfluenceX * 0.5}px, ${mouseInfluenceY * 0.5}px) scale(1.3)`;
        lightProps.filter = 'blur(60px)';
        break;
    }

    return { ...style, ...lightProps };
  };
  
  // Get dynamic style for Diogenes image based on current view
  const getDiogenesStyle = () => {
    const baseStyle = {
      position: 'absolute' as const,
      height: 'auto' as const,
      pointerEvents: 'none' as const,
      transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Match barrel transition
      maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' as const,
      WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' as const, // For Safari/Webkit
      willChange: 'transform, opacity, width' as const,
    };

    switch (currentView) {
      case 0: // Side view - subtly behind/around the barrel
        return {
          ...baseStyle,
          width: '70%',
          bottom: '5%',
          left: '50%',
          transform: 'translateX(-50%) translateZ(-80px)', // Further back
          opacity: 0.15,
          mixBlendMode: 'overlay' as const,
        };
      case 1: // Top view - inside, seen from top
        return {
          ...baseStyle,
          width: '35%',
          bottom: '25%', // Adjust to appear centered from top-down view
          left: '50%',
          transform: 'translateX(-50%) translateY(10%) rotateX(-75deg) translateZ(-5px)', // Oriented for top view
          opacity: 0.4,
          mixBlendMode: 'luminosity' as const,
        };
      case 2: // Interior view - prominent inside
        return {
          ...baseStyle,
          width: '60%',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%) translateZ(-20px)',
          opacity: 0.65,
          mixBlendMode: 'luminosity' as const,
        };
      case 3: // Cutaway view - partially visible in cutaway
        return {
          ...baseStyle,
          width: '50%',
          bottom: '12%',
          left: '35%', // Positioned to be seen in the cutaway
          transform: 'translateX(-50%) translateZ(-15px)',
          opacity: 0.5,
          mixBlendMode: 'luminosity' as const,
        };
      case 4: // Portal view - subtly through the portal
        return {
          ...baseStyle,
          width: '40%',
          bottom: '5%',
          left: '50%',
          transform: 'translateX(-50%) translateZ(20px)', // Slightly in front for portal effect
          opacity: 0.25,
          mixBlendMode: 'multiply' as const,
        };
      default:
        return { ...baseStyle, opacity: 0, width: '50%' }; // Default hidden
    }
  };
  
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
          height: '500px', // Reduced height
          position: 'relative',
          marginBottom: '1.5rem' // Reduced margin
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
              height: '400px', // Reduced height
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
            {/* Subtle background elements - More Elaborate and Wider */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0, 
              overflow: 'hidden',
              pointerEvents: 'none',
            }}>
              <svg width="100%" height="100%" viewBox="0 0 1600 600" preserveAspectRatio="xMidYMid meet" style={{ opacity: 0.1 }}>
                {/* ... existing SVG content ... */}
                {/* Far Left Columns */}
                <g transform="translate(-200, 0)">
                  <rect x="100" y="180" width="28" height="270" fill="none" stroke="#777" strokeWidth="1.25" />
                  <line x1="100" y1="180" x2="128" y2="180" stroke="#777" strokeWidth="1.75" />
                  <line x1="97" y1="176" x2="131" y2="176" stroke="#777" strokeWidth="1.25" />
                  <line x1="100" y1="450" x2="128" y2="450" stroke="#777" strokeWidth="1.75" />
                  <line x1="97" y1="454" x2="131" y2="454" stroke="#777" strokeWidth="1.25" />
                  <line x1="104" y1="180" x2="104" y2="450" stroke="#777" strokeWidth="0.6" />
                  <line x1="108" y1="180" x2="108" y2="450" stroke="#777" strokeWidth="0.6" />
                  <line x1="112" y1="180" x2="112" y2="450" stroke="#777" strokeWidth="0.6" />
                  <line x1="116" y1="180" x2="116" y2="450" stroke="#777" strokeWidth="0.6" />
                  <line x1="120" y1="180" x2="120" y2="450" stroke="#777" strokeWidth="0.6" />
                  <line x1="124" y1="180" x2="124" y2="450" stroke="#777" strokeWidth="0.6" />
                </g>
                <g transform="translate(-100, 20)">
                  <rect x="220" y="200" width="22" height="220" fill="none" stroke="#777" strokeWidth="1" />
                  <line x1="220" y1="200" x2="242" y2="200" stroke="#777" strokeWidth="1.5" />
                  <line x1="218" y1="197" x2="244" y2="197" stroke="#777" strokeWidth="1" />
                  <line x1="220" y1="420" x2="242" y2="420" stroke="#777" strokeWidth="1.5" />
                  <line x1="218" y1="423" x2="244" y2="423" stroke="#777" strokeWidth="1" />
                </g>

                {/* Original Left Columns (shifted and adjusted) */}
                <g transform="translate(50, 0)">
                  <rect x="100" y="150" width="30" height="300" fill="none" stroke="#777" strokeWidth="1.5" />
                  <line x1="100" y1="150" x2="130" y2="150" stroke="#777" strokeWidth="2" />
                  <line x1="95" y1="145" x2="135" y2="145" stroke="#777" strokeWidth="1.5" />
                  <line x1="100" y1="450" x2="130" y2="450" stroke="#777" strokeWidth="2" />
                  <line x1="95" y1="455" x2="135" y2="455" stroke="#777" strokeWidth="1.5" />
                  <line x1="105" y1="150" x2="105" y2="450" stroke="#777" strokeWidth="0.75" />
                  <line x1="110" y1="150" x2="110" y2="450" stroke="#777" strokeWidth="0.75" />
                  <line x1="115" y1="150" x2="115" y2="450" stroke="#777" strokeWidth="0.75" />
                  <line x1="120" y1="150" x2="120" y2="450" stroke="#777" strokeWidth="0.75" />
                  <line x1="125" y1="150" x2="125" y2="450" stroke="#777" strokeWidth="0.75" />
                </g>
                <g transform="translate(120, 0)">
                  <rect x="280" y="180" width="25" height="240" fill="none" stroke="#777" strokeWidth="1.5" />
                  <line x1="280" y1="180" x2="305" y2="180" stroke="#777" strokeWidth="2" />
                  <line x1="275" y1="175" x2="310" y2="175" stroke="#777" strokeWidth="1.5" />
                  <line x1="280" y1="420" x2="305" y2="420" stroke="#777" strokeWidth="2" />
                  <line x1="275" y1="425" x2="310" y2="425" stroke="#777" strokeWidth="1.5" />
                  <line x1="284" y1="180" x2="284" y2="420" stroke="#777" strokeWidth="0.75" />
                  <line x1="288" y1="180" x2="288" y2="420" stroke="#777" strokeWidth="0.75" />
                  <line x1="292" y1="180" x2="292" y2="420" stroke="#777" strokeWidth="0.75" />
                  <line x1="296" y1="180" x2="296" y2="420" stroke="#777" strokeWidth="0.75" />
                  <line x1="300" y1="180" x2="300" y2="420" stroke="#777" strokeWidth="0.75" />
                </g>

                {/* Central Distant Archway (adjusted) */}
                <g transform="translate(200, 0)">
                  <path d="M400 250 C 450 180, 550 180, 600 250" fill="none" stroke="#888" strokeWidth="1" />
                  <line x1="400" y1="250" x2="400" y2="420" stroke="#888" strokeWidth="1" />
                  <line x1="600" y1="250" x2="600" y2="420" stroke="#888" strokeWidth="1" />
                  {/* Hint of a further arch behind */}
                  <path d="M450 270 C 480 220, 520 220, 550 270" fill="none" stroke="#888" strokeWidth="0.75" strokeDasharray="3,3" />
                </g>

                {/* Original Right Columns (shifted and adjusted) */}
                <g transform="translate(300, 0)">
                  <rect x="700" y="180" width="25" height="240" fill="none" stroke="#777" strokeWidth="1.5" />
                  <line x1="700" y1="180" x2="725" y2="180" stroke="#777" strokeWidth="2" />
                  <line x1="695" y1="175" x2="730" y2="175" stroke="#777" strokeWidth="1.5" />
                  <line x1="700" y1="420" x2="725" y2="420" stroke="#777" strokeWidth="2" />
                  <line x1="695" y1="425" x2="730" y2="425" stroke="#777" strokeWidth="1.5" />
                  <line x1="704" y1="180" x2="704" y2="420" stroke="#777" strokeWidth="0.75" />
                  <line x1="708" y1="180" x2="708" y2="420" stroke="#777" strokeWidth="0.75" />
                  <line x1="712" y1="180" x2="712" y2="420" stroke="#777" strokeWidth="0.75" />
                  <line x1="716" y1="180" x2="716" y2="420" stroke="#777" strokeWidth="0.75" />
                  <line x1="720" y1="180" x2="720" y2="420" stroke="#777" strokeWidth="0.75" />
                </g>
                <g transform="translate(350, 0)">
                  <rect x="870" y="150" width="30" height="300" fill="none" stroke="#777" strokeWidth="1.5" />
                  <line x1="870" y1="150" x2="900" y2="150" stroke="#777" strokeWidth="2" />
                  <line x1="865" y1="145" x2="905" y2="145" stroke="#777" strokeWidth="1.5" />
                  <line x1="870" y1="450" x2="900" y2="450" stroke="#777" strokeWidth="2" />
                  <line x1="865" y1="455" x2="905" y2="455" stroke="#777" strokeWidth="1.5" />
                  <line x1="875" y1="150" x2="875" y2="450" stroke="#777" strokeWidth="0.75" />
                  <line x1="880" y1="150" x2="880" y2="450" stroke="#777" strokeWidth="0.75" />
                  <line x1="885" y1="150" x2="885" y2="450" stroke="#777" strokeWidth="0.75" />
                  <line x1="890" y1="150" x2="890" y2="450" stroke="#777" strokeWidth="0.75" />
                  <line x1="895" y1="150" x2="895" y2="450" stroke="#777" strokeWidth="0.75" />
                </g>

                {/* Far Right Columns */}
                <g transform="translate(500, 20)">
                  <rect x="980" y="200" width="22" height="220" fill="none" stroke="#777" strokeWidth="1" />
                  <line x1="980" y1="200" x2="1002" y2="200" stroke="#777" strokeWidth="1.5" />
                  <line x1="978" y1="197" x2="1004" y2="197" stroke="#777" strokeWidth="1" />
                  <line x1="980" y1="420" x2="1002" y2="420" stroke="#777" strokeWidth="1.5" />
                  <line x1="978" y1="423" x2="1004" y2="423" stroke="#777" strokeWidth="1" />
                </g>
                <g transform="translate(600, 0)">
                  <rect x="1050" y="180" width="28" height="270" fill="none" stroke="#777" strokeWidth="1.25" />
                  <line x1="1050" y1="180" x2="1078" y2="180" stroke="#777" strokeWidth="1.75" />
                  <line x1="1047" y1="176" x2="1081" y2="176" stroke="#777" strokeWidth="1.25" />
                  <line x1="1050" y1="450" x2="1078" y2="450" stroke="#777" strokeWidth="1.75" />
                  <line x1="1047" y1="454" x2="1081" y2="454" stroke="#777" strokeWidth="1.25" />
                  <line x1="1054" y1="180" x2="1054" y2="450" stroke="#777" strokeWidth="0.6" />
                  <line x1="1058" y1="180" x2="1058" y2="450" stroke="#777" strokeWidth="0.6" />
                  <line x1="1062" y1="180" x2="1062" y2="450" stroke="#777" strokeWidth="0.6" />
                  <line x1="1066" y1="180" x2="1066" y2="450" stroke="#777" strokeWidth="0.6" />
                  <line x1="1070" y1="180" x2="1070" y2="450" stroke="#777" strokeWidth="0.6" />
                  <line x1="1074" y1="180" x2="1074" y2="450" stroke="#777" strokeWidth="0.6" />
                </g>
                
                {/* Faint horizon line / distant low wall */}
                <line x1="0" y1="460" x2="1600" y2="460" stroke="#888" strokeWidth="0.75" strokeDasharray="5,5" />
                <line x1="0" y1="470" x2="1600" y2="470" stroke="#888" strokeWidth="0.5" strokeDasharray="2,3" />
              </svg>
            </div>
            
            {/* Subtle Atmospheric Light */}
            <div style={getLightStyle()} />

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
                {/* Diogenes Image - Always rendered, style changes per view */}
                <img 
                  src="/images/diogenes transparent bg.png" 
                  alt="Diogenes" 
                  style={getDiogenesStyle()}
                />

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
      
      {/* State Indicator Dots */}
      <div style={{
        textAlign: 'center',
        marginBottom: '1rem', // Reduced margin
        marginTop: '0.5rem', // Reduced margin
      }}>
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => changePerspective(index)}
            style={{
              height: '10px',
              width: '10px',
              borderRadius: '50%',
              backgroundColor: currentView === index ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.2)',
              border: 'none',
              margin: '0 5px',
              padding: 0,
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
              outline: 'none',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            aria-label={`Go to perspective ${index + 1}`}
          />
        ))}
      </div>

      {/* Quote with smooth transitions */}
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem', // Reduced margin
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
