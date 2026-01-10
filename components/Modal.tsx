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

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!isOpen) return null;

  const tabs = [
    { 
      label: 'IEEE\nGeneral Registration', 
      color: '#0077cc', 
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSf6btuHZMbS4Dc2SGlRbnJtN7jgL8JbetunbeSu6uUS2xOA0Q/viewform',
      description: 'Experience Innovation beyond classrooms. Register now to be part of the IEEE tech movement shaping tomorrow.'
    },
    { 
      label: 'Project\nExhibition Registration', 
      color: '#bc13fe', 
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSflsPPY-tHWAbpY78lQ60ErgWIBgxpGcsaCXZtSJ3W2yCPQtg/viewform?pli=1',
      description: 'Turn your Idea Into Impact. Register now and showcase your Innovation on a Pan-Indie IEEE platform'
    },
    { 
      label: 'Hackathon\nRegistration', 
      color: '#faff00', 
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSc_L-XNWeC7eF9I2nD21I6EHshfB4kzP5wujBo9SeNNQplMBA/viewform',
      description: 'Code. Build. Compete. Join the hackathon where ideas turn into real-world solutions.'
    }
  ];

  const currentTab = tabs[activeTab];

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
      zIndex: 9999,
      opacity: 1,
      transition: 'opacity 0.3s ease'
    }} onClick={onClose}>
      <div style={{
        background: '#0a0a1a',
        border: `1px solid ${currentTab.color}`,
        padding: '48px',
        borderRadius: '16px',
        position: 'relative',
        maxWidth: '95%',
        width: '560px',
        textAlign: 'center',
        boxShadow: `0 0 60px ${currentTab.color}40`,
        animation: 'modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transition: 'border-color 0.3s, box-shadow 0.3s'
      }} onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          background: 'transparent',
          border: 'none',
          color: '#fff',
          fontSize: '1.2rem',
          cursor: 'pointer',
          padding: '5px',
          lineHeight: 1
        }} onClick={onClose} aria-label="Close modal">✕</button>
        
        <h3 style={{ 
            fontFamily: 'Orbitron, sans-serif', 
            marginBottom: '20px', 
            color: currentTab.color,
            fontSize: '1.5rem',
            letterSpacing: '1px',
            transition: 'color 0.3s'
        }}>SCAN TO REGISTER</h3>
        
        {/* Tab Buttons */}
        <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between', gap: '12px', marginBottom: '30px', overflowX: 'hidden', paddingBottom: '6px', width: '100%' }}>
            {tabs.map((tab, index) => (
                <button 
                    key={tab.label}
                    onClick={() => setActiveTab(index)}
                    style={{
                        background: activeTab === index ? tab.color : 'transparent',
                        color: activeTab === index ? '#000' : '#fff',
                        border: `1px solid ${tab.color}`,
                        padding: '8px 10px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontFamily: 'Orbitron',
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        transition: 'all 0.25s',
                        whiteSpace: 'normal',
                        textAlign: 'center',
                        lineHeight: 1.1,
                        flex: '1 1 0',
                        minWidth: '0px'
                    }}
                >
                    {tab.label.split('\n').map((line, i) => (
                        <span key={i} style={{ display: 'block' }}>{line}</span>
                    ))}
                </button>
            ))}
        </div>

        <div style={{ 
            background: '#fff', 
            padding: '18px', 
            borderRadius: '12px',
            display: 'inline-block',
            marginBottom: '30px',
            boxShadow: '0 0 24px rgba(255,255,255,0.12)'
        }}>
            <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(currentTab.url)}`} 
                alt="Registration QR Code" 
                style={{ width: '240px', height: '240px', display: 'block' }}
            />
        </div>

        <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.5', transition: 'opacity 0.3s', minHeight: '3em', marginBottom: '20px' }}>
            {currentTab.description}
        </p>

        {/* Direct Link Button */}
        <a 
            href={currentTab.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
                display: 'inline-block',
                padding: '12px 25px',
                background: currentTab.color,
                color: '#000',
                textDecoration: 'none',
                fontFamily: 'Orbitron',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                borderRadius: '4px',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
                clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 5px 15px ${currentTab.color}40`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            CLICK TO REGISTER
        </a>

        <style>{`
            @keyframes modalPop {
                from { transform: scale(0.9) translateY(20px); opacity: 0; }
                to { transform: scale(1) translateY(0); opacity: 1; }
            }
        `}</style>
      </div>
    </div>,
    document.body
  );
};