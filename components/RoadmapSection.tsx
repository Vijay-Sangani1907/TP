/*
 *  --------------------------------------------------------------------------
 *   TECHITHON 2026 | OFFICIAL SOURCE CODE
 *  --------------------------------------------------------------------------
 *
 *   Designed & Developed by: Vijay Sangani, Mayank Bhuvad, Shlok Nair, Yug Sawant
 *
 *   (c) 2026 All Rights Reserved.
 *  --------------------------------------------------------------------------
 */

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { CardStack, CardData } from './CardStack';
import { SCHEDULE } from '../data/events';

gsap.registerPlugin(ScrollTrigger);

// Explicitly define order to ensure Day 1, 2, 3 appear in sequence
const DAYS = [SCHEDULE.day1, SCHEDULE.day2, SCHEDULE.day3];

export const RoadmapSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const scrollToDay = (dayId: string) => {
    const el = document.getElementById(dayId);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Vertical Line Animation (Draws down)
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom bottom',
            scrub: 0.5,
          }
        }
      );

      // 2. Nodes Animation (Text & Stacks)
      const nodes = gsap.utils.toArray('.roadmap-node');
      
      nodes.forEach((node: any, i) => {
        const isLeft = i % 2 !== 0; // Index 0 (Right), Index 1 (Left), Index 2 (Right)
        
        const content = node.querySelector('.roadmap-text');
        const stack = node.querySelector('.roadmap-stack');
        
        // Ensure initial state is set to avoid FOUC
        gsap.set(content, { opacity: 0, x: isLeft ? 100 : -100 });
        gsap.set(stack, { opacity: 0, y: 100, scale: 0.8 });

        // Animate IN
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: node,
            start: 'top 80%', // Triggers earlier when scrolling down
            end: 'bottom 20%', // Stays active longer
            toggleActions: 'play reverse play reverse',
          }
        });

        // Text animation: Slide out from center
        tl.to(content, 
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
        )
        // Stack animation: Pop up
        .to(stack,
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.5)' },
          "-=0.6"
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]); // Re-run GSAP when layout changes

  return (
    <section ref={sectionRef} className="roadmap-section">
      <div className="container" style={{ position: 'relative' }}>
        
        {/* Sticky Title */}
        <h2 className="roadmap-title">
            EVENT ROADMAP
        </h2>

        {/* Central Vertical Line */}
        <div ref={lineRef} className="roadmap-line"></div>

        <div className="roadmap-nodes-container">
          {DAYS.map((day, index) => {
            const position = index % 2 === 0 ? 'right' : 'left'; 

            // Transform events to CardData
            const stackItems: CardData[] = day.events.map(ev => ({
                id: ev.id,
                title: ev.title,
                subtitle: ev.speaker,
                color: day.color,
                tag: ev.time,
                image: (ev as any).image // Cast to any or update interface if strictly typed, but here it flows from JS object
            }));

            // Smaller scale for mobile
            const cardScale = isMobile ? 0.7 : 1.0;

            return (
              <div key={day.id} className={`roadmap-node ${position}`}>
                
                {/* Center Marker on Line */}
                <div className="roadmap-marker" style={{ borderColor: day.color }}></div>

                {/* Left Side */}
                <div className={`roadmap-half left-half ${position === 'left' ? 'active' : ''}`}>
                  {position === 'left' && (
                    <div className="roadmap-content-wrapper">
                       <div className="roadmap-text" onClick={() => scrollToDay(day.id)}>
                            <h3 style={{ color: day.color, fontSize: '2.5rem' }}>{day.date}</h3>
                            <h4 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{day.title}</h4>
                            <p style={{ color: '#aaa' }}>{day.theme}</p>
                            <div className="roadmap-arrow">← VIEW DAY</div>
                       </div>
                       <div className="roadmap-stack">
                           <CardStack items={stackItems} onCardClick={() => scrollToDay(day.id)} scaleFactor={cardScale} />
                       </div>
                    </div>
                  )}
                </div>

                {/* Right Side */}
                <div className={`roadmap-half right-half ${position === 'right' ? 'active' : ''}`}>
                  {position === 'right' && (
                     <div className="roadmap-content-wrapper">
                        <div className="roadmap-text" onClick={() => scrollToDay(day.id)}>
                             <h3 style={{ color: day.color, fontSize: '2.5rem' }}>{day.date}</h3>
                             <h4 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{day.title}</h4>
                             <p style={{ color: '#aaa' }}>{day.theme}</p>
                             <div className="roadmap-arrow">VIEW DAY →</div>
                        </div>
                        <div className="roadmap-stack">
                            <CardStack items={stackItems} onCardClick={() => scrollToDay(day.id)} scaleFactor={cardScale} />
                        </div>
                     </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};