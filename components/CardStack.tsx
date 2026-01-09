/*
 *  --------------------------------------------------------------------------
 *   TECHITHON 2026 | OFFICIAL SOURCE CODE
 *  --------------------------------------------------------------------------
 *
 *   Designed & Developed by: Vijay Sangani
 *   
 *   Contributors: Mayank Bhuvad, Shlok Nair, Yug Sawant
 *
 *   (c) 2026 All Rights Reserved.
 *  --------------------------------------------------------------------------
 */

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export interface CardData {
  id: string | number;
  title: string;
  subtitle: string;
  color: string;
  tag?: string;
  image?: string;
}

interface CardStackProps {
  items: CardData[];
  onCardClick?: (id: string | number) => void;
  scaleFactor?: number;
}

// Fixed dimensions for the internal card design
const CARD_HEIGHT = 380; 
const CARD_WIDTH = 350;  
const VERTICAL_OFFSET = 40; 
const SCALE_STEP = 0.05;

export const CardStack: React.FC<CardStackProps> = ({ items, onCardClick, scaleFactor = 1 }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Touch handling
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  // Auto-swap logic
  useEffect(() => {
    if (isPaused || items.length === 0) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, activeIdx, items.length]);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + items.length) % items.length);
  };

  // Mobile Swipe Logic
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Change to Horizontal Swipe for Card Swap to allow Vertical Scrolling
    // Logic: If horizontal movement is greater than vertical movement AND exceeds threshold
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) handleNext(); // Swipe Left -> Next
      else handlePrev();           // Swipe Right -> Prev
    }
    
    setTimeout(() => setIsPaused(false), 2000);
  };

  // GSAP Animation effect
  useEffect(() => {
    if (!wrapperRef.current || items.length === 0) return;
    
    const cards = wrapperRef.current.children;
    
    items.forEach((item, i) => {
      const relativeIndex = (i - activeIdx + items.length) % items.length;
      const cardEl = cards[i] as HTMLElement;
      
      if (!cardEl) return; // Safety check

      const isTop = relativeIndex === 0;
      const zIndex = items.length - relativeIndex;
      const opacity = relativeIndex > 2 ? 0 : 1 - (relativeIndex * 0.2);
      const yPos = relativeIndex * VERTICAL_OFFSET;
      const scale = 1 - (relativeIndex * SCALE_STEP);

      gsap.to(cardEl, {
        y: yPos,
        scale: scale,
        zIndex: zIndex,
        opacity: opacity,
        duration: 0.6,
        ease: "power3.out",
        transformOrigin: "center top",
        filter: isTop ? 'brightness(1.2)' : 'brightness(0.6)',
        boxShadow: isTop ? `0 10px 30px ${item.color}30` : 'none'
      });
    });

  }, [activeIdx, items]);

  // Calculate external wrapper size to occupy correct flow space
  const totalHeight = CARD_HEIGHT + (items.length * VERTICAL_OFFSET);
  
  return (
    // Outer Container for Layout Flow (Applies scale to dimensions)
    <div style={{
      width: CARD_WIDTH * scaleFactor,
      height: totalHeight * scaleFactor,
      position: 'relative',
      margin: '0 auto'
    }}>
      {/* Internal Container for Transform (Applies scale to visual) */}
      <div 
        ref={wrapperRef}
        className="card-stack"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: CARD_WIDTH,
          height: totalHeight,
          perspective: '1000px',
          transform: `scale(${scaleFactor}) skewY(-5deg) rotateY(5deg)`,
          transformOrigin: 'top left', // Scale from top-left to fit in the container
          transformStyle: 'preserve-3d',
          touchAction: 'pan-y' // Changed to allow vertical scrolling
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={() => onCardClick && onCardClick(items[activeIdx].id)}
      >
        {items.map((card, i) => (
          <div
            key={`${card.id}-${i}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: CARD_HEIGHT,
              background: `linear-gradient(135deg, rgba(20,20,30,0.95), rgba(5,5,10,0.98))`,
              border: `1px solid ${card.color}`,
              borderRadius: '16px',
              padding: '20px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backdropFilter: 'blur(10px)',
              willChange: 'transform, opacity',
              boxSizing: 'border-box'
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <span style={{ 
                background: card.color, 
                color: '#000', 
                padding: '4px 8px', 
                borderRadius: '4px', 
                fontSize: '10px', 
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}>
                {card.tag || 'EVENT'}
              </span>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: card.color, boxShadow: `0 0 8px ${card.color}` }} />
            </div>

            {/* Image */}
            {card.image && (
              <div style={{ 
                width: '100%', 
                height: '160px', 
                borderRadius: '8px', 
                overflow: 'hidden',
                marginBottom: '15px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <img 
                  src={card.image} 
                  alt={card.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            )}

            {/* Body */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h4 style={{ 
                fontSize: '1.4rem', 
                margin: '0 0 8px', 
                color: '#fff',
                lineHeight: 1.2
              }}>
                {card.title}
              </h4>
              <p style={{ 
                  color: '#aaa', 
                  fontSize: '0.9rem',
                  margin: 0,
                  lineHeight: 1.4
              }}>{card.subtitle}</p>
            </div>
            
            {/* Footer */}
            <div style={{ marginTop: '12px', width: '100%', height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ 
                  width: '60%', 
                  height: '100%', 
                  background: card.color 
              }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};