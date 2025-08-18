// components/Header.js

'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <div>
      {/* Black Top Bar */}
      <div style={{
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 0',
      }}>
        <p style={{ margin: '0', fontSize: '0.8rem' }}>Free Shipping On All Prepaid Orders</p>
        <p style={{ margin: '5px 0 0 0', fontSize: '0.8rem' }}>Cash on delivery and 3 Days easy replacement available</p>
      </div>

      {/* Main Navigation Bar */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        borderBottom: '1px solid #eee',
        backgroundColor: '#fff',
      }}>
        <nav style={{ flex: 1, textAlign: 'left' }}>
          <Link href="/">
            <p style={{ display: 'inline-block', marginRight: '30px', fontWeight: '500' }}>Home</p>
          </Link>
          <Link href="/products">
            <p style={{ display: 'inline-block', marginRight: '30px', fontWeight: '500' }}>Shop</p>
          </Link>
        </nav>

        {/* Text "ShoesKleed" instead of the logo */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <Link href="/">
            <h1 style={{ margin: 0, fontSize: '2rem', cursor: 'pointer' }}>ShoesḰleed</h1>
          </Link>
        </div>

        <div style={{ flex: 1, textAlign: 'right' }}>
          <Link href="/profile">
            <span style={{ cursor: 'pointer', marginRight: '20px', fontSize: '1.2rem' }}>👤</span>
          </Link>
          <Link href="/cart">
            <span style={{ cursor: 'pointer', fontSize: '1.2rem' }}>🛒</span>
          </Link>
        </div>
      </header>

      {/* Gray Bottom Bar with Policy Links */}
      <nav style={{
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        padding: '10px 20px',
        borderBottom: '1px solid #eee',
      }}>
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