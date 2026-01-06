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

import React, { useRef, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { PROJECTS } from '../data/projects';

export const ProjectGateway: React.FC = () => {
    const navigate = useNavigate();
    const sectionRef = useRef<HTMLElement>(null);

    // Generate random positions for background cards once on mount
    const bgCards = useMemo(() => {
        // Use available projects (limit to 6 to avoid clutter)
        return PROJECTS.slice(0, 6).map((project, i) => ({
            id: project.id,
            image: project.image,
            // Random positions spread across the container
            top: Math.random() * 80 + 10, // 10% to 90%
            left: Math.random() * 90 + 5, // 5% to 95%
            rotation: Math.random() * 40 - 20, // -20deg to 20deg
            scale: Math.random() * 0.4 + 0.6, // 0.6 to 1.0
            blur: Math.random() * 2 + 2, // 2px to 4px
            depth: Math.random() * 20 // Parallax depth simulation
        }));
    }, []);

    useEffect(() => {
        // Animate the background cards to float gently
        const ctx = gsap.context(() => {
            gsap.to('.gateway-bg-card', {
                y: "random(-20, 20)",
                rotation: "random(-10, 10)",
                duration: "random(3, 6)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.5
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

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
        
        // Clear blur on cards slightly to peek at them? Or blur more?
        // Let's make them slightly more visible (less transparent) on hover
        gsap.to('.gateway-bg-card', { opacity: 0.6, filter: 'blur(1px) brightness(0.8)', duration: 0.5 });
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

        // Reset cards
        gsap.to('.gateway-bg-card', { opacity: 0.3, filter: 'blur(4px) brightness(0.5)', duration: 0.5 });
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
                        key={card.id}
                        className="gateway-bg-card"
                        style={{
                            position: 'absolute',
                            top: `${card.top}%`,
                            left: `${card.left}%`,
                            width: '220px',
                            height: '150px',
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