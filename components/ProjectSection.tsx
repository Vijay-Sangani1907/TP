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

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PROJECTS } from '../data/projects';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'AI', 'Blockchain', 'AR/VR', 'IoT'];

  useEffect(() => {
    // Filter Logic: Category only
    let filtered = PROJECTS;
    
    if (activeCategory !== 'All') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    
    setFilteredProjects(filtered);
  }, [activeCategory]);

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

        {/* Filter: Categories */}
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '10px', 
            marginBottom: '50px',
            flexWrap: 'wrap'
        }}>
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                        padding: '8px 20px',
                        background: activeCategory === cat ? 'var(--neon-cyan)' : 'transparent',
                        color: activeCategory === cat ? '#000' : '#aaa',
                        border: activeCategory === cat ? '1px solid var(--neon-cyan)' : '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '20px',
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
                                <div style={{
                                    background: 'var(--neon-purple)',
                                    color: '#fff',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: '0.7rem',
                                    fontWeight: 'bold',
                                }}>
                                    {project.category}
                                </div>
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
                <p>There are no projects listed for the {activeCategory} category yet.</p>
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