 /*  --------------------------------------------------------------------------
 *   TECHITHON | OFFICIAL SOURCE CODE
 *  --------------------------------------------------------------------------
 *
 *   Designed & Developed by: Vijay Sangani
 *   
 *   Contributors: Mayank Bhuvad, Shlok Nair, Yug Sawant
 *
 *   (c) 2026 All Rights Reserved.
 *  --------------------------------------------------------------------------
 */

import React from 'react';
import ReactDOM from 'react-dom';

interface EventData {
  id: number;
  title: string;
  time: string;
  speaker: string;
  image?: string;
  description?: string;
}

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: EventData | null;
  themeColor: string;
}

export const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, event, themeColor }) => {
  if (!isOpen || !event) return null;

  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(5, 5, 16, 0.9)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000, // Higher than navbar
      opacity: 1,
      animation: 'fadeIn 0.3s ease-out'
    }} onClick={onClose}>
      
      <div style={{
        background: '#0a0a1a',
        border: `1px solid ${themeColor}`,
        borderRadius: '16px',
        position: 'relative',
        maxWidth: '800px', // Wider for detail view
        width: '90%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: `0 0 50px ${themeColor}30`,
        display: 'flex',
        flexDirection: 'column', // Mobile first (stack), we'll use media query logic via JS inline for simplicity or flex-wrap
        animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }} onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          background: 'rgba(0,0,0,0.5)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff',
          fontSize: '1.2rem',
          cursor: 'pointer',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          transition: 'all 0.2s'
        }} 
        onClick={onClose}
        onMouseEnter={(e) => { e.currentTarget.style.background = themeColor; e.currentTarget.style.color = '#000'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.5)'; e.currentTarget.style.color = '#fff'; }}
        aria-label="Close">✕</button>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            
            {/* Image Section */}
            <div style={{ 
                flex: '1 1 350px', 
                minHeight: '300px',
                position: 'relative',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                borderRight: '1px solid rgba(255,255,255,0.1)'
            }}>
                {event.image ? (
                    <img 
                        src={event.image} 
                        alt={event.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                    />
                ) : (
                    <div style={{ width: '100%', height: '100%', background: '#111' }} />
                )}
                {/* Gradient Overlay */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%', background: 'linear-gradient(to top, #0a0a1a, transparent)' }}></div>
            </div>

            {/* Content Section */}
            <div style={{ flex: '1 1 350px', padding: '40px', display: 'flex', flexDirection: 'column' }}>
                
                <div style={{ 
                    display: 'inline-block', 
                    padding: '5px 12px', 
                    borderRadius: '50px', 
                    background: `${themeColor}20`, 
                    color: themeColor, 
                    border: `1px solid ${themeColor}40`,
                    fontSize: '0.8rem', 
                    fontWeight: 'bold', 
                    marginBottom: '20px',
                    width: 'fit-content'
                }}>
                    {event.time} • MAIN STAGE
                </div>

                <h2 style={{ 
                    fontSize: '2rem', 
                    margin: '0 0 10px 0', 
                    color: '#fff', 
                    lineHeight: 1.1 
                }}>
                    {event.title}
                </h2>

                <h3 style={{ 
                    fontSize: '1.2rem', 
                    color: '#ccc', 
                    margin: '0 0 25px 0', 
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <span style={{ width: '20px', height: '2px', background: themeColor }}></span>
                    {event.speaker}
                </h3>

                <p style={{ 
                    lineHeight: '1.8', 
                    color: '#aaa', 
                    fontSize: '1rem', 
                    marginBottom: '30px',
                    flex: 1
                }}>
                    {event.description || "No description available for this event."}
                </p>

                <button style={{
                    padding: '15px 30px',
                    background: themeColor,
                    color: '#000',
                    border: 'none',
                    fontWeight: 'bold',
                    fontFamily: 'Orbitron',
                    cursor: 'pointer',
                    clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                    transition: 'transform 0.2s',
                    alignSelf: 'flex-start'
                }}
                onClick={onClose} // Just close for now, or could link to specific register logic
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    ADD TO CALENDAR
                </button>

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