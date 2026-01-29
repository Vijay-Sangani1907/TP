/*
 *  --------------------------------------------------------------------------
 *   TECHFEST 2025 | OFFICIAL SOURCE CODE
 *  --------------------------------------------------------------------------
 *
 *   Designed & Developed by: The Lead Engineer
 *   
 *   "The best way to predict the future is to invent it."
 *
 *   (c) 2025 All Rights Reserved.
 *   Verified Signature: 0xDEV_AUTH_TOKEN_ACTIVE
 *  --------------------------------------------------------------------------
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { DAY_GALLERY } from '../data/gallery';

// -------------------------------------------------------------
//  CONFIGURATION: GALLERY CONTROL
//  Add the Day IDs here to switch the button from "ADD TO CALENDAR"
//  to "FOR MORE PHOTOS" (Gallery View).
//  IDs: 'day1', 'day2', 'day3'
// -------------------------------------------------------------
const GALLERY_ACTIVE_IDS = ['day1']; 

interface EventData {
  id: number;
  title: string;
  time: string;
  location: string;
  speaker: string;
  image?: string;
  description?: string;
}

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: EventData | null;
  themeColor: string;
  date: string;
  dayId: string;
}

export const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, event, themeColor, date, dayId }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  if (!isOpen || !event) return null;

  // Normalize date string for Calendar logic (still needed there)
  const cleanDate = date.trim().toUpperCase();

  // Retrieve images for the current date using DAY ID
  const currentGalleryImages = DAY_GALLERY[dayId] || [];

  // LOGIC: Check if this Day ID is in the "Active" list
  const hasPassed = GALLERY_ACTIVE_IDS.includes(dayId);

  const handleAddToCalendar = () => {
    // 1. Parse Date: "OCT 12" -> Month, Day
    const [monthStr, dayStr] = cleanDate.split(' ');
    const monthMap: Record<string, string> = { 
        'JAN': '01', 'FEB': '02', 'MAR': '03', 'APR': '04', 'MAY': '05', 'JUN': '06', 
        'JUL': '07', 'AUG': '08', 'SEP': '09', 'OCT': '10', 'NOV': '11', 'DEC': '12' 
    };
    const month = monthMap[monthStr] || '10';
    const day = dayStr.padStart(2, '0');
    
    // KEEP THIS AS 2026 for the actual Calendar Invite (Future Event)
    const year = '2026'; 

    // 2. Parse Time: "09:00 AM"
    const [timeStr, modifier] = event.time.split(' ');
    let [hours, minutes] = timeStr.split(':');
    
    let hoursInt = parseInt(hours);
    if (modifier === 'PM' && hoursInt < 12) hoursInt += 12;
    if (modifier === 'AM' && hoursInt === 12) hoursInt = 0;
    
    // Create Date objects (Using local time)
    const startDateObj = new Date(`${year}-${month}-${day}T${hoursInt.toString().padStart(2, '0')}:${minutes}:00`);
    const endDateObj = new Date(startDateObj.getTime() + 60 * 60 * 1000); // 1 hour duration
    
    // Format to YYYYMMDDTHHMMSSZ
    const toGoogleFormat = (d: Date) => {
        return d.toISOString().replace(/-|:|\.\d+/g, '');
    };

    const datesParam = `${toGoogleFormat(startDateObj)}/${toGoogleFormat(endDateObj)}`;

    const googleUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent((event.description || '') + '\n\nSpeaker: ' + event.speaker)}&location=${encodeURIComponent(event.location)}&dates=${datesParam}`;
    
    window.open(googleUrl, '_blank');
  };

  // Reset gallery state on close
  const handleClose = () => {
      setShowGallery(false);
      setExpandedImage(null);
      onClose();
  };

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
    }} onClick={handleClose}>
      
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
        flexDirection: 'column',
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
        onClick={handleClose}
        onMouseEnter={(e) => { e.currentTarget.style.background = themeColor; e.currentTarget.style.color = '#000'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.5)'; e.currentTarget.style.color = '#fff'; }}
        aria-label="Close">✕</button>

        {/* Conditional Gallery View */}
        {showGallery ? (
            <div style={{ padding: '30px', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h2 style={{ color: '#fff', fontFamily: 'Orbitron', margin: 0, fontSize: '1.5rem' }}>EVENT GALLERY: {cleanDate}</h2>
                    <button 
                        onClick={() => setShowGallery(false)}
                        style={{ 
                            background: 'transparent', 
                            border: `1px solid ${themeColor}`, 
                            color: themeColor, 
                            padding: '8px 16px', 
                            cursor: 'pointer', 
                            fontFamily: 'Orbitron',
                            fontWeight: 'bold',
                            borderRadius: '4px'
                        }}
                    >
                        ← BACK
                    </button>
                </div>
                
                {currentGalleryImages.length > 0 ? (
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
                        gap: '15px', 
                        maxHeight: '60vh', 
                        overflowY: 'auto',
                        paddingRight: '5px' 
                    }}>
                        {currentGalleryImages.map((imgUrl, index) => (
                            <div key={index} style={{ 
                                aspectRatio: '1', 
                                background: 'rgba(255,255,255,0.05)', 
                                borderRadius: '8px', 
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.1)',
                                cursor: 'zoom-in'
                            }} onClick={() => setExpandedImage(imgUrl)}>
                                <img 
                                    src={imgUrl}
                                    alt={`Gallery image ${index + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        height: '300px', 
                        color: '#aaa',
                        fontSize: '1.2rem',
                        fontFamily: 'Orbitron'
                    }}>
                        Photos coming soon...
                    </div>
                )}
            </div>
        ) : (
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
                        {event.time} • {event.location}
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

                    {/* Dynamic Button Logic */}
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
                    onClick={hasPassed ? () => setShowGallery(true) : handleAddToCalendar}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        {hasPassed ? "FOR MORE PHOTOS" : "ADD TO GOOGLE CALENDAR"}
                    </button>

                </div>
            </div>
        )}

      </div>

      {/* Lightbox Overlay */}
      {expandedImage && (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 11000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.2s ease-out'
        }} onClick={() => setExpandedImage(null)}>
            <img 
                src={expandedImage} 
                alt="Expanded View" 
                style={{ 
                    maxWidth: '90%', 
                    maxHeight: '90%', 
                    objectFit: 'contain',
                    boxShadow: '0 0 50px rgba(0,0,0,0.5)',
                    borderRadius: '4px'
                }} 
            />
            <button style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: '#fff',
                fontSize: '2rem',
                cursor: 'pointer',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }} onClick={() => setExpandedImage(null)}>
                ✕
            </button>
        </div>
      )}

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