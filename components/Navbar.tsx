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

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoSrc from '../assests/logo.png';
import ieeeLogoSrc from '../assests/IEEE logo.png'

// Updated Menu Items with Paths
const MENU_ITEMS = [
  { label: 'Home', href: '/' },
  { 
    label: 'About', 
    href: '#about', 
    children: [
      //{ label: 'Our Team', href: '#team' },
      //{ label: 'Our Mission', href: '#mission' },
      //{ label: 'History', href: '#history' },
      //{ label: 'Events', href: '#events' },
      //{ label: 'Partners', href: '#partners' },
      { label: 'Know More', href: '#more' },
    ]
  },
  { 
    label: 'TechIthon', 
    href: '#techithon',
    children: [
      { label: 'Day 1', href: '#day1' },
      { label: 'Day 2', href: '#day2' },
      { label: 'Day 3', href: '#day3' },
      { label: 'Projects', href: '/projects' }, // Changed to route
    ]
  },
  { label: 'Contact Us', href: 'tel:+912240294949' }
];

interface NavbarProps {
  onGetTickets?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onGetTickets }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
    setActiveMobileDropdown(null); // Reset dropdowns on toggle
  };

  const toggleMobileDropdown = (label: string) => {
    setActiveMobileDropdown(prev => prev === label ? null : label);
  };

  const handleNavigation = (href: string) => {
    setIsMobileOpen(false);

    // 1. External Links
    if (href.startsWith('http')) {
        window.open(href, '_blank');
        return;
    }

    // 2. Route Navigation (e.g., /projects, /)
    if (href.startsWith('/')) {
        navigate(href);
        window.scrollTo(0, 0);
        return;
    }

    // 3. Anchor Links (#section)
    if (href.startsWith('#')) {
        // If we are NOT on the home page, go to home first
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: href } });
        } else {
            // We are already on home, just scroll
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
    const scrollTo = (id : string) => {
      if (id.startsWith('#')) {
        const el =document.querySelector(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setIsMobileOpen(false);
        }
      } else {
        window.location.href = id;
      }
    }
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        background: 'rgba(5, 5, 16, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border)'
      }}>
        <div className="container nav-container">
          
          {/* Left Side: Logo Section */}
          <div className='nav-left' style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <div style={{ display: 'flex', alignItems: 'center'}}>
                <a href='https://atharvauniversity.org' target='_blank' rel='noreferrer' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none'}}>
                <img src={logoSrc} alt="TechIthon Logo" className='nav-logo'/>
                </a>
                <a href='/'>
                <img src={ieeeLogoSrc} alt="IEEE Logo" className='nav-logo-alt' style={{ marginLeft: 12 }}/>
                </a>
              </div>
          </div>

          {/* Right Side: Desktop Menu & Buttons */}
          <div className="nav-right-desktop">
            <div className="nav-links">
              {MENU_ITEMS.map((item) => (
                <div key={item.label} className="nav-item">
                  <span 
                      className="nav-link-text" 
                      onClick={() => !item.children && handleNavigation(item.href)}
                  >
                    {item.label} {item.children && '▾'}
                  </span>
                  
                  {/* Desktop Dropdown */}
                  {item.children && (
                    <div className="dropdown-menu">
                      {item.children.map((sub) => (
                        <a 
                          key={sub.label} 
                          href={sub.href}
                          onClick={(e) => { e.preventDefault(); handleNavigation(sub.href); }}
                          className="dropdown-item"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button className="btn-ticket" onClick={onGetTickets}>
              GET TICKETS
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
             {isMobileOpen ? '✕' : '☰'}
          </button>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileOpen ? 'open' : ''}`}>
        
        {MENU_ITEMS.map((item) => (
            <div key={item.label} className="mobile-menu-item">
                <div 
                    className="mobile-label-row"
                    onClick={() => item.children ? toggleMobileDropdown(item.label) : handleNavigation(item.href)}
                >
                    {item.label}
                    {item.children && (
                        <span style={{ 
                            transform: activeMobileDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s' 
                        }}>▾</span>
                    )}
                </div>

                {/* Mobile Dropdown */}
                {item.children && (
                    <div className={`mobile-dropdown ${activeMobileDropdown === item.label ? 'open' : ''}`}>
                        {item.children.map(sub => (
                            <div 
                                key={sub.label}
                                style={{ fontSize: '1rem', color: '#aaa', cursor: 'pointer', padding: '5px 0' }}
                                onClick={() => handleNavigation(sub.href)}
                            >
                                {sub.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        ))}
        
        <button className="btn-ticket mobile-btn" onClick={() => { onGetTickets?.(); setIsMobileOpen(false); }}>
            GET TICKETS
        </button>

      </div>
    </>
  );
};