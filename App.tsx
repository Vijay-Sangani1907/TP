
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { DaySection } from './components/DaySection';
import { RoadmapSection } from './components/RoadmapSection'; // Import Roadmap
import { Footer } from './components/Footer';
import { Modal } from './components/Modal'; // Import Modal
import { SCHEDULE } from './data/events';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import bgVideo from './assests/Untitled design.mp4';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;

        // Ensure the poster shows, then start playback after 1.5s
        const timer = window.setTimeout(() => {
            v.play().catch(() => {
                // Playback may fail if browser prevents autoplay; swallow error.
            });
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

  const scrollToSchedule = () => {
    // Scroll to roadmap instead of directly to day 1, as it's the next section
    const roadmap = document.querySelector('.roadmap-section');
    if (roadmap) {
        roadmap.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app-wrapper">
      <Navbar onGetTickets={openModal} />
      
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        
        {/* Background Video */}
        <div className="hero-video-wrapper">
            <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="auto"
                className="hero-video"
                poster="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
            >
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-overlay"></div>
        </div>

        <div className="container hero-content">
            {/* 1. Date */}
            <div className="hero-date">
                JANUARY 28th–30th, 2026
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
            <button className="btn-ticket btn-explore" onClick={scrollToSchedule}>
                EXPLORE ROADMAP
            </button>
        </div>
      </section>

      {/* Roadmap Section */}
      <RoadmapSection />

      {/* Days Sections */}
      <div style={{ position: 'relative', zIndex: 3, background: 'var(--bg-dark)' }}>
        <DaySection id="day1" data={SCHEDULE.day1} onRegister={openModal} />
        <DaySection id="day2" data={SCHEDULE.day2} onRegister={openModal} />
        <DaySection id="day3" data={SCHEDULE.day3} onRegister={openModal} />
      </div>

      <Footer />
      
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
