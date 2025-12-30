
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Event {
  id: number;
  title: string;
  time: string;
  speaker: string;
  image?: string;
}

interface DaySectionProps {
  id: string;
  data: {
    title: string;
    theme: string;
    color: string;
    events: Event[];
  };
  onRegister?: () => void;
}

export const DaySection: React.FC<DaySectionProps> = ({ id, data, onRegister }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  
  // Interaction Refs
  const touchStartX = useRef(0);
  const progressStart = useRef(0);

  useEffect(() => {
    if (!marqueeRef.current) return;
    
    // Infinite Marquee Animation
    const content = marqueeRef.current;
    
    // Clear potential duplicates from strict mode double-render
    if (content.children.length === data.events.length) {
       // Clone content for seamless loop
      const originalContent = Array.from(content.children) as HTMLElement[];
      originalContent.forEach(child => {
          const clone = child.cloneNode(true);
          content.appendChild(clone);
      });
    }

    const ctx = gsap.context(() => {
        tweenRef.current = gsap.to(content, {
            xPercent: -50,
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

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!tweenRef.current) return;
    touchStartX.current = e.touches[0].clientX;
    progressStart.current = tweenRef.current.progress();
    gsap.to(tweenRef.current, { timeScale: 0, duration: 0.2 }); // Quick pause
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!tweenRef.current || !marqueeRef.current) return;
    
    const deltaX = e.touches[0].clientX - touchStartX.current;
    
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
          {data.events.map((event, i) => (
             <div key={`${event.id}-${i}`} className="event-card">
                
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
                         <span>MAIN STAGE</span>
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
    </section>
  );
};
