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

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PROJECTS } from '../data/projects';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  // Default to B.E as it is now first
  const [activeDegree, setActiveDegree] = useState('B.E');
  const [activeCategories, setActiveCategories] = useState<string[]>([]); // CHANGED: Now an array for multi-select
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ['AI', 'Blockchain', 'AR/VR', 'IoT', 'Robotics'];
  // Exact options requested: B.E, B.Sc, B.Tech
  const degrees = ['B.E', 'B.Sc', 'B.Tech'];

  useEffect(() => {
    // Filter Logic: Degree AND Category
    let filtered = PROJECTS;
    
    // 1. Filter by Degree (Strict, no 'All')
    filtered = filtered.filter(p => p.degree === activeDegree);

    // 2. Filter by Multiple Categories // CHANGED
    if (activeCategories.length > 0) {
      
      /** 
       * LOGIC SELECTION A: 'AND' LOGIC (Currently Active)
       * Show only projects that contain ALL selected categories.
       */
      /*
      filtered = filtered.filter(p => 
        activeCategories.every(cat => p.category.includes(cat))
      );
      */

      /**
       * LOGIC SELECTION B: 'RANKING' LOGIC (Commented Out)
       * Uncomment the block below and comment out Selection A to use ranking.
       * Projects with most matches appear first.
       */
      filtered = filtered
        .map(p => ({
            ...p,
            matchCount: p.category.filter(cat => activeCategories.includes(cat)).length
        }))
        .filter(p => p.matchCount > 0) // Must match at least one
        .sort((a, b) => b.matchCount - a.matchCount);
      
    }
    
    setFilteredProjects(filtered);
  }, [activeDegree, activeCategories]); // CHANGED
    
  // CHANGED: Toggle logic for multi-select
  const toggleCategory = (cat: string) => {
    if (cat === 'All') {
      setActiveCategories([]);
    } else {
      setActiveCategories(prev => 
        prev.includes(cat) 
          ? prev.filter(c => c !== cat) 
          : [...prev, cat]
      );
    }
  };

  useEffect(() => {
    // Animate grid items when list changes
    if (containerRef.current) {
        gsap.fromTo(containerRef.current.children, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }
        );
    }
  }, [filteredProjects]);

  return (
    <section id="projects" style={{ 
        padding: '100px 0', 
        background: '#050510', 
        borderTop: '1px solid rgba(255,255,255,0.1)',
        position: 'relative',
        minHeight: '100vh'
    }}>
      
      {/* Background Decor */}
      <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 50% 10%, rgba(0, 243, 255, 0.05), transparent 60%)',
          pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ 
                fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
                color: '#fff', 
                marginBottom: '15px',
                textShadow: '0 0 20px rgba(0, 243, 255, 0.3)'
            }}>
                PROJECT EXPO
            </h2>
            <p style={{ color: '#aaa', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                Witness the future built by the brightest minds. Explore innovations across various disciplines and technologies.
            </p>
        </div>

        {/* Filters Container */}
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '30px', // Spacing between Degree and Category rows
            marginBottom: '60px'
        }}>
            
            {/* LEVEL 1: DEGREE FILTER (Big, Chamfered, Neon/Glass) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                {degrees.map(deg => (
                    <button
                        key={deg}
                        onClick={() => setActiveDegree(deg)}
                        style={{
                            // Shape: Chamfered Rectangle (Preserved)
                            clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
                            padding: '12px 35px', 
                            // New Better Design: Gradient/Glass combo
                            background: activeDegree === deg 
                                ? 'linear-gradient(135deg, #bc13fe 0%, #9000ff 100%)' 
                                : 'rgba(255, 255, 255, 0.03)',
                            border: activeDegree === deg 
                                ? '1px solid #bc13fe' 
                                : '1px solid rgba(188, 19, 254, 0.3)',
                            color: '#ffffff',
                            cursor: 'pointer',
                            fontFamily: 'Orbitron',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            letterSpacing: '1px',
                            transition: 'all 0.3s',
                            textTransform: 'uppercase',
                            // Enhanced Glow for Active State
                            boxShadow: activeDegree === deg 
                                ? '0 0 25px rgba(188, 19, 254, 0.5), inset 0 0 10px rgba(255,255,255,0.2)' 
                                : 'none',
                            backdropFilter: 'blur(5px)'
                        }}
                        onMouseEnter={(e) => {
                            if (activeDegree !== deg) {
                                e.currentTarget.style.background = 'rgba(188, 19, 254, 0.2)';
                                e.currentTarget.style.borderColor = '#bc13fe';
                                e.currentTarget.style.boxShadow = '0 0 15px rgba(188, 19, 254, 0.2)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (activeDegree !== deg) {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                e.currentTarget.style.borderColor = 'rgba(188, 19, 254, 0.3)';
                                e.currentTarget.style.boxShadow = 'none';
                            }
                        }}
                    >
                        {deg}
                    </button>
                ))}
            </div>

            {/* LEVEL 2: SUB-CATEGORY FILTER (Smaller, Pill, Cyan) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                {/* Special 'All' Button // CHANGED */}
                <button
                    onClick={() => toggleCategory('All')}
                    style={{
                        padding: '8px 24px', 
                        background: activeCategories.length === 0 ? 'var(--neon-cyan)' : 'transparent',
                        color: activeCategories.length === 0 ? '#000' : '#aaa',
                        border: activeCategories.length === 0 ? '1px solid var(--neon-cyan)' : '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        fontFamily: 'Inter',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        transition: 'all 0.3s',
                        textTransform: 'uppercase'
                    }}
                >
                    All
                </button>

                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => toggleCategory(cat)} // CHANGED
                        style={{
                            padding: '8px 24px', 
                            background: activeCategories.includes(cat) ? 'var(--neon-cyan)' : 'transparent', // CHANGED
                            color: activeCategories.includes(cat) ? '#000' : '#aaa', // CHANGED
                            border: activeCategories.includes(cat) ? '1px solid var(--neon-cyan)' : '1px solid rgba(255,255,255,0.1)', // CHANGED
                            borderRadius: '30px', // Pill shape
                            cursor: 'pointer',
                            fontFamily: 'Inter',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            transition: 'all 0.3s',
                            textTransform: 'uppercase'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
            <div 
                ref={containerRef}
                style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                    gap: '30px' 
                }}
            >
                {filteredProjects.map(project => (
                    <div 
                        key={project.id}
                        className="project-card"
                        onClick={() => setSelectedProject(project)}
                        style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.borderColor = 'var(--neon-cyan)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 243, 255, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        {/* Image Area */}
                        <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                            />
                            {/* Badges */}
                            <div style={{
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                gap: '5px'
                            }}>
                                {/* Degree Badge - Keeping consistent on card, but smaller */}
                                {project.degree && (
                                     <div style={{
                                        background: 'var(--neon-purple)',
                                        clipPath: 'polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)',
                                        color: '#fff',
                                        padding: '4px 10px',
                                        fontSize: '0.7rem',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase'
                                    }}>
                                        {project.degree}
                                    </div>
                                )}
                                {/* Category Badges - REVERTED TO ORIGINAL SOLID PURPLE STYLE */}
                                {project.category.map((cat, idx) => (
                                    <div key={idx} style={{
                                        background: 'var(--neon-purple)',
                                        color: '#fff',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontSize: '0.7rem',
                                        fontWeight: 'bold',
                                    }}>
                                        {cat}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                <h3 style={{ fontSize: '1.4rem', margin: 0, color: '#fff' }}>{project.title}</h3>
                            </div>
                            
                            <p style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                                {project.description}
                            </p>

                            {/* Tech Stack Tags */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                                {project.tech.map((t: string, i: number) => (
                                    <span key={i} style={{ 
                                        background: 'rgba(255,255,255,0.1)', 
                                        padding: '4px 10px', 
                                        borderRadius: '4px', 
                                        fontSize: '0.8rem',
                                        color: '#aaa' 
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
             <div style={{ textAlign: 'center', padding: '50px', color: '#666' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>No Projects Found</h3>
                <p>There are no projects listed for <strong>{activeDegree}</strong> matching your category selection.</p>
                <button 
                    onClick={() => toggleCategory('All')} // CHANGED
                    style={{
                        marginTop: '20px',
                        background: 'transparent',
                        border: '1px solid var(--neon-cyan)',
                        color: 'var(--neon-cyan)',
                        padding: '10px 20px',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    RESET CATEGORY
                </button>
             </div>
        )}

      </div>

      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </section>
  );
};