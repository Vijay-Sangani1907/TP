/*
 *  --------------------------------------------------------------------------
 *   TECHFEST 2025 | OFFICIAL SOURCE CODE
 *  --------------------------------------------------------------------------
 *
 *   Designed & Developed by: The Lead Engineer
 *   
 *   "The best way to predict the future is to invent it."
 *
 *   (c) 2025 All Rights Reserved.
 *   Verified Signature: 0xDEV_AUTH_TOKEN_ACTIVE
 *  --------------------------------------------------------------------------
 */

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { EventModal } from './EventModal';

interface Event {
  id: number;
  title: string;
  time: string;
  location: string;
  speaker: string;
  image?: string;
  description?: string;
}

interface DaySectionProps {
  id: string;
  data: {
    title: string;
    theme: string;
    color: string;
    date: string; // Added date field to interface
    events: Event[];
  };
  onRegister?: () => void;
}

export const DaySection: React.FC<DaySectionProps> = ({ id, data, onRegister }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  
  // State for Modal
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Interaction Refs
  const touchStartX = useRef(0);
  const progressStart = useRef(0);
  const isDragging = useRef(false);
  
  // Ref for wheel/trackpad timeout management
  const wheelTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // [FIX] Create duplicates in React state/render cycle instead of DOM cloning
  // This ensures event listeners (onClick) work for all items, including the looped ones.
  const eventsToRender = [...data.events, ...data.events];

  useEffect(() => {
    if (!marqueeRef.current) return;
    
    // Infinite Marquee Animation
    const content = marqueeRef.current;
    
    // [FIX] Removed manual DOM cloning logic here as it breaks React event binding.
    // The items are now duplicated in the render method (eventsToRender).

    const ctx = gsap.context(() => {
        tweenRef.current = gsap.to(content, {
            xPercent: -50, // Moves half the width (which is exactly one set of events)
            duration: 35, // Slower duration for larger cards to be readable
            ease: "none",
            repeat: -1
        });
    }, marqueeRef);

    return () => ctx.revert();
  }, [data.events.length]);

  const handleControl = (direction: 'left' | 'right') => {
    if (!tweenRef.current) return;
    
    // Smoothly alter timeScale to fast-forward or reverse
    const targetScale = direction === 'left' ? -3 : 3; 
    
    gsap.to(tweenRef.current, {
        timeScale: targetScale,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
            // Return to normal speed
            gsap.to(tweenRef.current!, {
                timeScale: 1,
                duration: 1.5,
                ease: "power2.inOut"
            });
        }
    });
  };

  // --- Interaction Handlers ---

  const handleMouseEnter = () => {
    // Smooth pause
    if(tweenRef.current) {
        gsap.to(tweenRef.current, { timeScale: 0, duration: 0.5 });
    }
  };

  const handleMouseLeave = () => {
    // Smooth resume
    if(tweenRef.current) {
        gsap.to(tweenRef.current, { timeScale: 1, duration: 0.5 });
    }
  };

  // Handle Trackpad/Mouse Wheel Horizontal Scroll
  const handleWheel = (e: React.WheelEvent) => {
    if (!tweenRef.current || !marqueeRef.current) return;

    // Only engage if the horizontal scroll (deltaX) is dominant
    // This allows normal vertical page scrolling to happen without interference
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        
        const loopWidth = marqueeRef.current.scrollWidth / 2;
        const progressDelta = e.deltaX / loopWidth;
        
        const currentProg = tweenRef.current.progress();
        
        // Add delta and wrap the progress between 0 and 1
        let newProgress = currentProg + progressDelta;
        newProgress = newProgress - Math.floor(newProgress);
        
        // Update GSAP instantly
        tweenRef.current.progress(newProgress);
        
        // Pause auto-scroll while user is actively scrolling
        gsap.to(tweenRef.current, { timeScale: 0, duration: 0.1, overwrite: true });
        
        // Clear existing timeout
        if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
        
        // Resume auto-scroll after interaction stops (debounce)
        wheelTimeout.current = setTimeout(() => {
            if (tweenRef.current) {
                gsap.to(tweenRef.current, { timeScale: 1, duration: 0.5 });
            }
        }, 500);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!tweenRef.current) return;
    isDragging.current = false; // Reset drag flag
    touchStartX.current = e.touches[0].clientX;
    progressStart.current = tweenRef.current.progress();
    gsap.to(tweenRef.current, { timeScale: 0, duration: 0.2 }); // Quick pause
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!tweenRef.current || !marqueeRef.current) return;
    
    const deltaX = e.touches[0].clientX - touchStartX.current;
    
    // If moved significantly, consider it a drag
    if (Math.abs(deltaX) > 5) {
        isDragging.current = true;
    }

    // Calculate progress change based on width
    // content width is roughly 200% of visible due to cloning.
    // xPercent -50 represents one full cycle.
    const loopWidth = marqueeRef.current.scrollWidth / 2;
    const progressDelta = deltaX / loopWidth;
    
    // Invert delta because dragging left (negative) should move content left (advance progress)
    let newProgress = progressStart.current - progressDelta;
    
    // Wrap progress 0-1
    newProgress = newProgress - Math.floor(newProgress);

    tweenRef.current.progress(newProgress);
  };

  const handleTouchEnd = () => {
    // Resume
    if (tweenRef.current) {
        gsap.to(tweenRef.current, { timeScale: 1, duration: 0.5 });
    }
    // We don't reset isDragging here immediately to allow onClick to read it
    setTimeout(() => { isDragging.current = false; }, 100);
  };

  const handleEventClick = (event: Event) => {
      // If we were dragging (on touch), don't open modal
      if (isDragging.current) return;
      setSelectedEvent(event);
  };

  return (
    <section id={id} className="day-section">
      {/* Background Decor */}
      <div className="day-bg-glow" style={{ background: data.color }} />

      {/* Header Container - Full Width logic replacing .container */}
      <div className="header-full-width">
        
        {/* Header Wrapper: Text Left, Button Right */}
        <div className="day-header-wrapper">
            <div className="day-header-text">
                <h2 style={{ 
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                  color: 'transparent', 
                  WebkitTextStroke: `1px ${data.color}`, 
                  opacity: 0.8,
                  marginBottom: '0',
                  lineHeight: '1'
                }}>
                  {data.title.split(':')[0]}
                </h2>
                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#fff', marginTop: '5px', lineHeight: '1.2' }}>
                  {data.title.split(':')[1]}
                </h3>
                <p style={{ 
                    color: data.color, 
                    fontSize: '1.2rem', 
                    letterSpacing: '2px', 
                    textTransform: 'uppercase',
                    marginTop: '15px',
                    fontWeight: 600
                }}>
                  // {data.theme}
                </p>
            </div>

            <button 
                className="btn-ticket btn-register-day"
                onClick={onRegister}
                style={{
                     borderColor: data.color,
                     boxShadow: `0 0 15px ${data.color}40`,
                     '--btn-hover-color': data.color
                } as React.CSSProperties}
            >
                REGISTER NOW
            </button>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div 
        className="carousel-wrapper" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Controls - Desktop Only */}
        <div className="desktop-controls">
            <button 
                onClick={() => handleControl('left')}
                className="control-btn"
                style={{ borderColor: data.color }}
                aria-label="Reverse"
            >←</button>
             <button 
                onClick={() => handleControl('right')}
                className="control-btn"
                style={{ borderColor: data.color }}
                aria-label="Fast Forward"
            >→</button>
        </div>

        <div 
          ref={marqueeRef}
          className="marquee-track"
        >
          {/* [FIX] Render the doubled list in React directly */}
          {eventsToRender.map((event, i) => (
             <div 
                key={`${event.id}-${i}`} 
                className="event-card"
                onClick={() => handleEventClick(event)}
             >
                
                {/* Image Section */}
                <div className="event-image-container">
                    {event.image ? (
                        <img src={event.image} alt={event.title} loading="lazy" />
                    ) : (
                        <div style={{ width: '100%', height: '100%', background: '#222' }} />
                    )}
                    <div className="event-overlay"></div>
                </div>

                {/* Content Section */}
                <div className="event-details">
                    <div className="event-meta" style={{ color: data.color }}>
                         <span style={{ fontWeight: 'bold' }}>{event.time}</span>
                         <span style={{ width: '6px', height: '6px', background: data.color, borderRadius: '50%' }}></span>
                         <span style={{ textTransform: 'uppercase' }}>{event.location}</span>
                    </div>
                    
                    <h4 className="event-title">{event.title}</h4>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: 'auto' }}>
                        <div style={{ width: '30px', height: '30px', background: `linear-gradient(45deg, ${data.color}, #333)`, borderRadius: '50%' }}></div>
                        <span className="event-speaker">{event.speaker}</span>
                    </div>
                </div>

                {/* Decorative corner */}
                <div style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    width: '0',
                    height: '0',
                    borderStyle: 'solid',
                    borderWidth: '0 0 20px 20px',
                    borderColor: `transparent transparent ${data.color} transparent`,
                    opacity: 0.5
                }} />
             </div>
          ))}
        </div>
      </div>

      <EventModal 
        isOpen={!!selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
        event={selectedEvent} 
        themeColor={data.color}
        date={data.date}
        dayId={id}
      />
    </section>
  );
};