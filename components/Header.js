// components/Header.js

'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    // Just to confirm it's loading on client
    console.log("Header mounted on client");
  }, []);

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

      {/* Main Navigation Bar */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
          borderBottom: '1px solid #eee',
          backgroundColor: '#fff',
        }}
      >
        <nav style={{ flex: 1, textAlign: 'left' }}>
          <Link href="/">
            <p style={{ display: 'inline-block', marginRight: '30px', fontWeight: '500' }}>Home</p>
          </Link>
          <Link href="/products">
            <p style={{ display: 'inline-block', marginRight: '30px', fontWeight: '500' }}>Shop</p>
          </Link>
        </nav>

        <div style={{ flex: 1, textAlign: 'center' }}>
          <Link href="/">
            <h1 style={{ margin: 0, fontSize: '2rem', cursor: 'pointer' }}>ShoesḰleed</h1>
          </Link>
        </div>

        <div style={{ flex: 1, textAlign: 'right' }}>
          {/* 👤 Trigger Auth Modal */}
          <span
            onClick={handleProfileClick}
            style={{ cursor: 'pointer', marginRight: '20px', fontSize: '1.2rem' }}
          >
            👤
          </span>

          {/* 🛒 Cart still works */}
          <Link href="/cart">
            <span style={{ cursor: 'pointer', fontSize: '1.2rem' }}>🛒</span>
          </Link>
        </div>
      </header>

      {/* Bottom Policy Bar */}
      <nav
        style={{
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
          padding: '10px 20px',
          borderBottom: '1px solid #eee',
        }}
      >
        <Link href="/shipping-policy">
          <span style={{ cursor: 'pointer', marginRight: '30px', fontWeight: '500' }}>Shipping Policy</span>
        </Link>
        <Link href="/payment-refund-policy">
          <span style={{ cursor: 'pointer', marginRight: '30px', fontWeight: '500' }}>Payment & Refund Policy</span>
        </Link>
        <Link href="/about-us">
          <span style={{ cursor: 'pointer', marginRight: '30px', fontWeight: '500' }}>About Us</span>
        </Link>
        <Link
          href="https://www.instagram.com/shoeskleed.in/?utm_source=ig_web_button_share_sheet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ cursor: 'pointer', fontWeight: '500' }}>
            Follow shoeskleed on Instagram!
          </span>
        </Link>
      </nav>
    </div>
  );
}
