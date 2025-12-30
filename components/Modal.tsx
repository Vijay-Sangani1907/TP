
import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
        border: '1px solid #00f3ff',
        padding: '40px',
        borderRadius: '16px',
        position: 'relative',
        maxWidth: '90%',
        width: '400px',
        textAlign: 'center',
        boxShadow: '0 0 50px rgba(0, 243, 255, 0.15)',
        animation: 'modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
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
            marginBottom: '25px', 
            color: '#00f3ff',
            fontSize: '1.5rem',
            letterSpacing: '1px'
        }}>SCAN TO REGISTER</h3>
        
        <div style={{ 
            background: '#fff', 
            padding: '15px', 
            borderRadius: '12px',
            display: 'inline-block',
            marginBottom: '25px',
            boxShadow: '0 0 20px rgba(255,255,255,0.1)'
        }}>
            <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://techfest2025.com/register" 
                alt="Registration QR Code" 
                style={{ width: '200px', height: '200px', display: 'block' }}
            />
        </div>

        <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.5' }}>
            Scan this QR code with your mobile device to select your pass and secure your spot at <span style={{color: '#fff', fontWeight: 'bold'}}>TechFest 2025</span>.
        </p>

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
