
import React from 'react';
import logoSrc from '../assests/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer style={{ 
        backgroundColor: '#050510', 
        color: '#fff', 
        padding: '80px 0 30px', 
        borderTop: '1px solid rgba(255,255,255,0.1)' 
    }}>
      <div className="container" style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between', 
          gap: '50px' 
      }}>
        
                {/* Left Column: Logo & About */}
                <div style={{ flex: '1 1 300px', maxWidth: '450px' }}>
                    {/* Logo Section - Clickable (image instead of text) */}
                    <a
                        href="https://atharvacollege.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '25px', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                    >
                        <img src={logoSrc} alt="Atharva University Logo" className="footer-logo" />
                        <div>
                            <h3 style={{
                                margin: 0,
                                fontSize: '1.2rem',
                                fontFamily: '"Times New Roman", serif',
                                letterSpacing: '1px',
                                lineHeight: 1,
                                textTransform: 'uppercase',
                                color: '#fff'
                            }}>
                                ATHARVA
                            </h3>
                            <div style={{
                                fontSize: '0.85rem',
                                letterSpacing: '2px',
                                marginTop: '5px',
                                color: '#ccc',
                                textTransform: 'uppercase'
                            }}>
                                UNIVERSITY • MUMBAI
                            </div>
                        </div>
                    </a>
          
          <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '1rem', marginBottom: '30px' }}>
            Leading institution in technology education and innovation, fostering excellence in engineering and applied sciences.
          </p>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '25px' }}>
            <a href="https://www.facebook.com/p/Atharva-University-Mumbai-61577145298845/" aria-label="Facebook" style={{ color: '#fff' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
            <a href="https://x.com/Uni_atharva" aria-label="Twitter" style={{ color: '#fff' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5 4 1.2 8.1-.3 9.1-1.4-2 0-3.7-1.3-4.2-3.1.7.1 1.4.1 2.1-.2-2.1-.4-3.7-2.3-3.7-4.5.6.3 1.3.5 2.1.5-1.3-.9-2.1-2.9-1.1-4.8 2.3 2.8 5.7 4.5 9.5 4.9-.6-2.6 1.3-4.9 3.9-4.9 1.2 0 2.3.5 3.1 1.3z"></path></svg></a>
            <a href="https://www.instagram.com/atharva_university/" aria-label="Instagram" style={{ color: '#fff' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            <a href="https://in.linkedin.com/company/atharva-university" aria-label="LinkedIn" style={{ color: '#fff' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
          </div>
        </div>

        {/* Middle Column: Contact */}
        <div style={{ flex: '1 1 250px' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '30px', fontFamily: 'Inter', fontWeight: 600, color: '#fff' }}>Contact Information</h4>
            
            {/* Address - Clickable */}
            <a 
                href="https://www.google.com/maps/search/?api=1&query=Atharva+University+Mumbai+Marve+Road+Malad+West+Mumbai+Maharashtra+400064" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: 'flex', gap: '15px', marginBottom: '25px', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ minWidth: '24px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <div style={{ color: '#ccc', lineHeight: '1.5' }}>
                    Atharva University Mumbai<br/>
                    Marve Road, Malad West,<br/>
                    Mumbai, Maharashtra 400064
                </div>
            </a>

            {/* Phone - Clickable */}
            <a href="tel:+912240294949" style={{ display: 'flex', gap: '15px', marginBottom: '25px', alignItems: 'center', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                 <span style={{ color: '#ccc' }}>+91 22 4029 4949</span>
            </a>

            {/* Email */}
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:info@university.edu" style={{ color: '#ccc', textDecoration: 'none' }}>info@university.edu</a>
            </div>
        </div>

        {/* Right Column: Location - Clickable */}
        <div style={{ flex: '1 1 250px' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '30px', fontFamily: 'Inter', fontWeight: 600, color: '#fff' }}>Location</h4>
            <a 
                href="https://www.google.com/maps/search/?api=1&query=Atharva+University+Mumbai+Marve+Road+Malad+West+Mumbai+Maharashtra+400064" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
                <div style={{
                        width: '100%',
                        height: '150px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        background: '#020205',
                        transition: 'border-color 0.3s, color 0.3s'
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = '#00f3ff';
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.1)';
                    }}
                    >
                        {/* Use the same logo image as a placeholder image; replace with a map image by placing a file in `assests` and updating import if desired */}
                        <img src={logoSrc} alt="Map placeholder" className="map-placeholder-img" />
                    </div>
            </a>
        </div>

      </div>

      <div style={{ textAlign: 'center', marginTop: '80px', color: '#666', fontSize: '0.9rem' }}>
        &copy; Made by Vijay Sangani, Mayank Bhuvad, Shlok Nair, and Yug Sawant <br></br>
        TechFest 2025
      </div>
    </footer>
  );
};
