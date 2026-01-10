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

import React from 'react';
import ReactDOM from 'react-dom';

interface ProjectData {
  id: number;
  title: string;
  category: string[];
  image: string;
  description: string;
  tech: string[];
  // keeping optional fields to match data structure if needed, but not rendering them
  team?: string;
  members?: string[];
  degree?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(5, 5, 16, 0.95)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      opacity: 1,
      animation: 'fadeIn 0.3s ease-out'
    }} onClick={onClose}>
      
      <div style={{
        background: '#0a0a1a',
        border: '1px solid rgba(0, 243, 255, 0.3)',
        borderRadius: '12px',
        position: 'relative',
        maxWidth: '900px',
        width: '90%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 0 50px rgba(0, 243, 255, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: '0', // Reset padding, will use inner containers
      }} onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(0,0,0,0.6)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff',
          fontSize: '1.2rem',
          cursor: 'pointer',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 20,
          transition: 'all 0.2s'
        }} 
        onClick={onClose}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#00f3ff'; e.currentTarget.style.color = '#000'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.6)'; e.currentTarget.style.color = '#fff'; }}
        aria-label="Close">✕</button>


        {/* Main Content Grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            
            {/* Left Column: Image */}
            <div style={{ 
                flex: '1 1 400px', 
                minHeight: '300px',
                position: 'relative',
                borderRight: '1px solid rgba(255,255,255,0.1)'
            }}>
                <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                />
            </div>

            {/* Right Column: Header Info */}
            <div style={{ 
                flex: '1 1 350px', 
                padding: '40px', 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.02), transparent)'
            }}>
                
                {/* Degree Badge: Separate Row, Above Categories */}
                {project.degree && (
                    <div style={{ marginBottom: '25px', marginTop: '-15px' }}>
                        <span style={{ 
                            // White Hot Hierarchical Boost (Static)
                            background: '#ffffff',
                            color: '#000',
                            
                            // Shape & Text
                            clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                            padding: '12px 35px', 
                            fontSize: '1.1rem', 
                            fontWeight: 900, 
                            fontFamily: 'Orbitron',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            display: 'inline-block',
                            
                            // Static Glow
                            boxShadow: '0 0 25px rgba(255, 255, 255, 0.4)',
                        }}>
                            {project.degree}
                        </span>
                    </div>
                )}

                {/* Categories Row - PRESERVED ORIGINAL SOLID PURPLE STYLE */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                    {project.category.map((cat, idx) => (
                        <div key={idx} style={{ 
                            padding: '6px 12px', 
                            borderRadius: '4px', 
                            background: 'var(--neon-purple)', 
                            color: '#fff', 
                            fontSize: '0.8rem', 
                            fontWeight: 'bold', 
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                        }}>
                            {cat}
                        </div>
                    ))}
                </div>

                <h2 style={{ 
                    fontSize: '2.5rem', 
                    margin: '0 0 10px 0', 
                    color: '#fff', 
                    fontFamily: 'Orbitron', 
                    lineHeight: 1.1 
                }}>
                    {project.title}
                </h2>
            </div>
        </div>

        {/* Bottom Section: Description & Tech */}
        <div style={{ 
            padding: '40px', 
            borderTop: '1px solid rgba(255,255,255,0.1)',
            background: '#050510'
        }}>
            
            <h3 style={{ fontFamily: 'Orbitron', fontSize: '1.2rem', marginBottom: '15px', color: '#fff' }}>Project Description</h3>
            <p style={{ 
                lineHeight: '1.8', 
                color: '#ccc', 
                fontSize: '1rem', 
                marginBottom: '30px',
                maxWidth: '100%'
            }}>
                {project.description}
            </p>

            <div style={{ 
                width: '100%', 
                height: '1px', 
                background: 'rgba(255,255,255,0.1)', 
                marginBottom: '30px' 
            }}></div>

            <h3 style={{ fontFamily: 'Orbitron', fontSize: '1.2rem', marginBottom: '15px', color: '#fff' }}>Tech Stack</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {project.tech.map((t, i) => (
                    <span key={i} style={{ 
                        background: 'transparent',
                        border: '1px solid #bc13fe',
                        color: '#fff',
                        padding: '8px 16px', 
                        borderRadius: '4px', 
                        fontSize: '0.9rem',
                        fontFamily: 'Orbitron',
                        letterSpacing: '1px',
                        boxShadow: '0 0 10px rgba(188, 19, 254, 0.2)'
                    }}>
                        {t}
                    </span>
                ))}
            </div>

        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>,
    document.body
  );
};