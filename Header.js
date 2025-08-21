'use client';

// The 'next/link' import was causing a compilation error.
// We will replace the <Link> component with a standard <a> tag
// which works the same way for simple navigation and avoids the issue.
// No extra imports are needed for this to work.

import { useState } from 'react';

export default function Header() {
  // State to handle the visibility of the categories dropdown menu.
  const [showCategories, setShowCategories] = useState(false);

  const handleProfileClick = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('openAuthModal'));
    }
  };

  return (
    <div>
      {/* Black Top Bar with scrolling text */}
      <div
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '8px 0',
          fontSize: '0.85rem',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            paddingLeft: '100%',
            animation: 'marquee 15s linear infinite',
          }}
        >
          Free Shipping On All Prepaid Orders &nbsp; | &nbsp; Cash on delivery and 3 Days easy replacement available
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </div>

      {/* === START OF NEW HEADER LAYOUT === */}
      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          borderBottom: '1px solid #eee',
          backgroundColor: '#fff',
        }}
      >
        {/* Top Row: Navigation, Logo, Search, and User Icons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between', /* This spreads the items across the row */
            alignItems: 'center',
            width: '100%',
            marginBottom: '15px',
          }}
        >
          {/* Navigation Links - Now on the left */}
          <nav style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <a href="/">
              <p style={{ display: 'inline-block', marginRight: '30px', fontWeight: '500' }}>Home</p>
            </a>
            
            {/* Categories Dropdown */}
            <div 
              onMouseEnter={() => setShowCategories(true)} 
              onMouseLeave={() => setShowCategories(false)}
              style={{ position: 'relative', display: 'inline-block', marginRight: '30px' }}
            >
              <p 
                style={{ display: 'flex', alignItems: 'center', fontWeight: '500', cursor: 'pointer' }}
              >
                Categories
                {/* Dropdown arrow SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '5px', transform: showCategories ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease-in-out' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </p>
              {showCategories && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    backgroundColor: '#fff',
                    border: '1px solid #eee',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    padding: '10px 0',
                    minWidth: '150px',
                    zIndex: 10,
                  }}
                >
                  <a href="/products/mens" style={{ display: 'block', padding: '10px 15px', textDecoration: 'none', color: '#333', hover: { backgroundColor: '#f5f5f5' } }}>Men's Shoes</a>
                  <a href="/products/womens" style={{ display: 'block', padding: '10px 15px', textDecoration: 'none', color: '#333', hover: { backgroundColor: '#f5f5f5' } }}>Women's Shoes</a>
                  <a href="/products/kids" style={{ display: 'block', padding: '10px 15px', textDecoration: 'none', color: '#333', hover: { backgroundColor: '#f5f5f5' } }}>Kid's Shoes</a>
                </div>
              )}
            </div>
            <a href="/products">
              <p style={{ display: 'inline-block', fontWeight: '500' }}>Shop</p>
            </a>
          </nav>

          {/* Logo Section - Now in the center */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <a href="/">
              <h1 style={{ margin: 0, fontSize: '2rem', cursor: 'pointer' }}>ShoesḰleed</h1>
            </a>
          </div>

          {/* Search Bar & User Icons Section - Now on the right */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: '30px', padding: '8px 15px', maxWidth: '300px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              {/* This is the search icon SVG */}
              <svg style={{ width: '20px', height: '20px', color: '#888', marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '16px' }} type="text" placeholder="Search for products..." />
            </div>
            
            {/* 👤 Trigger Auth Modal */}
            <span
              onClick={handleProfileClick}
              style={{ cursor: 'pointer', marginLeft: '20px', fontSize: '1.2rem' }}
            >
              👤
            </span>

            {/* 🛒 Cart still works */}
            <a href="/cart">
              <span style={{ cursor: 'pointer', marginLeft: '15px', fontSize: '1.2rem' }}>🛒</span>
            </a>
          </div>
        </div>
        
        {/* Bottom Row: Navigation Links */}
        <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          {/* I've removed the navigation links from this row to place them at the top. */}
        </nav>
      </header>
      {/* === END OF NEW HEADER LAYOUT === */}

      {/* Bottom Policy Bar */}
      <nav
        style={{
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
          padding: '10px 20px',
          borderBottom: '1px solid #eee',
        }}
      >
        <a href="/shipping-policy">
          <span style={{ cursor: 'pointer', marginRight: '30px', fontWeight: '500' }}>Shipping Policy</span>
        </a>
        <a href="/payment-refund-policy">
          <span style={{ cursor: 'pointer', marginRight: '30px', fontWeight: '500' }}>Payment & Refund Policy</span>
        </a>
        <a href="/about-us">
          <span style={{ cursor: 'pointer', marginRight: '30px', fontWeight: '500' }}>About Us</span>
        </a>
        <a
          href="https://www.instagram.com/shoeskleed.in/?utm_source=ig_web_button_share_sheet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ cursor: 'pointer', fontWeight: '500' }}>
            Follow shoeskleed on Instagram!
          </span>
        </a>
      </nav>
    </div>
  );
}
