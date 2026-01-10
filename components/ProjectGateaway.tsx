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

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { PROJECTS } from '../data/projects';

// --- LAYOUT SYSTEMS CONFIGURATION ---

// Each system defines a set of "Safe Zones" (x, y percentages) where cards can live without overlapping.
// We randomly pick ONE system on mount.

const DESKTOP_SYSTEMS = [
    // System 1: The Classic Grid (3x2)
    [
        { x: 20, y: 25 }, { x: 50, y: 25 }, { x: 80, y: 25 },
        { x: 20, y: 75 }, { x: 50, y: 75 }, { x: 80, y: 75 }
    ],
    // System 2: The "W" Formation (Zig-Zag)
    [
        { x: 15, y: 20 }, { x: 35, y: 80 }, { x: 50, y: 20 }, 
        { x: 65, y: 80 }, { x: 85, y: 20 }, { x: 50, y: 55 }
    ],
    // System 3: The Peripheral Ring (Open Center)
    [
        { x: 15, y: 30 }, { x: 50, y: 15 }, { x: 85, y: 30 },
        { x: 15, y: 70 }, { x: 50, y: 85 }, { x: 85, y: 70 }
    ],
    // System 4: Asymmetric Scatter
    [
        { x: 20, y: 20 }, { x: 60, y: 30 }, { x: 90, y: 20 },
        { x: 30, y: 70 }, { x: 70, y: 80 }, { x: 10, y: 50 }
    ]
];

const MOBILE_SYSTEMS = [
    // System 1: Vertical Stack
    [
        { x: 50, y: 20 },
        { x: 50, y: 50 },
        { x: 50, y: 80 }
    ],
    // System 2: Alternating
    [
        { x: 30, y: 20 },
        { x: 70, y: 50 },
        { x: 30, y: 80 }
    ]
];

// Utility to shuffle array using Fisher-Yates algorithm
const shuffle = <T,>(array: T[]): T[] => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
};

export const ProjectGateway: React.FC = () => {
    const navigate = useNavigate();
    const sectionRef = useRef<HTMLElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile layout to adjust card count
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile(); // Initial check
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Generate cards using the Multi-System Engine
    const bgCards = useMemo(() => {
        // 1. Determine Count & Available Systems
        const count = isMobile ? 3 : 6;
        const availableSystems = isMobile ? MOBILE_SYSTEMS : DESKTOP_SYSTEMS;

        // 2. RANDOMLY SELECT ONE SYSTEM
        // This is the core of the "Hidden Slot System" logic.
        const randomIndex = Math.floor(Math.random() * availableSystems.length);
        const selectedSystem = availableSystems[randomIndex];
        
        // 3. Select Random Projects
        // Shuffle the full list and take the first N items needed for the slots
        const selectedProjects = shuffle(PROJECTS).slice(0, count);

        // 4. Shuffle the slots themselves
        // This ensures that even if we pick "System 1", Project A doesn't always go to Top-Left.
        const shuffledSlots = shuffle(selectedSystem);

        return selectedProjects.map((project, i) => {
            // Assign a random slot from the CHOSEN system
            const slot = shuffledSlots[i] || selectedSystem[0];
            
            // 5. Add "Jitter" (Random Offset within the safe slot)
            // Keeps it organic while respecting the non-overlapping system structure
            const xJitter = (Math.random() * 10) - 5; // +/- 5%
            const yJitter = (Math.random() * 10) - 5;  // +/- 5%

            return {
                id: project.id,
                image: project.image,
                // Clamp values to keep inside container
                top: Math.max(10, Math.min(90, slot.y + yJitter)),
                left: Math.max(10, Math.min(90, slot.x + xJitter)),
                rotation: Math.random() * 30 - 15, // -15deg to +15deg
                scale: Math.random() * 0.2 + 0.8,  // 0.8 to 1.0 scale
            };
        });
    }, [isMobile]); // Re-calculate when switching between mobile/desktop

    useEffect(() => {
        // Animate the background cards to float gently
        const ctx = gsap.context(() => {
            gsap.to('.gateway-bg-card', {
                y: "random(-15, 15)",
                rotation: "random(-5, 5)", // Add slight rotation drift
                duration: "random(3, 6)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.1
            });
        }, sectionRef);
        return () => ctx.revert();
    }, [bgCards]);

    const handleMouseEnter = () => {
        // Speed up the grid animation
        if (sectionRef.current) {
            sectionRef.current.style.setProperty('--grid-speed', '0.8s');
        }
        // Glitch/Expand text effect
        gsap.to('.gateway-title', { 
            letterSpacing: '10px', 
            color: '#00f3ff', 
            textShadow: '0 0 20px rgba(0,243,255,0.8)',
            duration: 0.4,
            ease: "power2.out"
        });
        gsap.to('.gateway-line', { width: '150px', background: '#fff', duration: 0.4 });
        
        // Make cards more visible on hover (peek effect)
        gsap.to('.gateway-bg-card', { 
            opacity: 0.6, 
            filter: 'blur(1px) brightness(0.8)', 
            duration: 0.5 
        });
    };

    const handleMouseLeave = () => {
        // Slow down grid
        if (sectionRef.current) {
            sectionRef.current.style.setProperty('--grid-speed', '4s');
        }
        // Reset text
        gsap.to('.gateway-title', { 
            letterSpacing: '2px', 
            color: '#ffffff', 
            textShadow: '0 0 0px rgba(0,0,0,0)',
            duration: 0.4,
            ease: "power2.out"
        });
        gsap.to('.gateway-line', { width: '50px', background: '#00f3ff', duration: 0.4 });

        // Reset cards to background state
        gsap.to('.gateway-bg-card', { 
            opacity: 0.3, 
            filter: 'blur(4px) brightness(0.5)', 
            duration: 0.5 
        });
    };

    const handleClick = () => {
        navigate('/projects');
        window.scrollTo(0, 0);
    }

    return (
        <section 
            ref={sectionRef}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                position: 'relative',
                height: '500px', // Substantial height for visual impact
                background: '#020205',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                cursor: 'pointer',
                perspective: '1000px', // Creates 3D depth for children
                borderTop: '1px solid rgba(255,255,255,0.1)',
                '--grid-speed': '4s'
            } as React.CSSProperties}
        >
            {/* 3D Grid Floor (Bottom) */}
            <div className="gateway-grid floor"></div>
            
            {/* 3D Grid Ceiling (Top) */}
            <div className="gateway-grid ceiling"></div>

            {/* Background Floating Blurred Cards */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1, // Above grid, below content
                pointerEvents: 'none'
            }}>
                {bgCards.map((card, i) => (
                    <div 
                        key={`${card.id}-${i}`} // Composite key for safety
                        className="gateway-bg-card"
                        style={{
                            position: 'absolute',
                            top: `${card.top}%`,
                            left: `${card.left}%`,
                            width: '220px',
                            height: '150px',
                            // Combine layout transform with animation transform via GSAP later
                            transform: `translate(-50%, -50%) rotate(${card.rotation}deg) scale(${card.scale})`,
                            borderRadius: '12px',
                            background: `url(${card.image}) center/cover no-repeat`,
                            opacity: 0.3, // Subtle visibility
                            filter: `blur(4px) brightness(0.5)`, // Blurry and dark initially
                            boxShadow: '0 0 30px rgba(0,0,0,0.8)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    />
                ))}
            </div>

            {/* Central Content */}
            <div style={{ zIndex: 10, textAlign: 'center', mixBlendMode: 'normal' }}>
                <h2 className="gateway-title" style={{
                    fontFamily: 'Orbitron',
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    fontWeight: 900,
                    color: '#fff',
                    textTransform: 'uppercase',
                    margin: 0,
                    letterSpacing: '2px',
                    transition: 'all 0.3s', // CSS transition for properties not handled by GSAP
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    // Add text shadow to separate from background cards
                    textShadow: '0 0 30px rgba(0,0,0,0.8)' 
                }}>
                    PROJECTS
                </h2>
                
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    marginTop: '20px'
                }}>
                    <div className="gateway-line" style={{ height: '2px', width: '50px', background: '#00f3ff' }}></div>
                    <p style={{
                        fontFamily: 'Orbitron',
                        color: '#00f3ff',
                        letterSpacing: '4px',
                        fontSize: '0.9rem',
                        margin: 0,
                        fontWeight: 600,
                        background: 'rgba(0,0,0,0.6)', // Slight background for readability
                        padding: '5px 10px',
                        borderRadius: '4px'
                    }}>
                        INITIALIZE ARCHIVE // UPLINK READY
                    </p>
                    <div className="gateway-line" style={{ height: '2px', width: '50px', background: '#00f3ff' }}></div>
                </div>
            </div>

            {/* Vignette Overlay for depth perception */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'radial-gradient(circle, transparent 30%, #020205 90%)',
                pointerEvents: 'none',
                zIndex: 5
            }}></div>

            <style>{`
                .gateway-grid {
                    position: absolute;
                    left: -50%;
                    width: 200%;
                    height: 100%;
                    background-image: 
                        linear-gradient(rgba(0, 243, 255, 0.2) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 243, 255, 0.2) 1px, transparent 1px);
                    background-size: 60px 60px;
                    transform-style: preserve-3d;
                    animation: gridMove var(--grid-speed) linear infinite;
                    pointer-events: none;
                    opacity: 0.5; /* Slightly reduced opacity so cards show better */
                    z-index: 0;
                }
                
                .gateway-grid.floor {
                    bottom: 0;
                    transform: rotateX(75deg) translateY(20%);
                    transform-origin: bottom center;
                    mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%);
                    -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%);
                }

                .gateway-grid.ceiling {
                    top: 0;
                    transform: rotateX(-75deg) translateY(-20%);
                    transform-origin: top center;
                    mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, transparent 100%);
                    -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, transparent 100%);
                }

                @keyframes gridMove {
                    0% { background-position: 0 0; }
                    100% { background-position: 0 60px; }
                }
            `}</style>
        </section>
    );
};