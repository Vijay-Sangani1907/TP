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

import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { DaySection } from './DaySection';
import { RoadmapSection } from './RoadmapSection';
import { ProjectGateway } from './ProjectGateaway';
import { SCHEDULE } from '../data/events';
import bgVideo from '../assests/Untitled design.mp4';

gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
    onOpenModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenModal }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const location = useLocation();

  // Handle incoming scroll requests from other pages (e.g. from /projects)
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
        const targetId = location.state.scrollTo;
        // Small timeout to allow DOM to settle
        setTimeout(() => {
            const element = document.querySelector(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
  }, [location]);

  // Handle Video Delay Logic
  useEffect(() => {
    let isMounted = true;
    const timer = setTimeout(() => {
        if (!isMounted) return;

        setShowVideo(true);
        // Start playing the video after 1.5 seconds
        if (videoRef.current) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(err => {
                    // Ignore AbortError or errors related to element removal which can happen in strict mode or rapid navigation
                    if (err.name === 'AbortError' || err.message.includes('removed')) {
                        return;
                    }
                    console.error("Video play failed:", err);
                });
            }
        }
    }, 1500);

    return () => {
        isMounted = false;
        clearTimeout(timer);
    };
  }, []);

  useLayoutEffect(() => {
      const ctx = gsap.context(() => {
          // 1. Intro Animation
          gsap.from('.hero-content > *', {
              y: 30,
              opacity: 0,
              stagger: 0.15,
              duration: 1.2,
              ease: "power3.out",
              delay: 0.2
          });

          // 2. Pin Hero Section (Locking effect)
          ScrollTrigger.create({
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              pin: true,
              pinSpacing: false, // Allows the next section (Roadmap) to slide over
              scrub: true
          });

      }, heroRef);

      return () => ctx.revert();
  }, []);

  const scrollToSchedule = () => {
    const roadmap = document.querySelector('.roadmap-section');
    if (roadmap) {
        roadmap.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        
        {/* Background Video Wrapper */}
        <div className="hero-video-wrapper">
            {/* Video Layer (Z-Index 0) */}
            <video 
                ref={videoRef}
                muted 
                loop 
                playsInline 
                // autoPlay removed to strictly follow "then start playing" logic
                className="hero-video"
                style={{ filter: 'brightness(0.6)' }}
            >
                <source src={bgVideo} type="video/mp4" />
            </video>
            
            {/* Image Layer (Z-Index 1) - Fades out after 1.5s */}
            <div style={{
                position: 'absolute',
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%',
                zIndex: 1,
                background: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat',
                opacity: showVideo ? 0 : 1,
                transition: 'opacity 1s ease-in-out',
                pointerEvents: 'none' // Ensures clicks go through to video/controls if needed
            }}></div>

            {/* Dark Overlay Layer (Z-Index 2) - Keeps text readable over both image and video */}
            <div className="hero-overlay" style={{ zIndex: 2 }}></div>
        </div>

        <div className="container hero-content">
            {/* 1. Date Pill */}
            <div className="hero-date">
                JANUARY 28TH-30TH, 2026
            </div>

            {/* 2. Event Name */}
            <h2 className="hero-subtitle">
                IEEE TECHITHON 2026
            </h2>

            {/* 3. Main Headline */}
            <h1 className="hero-title">
                FUTURE IS <br />
                <span className="text-neon-purple">LOADING...</span>
            </h1>

            {/* 4. Description */}
            <p className="hero-description">
                Join the world's most immersive tech experience.<br />
                Three days of AI, Metaverse, and Bio-Hacking conferences in a cyberpunk playground.
            </p>

            {/* 5. Button */}
            <button 
                className="btn-ticket btn-explore" 
                onClick={scrollToSchedule}>
                EXPLORE ROADMAP
            </button>
        </div>
        {/* MIRA-AI Logo */}
        <div style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            zIndex: 5,
            pointerEvents: 'none',
            mixBlendMode: 'plus-lighter'
        }}>
             <style>{`
                @keyframes miraGlitchStrong {
                    0% { transform: translate(0,0) skew(0deg); opacity: 0.8; filter: drop-shadow(0 0 5px rgba(0, 243, 255, 0.3)); }
                    
                    /* Phase 1: Sudden Shift Left */
                    75% { transform: translate(0,0) skew(0deg); opacity: 0.8; }
                    76% { transform: translate(-8px, 2px) skew(25deg); opacity: 1; filter: drop-shadow(-8px 0 15px rgba(0, 243, 255, 0.9)); }
                    
                    /* Phase 2: Shift Right & Opposite Skew */
                    78% { transform: translate(8px, -4px) skew(-25deg); opacity: 0.6; filter: drop-shadow(8px 0 15px rgba(188, 19, 254, 0.9)); }
                    
                    /* Phase 3: Vertical Jump & Scale */
                    80% { transform: translate(0, 6px) scale(1.15) skew(5deg); opacity: 0.9; filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.8)); }
                    
                    /* Phase 4: Compression */
                    82% { transform: scaleY(0.8) scaleX(1.1); opacity: 0.7; }
                    
                    /* Return to Normal with aftershocks */
                    85% { transform: translate(0,0) skew(0deg); opacity: 0.8; filter: drop-shadow(0 0 5px rgba(0, 243, 255, 0.3)); }
                    92% { transform: translate(2px, 0); }
                    94% { transform: translate(-2px, 0); }
                    100% { transform: translate(0,0); }
                }
            `}</style>
            <img 
                src="https://placehold.co/300x100/transparent/FFFFFF?text=MIRA-AI&font=orbitron" 
                alt="MIRA AI" 
                style={{ 
                    height: '75px', 
                    width: 'auto', 
                    animation: 'miraGlitchStrong 3s infinite linear'
                }}
            />
        </div>
      </section>

      {/* Roadmap Section */}
      <RoadmapSection />

      {/* Days Sections */}
      <div style={{ position: 'relative', zIndex: 3, background: 'var(--bg-dark)' }}>
        <DaySection id="day1" data={SCHEDULE.day1} onRegister={onOpenModal} />
        <DaySection id="day2" data={SCHEDULE.day2} onRegister={onOpenModal} />
        <DaySection id="day3" data={SCHEDULE.day3} onRegister={onOpenModal} />
      </div>

      {/* Project Gateway Section */}
      <ProjectGateway />
    </>
  );
};