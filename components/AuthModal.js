// components/AuthModal.js

'use client';

import { useEffect, useState } from 'react';

export default function AuthModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(true);
    window.addEventListener('openAuthModal', handler);
    return () => window.removeEventListener('openAuthModal', handler);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
      onClick={() => setShow(false)} // close on background click
    >
      <div
        style={{
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',
          width: '300px',
          textAlign: 'center',
        }}
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        <h2>Sign Up</h2>
        <input type="text" placeholder="Your Name *" style={{ width: '100%', marginBottom: '10px' }} />
        <input type="text" placeholder="Mobile Number *" style={{ width: '100%', marginBottom: '10px' }} />
        <button style={{ width: '100%', background: '#000', color: '#fff', padding: '10px' }}>Request OTP</button>
        <p style={{ marginTop: '10px' }}>Already have an account? <b>Sign In</b></p>
      </div>
    </div>
  );
}
