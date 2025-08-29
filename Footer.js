export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#f9f9f9',
        padding: '70px 20px',
        borderTop: '1px solid #ccc',
        marginTop: '60px',
        fontFamily: 'Poppins, Segoe UI, Roboto, sans-serif',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '60px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Quick Links */}
        <div>
          <h3 style={{ 
            fontSize: '1rem', 
            marginBottom: '25px', 
            letterSpacing: '0.6px',
            fontWeight: '600',
            color: '#000'
          }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2' }}>
            {[
              ['/', 'Home'],
              ['/account', 'My Account'],
              ['/orders', 'My Orders'],
              ['/about-us', 'About Us'],
              ['/payment-refund-policy', 'Payment Policy'],
              ['/privacy-policy', 'Privacy Policy'],
              ['/payment-refund-policy', 'Return and Refund Policy'],
              ['/shipping-policy', 'Shipping Policy'],
              ['/terms', 'Terms and Conditions'],
              ['/contact', 'Contact Us'],
            ].map(([href, label]) => (
              <li key={label}>
                <a
                  href={href}
                  style={{
                    textDecoration: 'none',
                    color: '#000',
                    fontSize: '0.9rem',
                    letterSpacing: '0.4px',
                    transition: 'opacity 0.3s',
                  }}
                  onMouseOver={(e) => (e.target.style.opacity = '0.7')}
                  onMouseOut={(e) => (e.target.style.opacity = '1')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 style={{ 
            fontSize: '1rem', 
            marginBottom: '25px', 
            letterSpacing: '0.6px', 
            fontWeight: '600', 
            color: '#000' 
          }}>
            Get In Touch
          </h3>
          <p style={{ marginBottom: '15px', color: '#000', fontSize: '0.9rem', letterSpacing: '0.4px' }}>
             📩help.shoeskleed@gmail.com
          </p>
          <p style={{ color: '#000', fontSize: '0.9rem', letterSpacing: '0.4px' }}>
            📍 Mumbai, Maharashtra - 400017
      
          </p>
        </div>

        {/* We Accept */}
        <div>
          <h3 style={{ 
            fontSize: '1rem', 
            marginBottom: '25px', 
            letterSpacing: '0.6px', 
            fontWeight: '600', 
            color: '#000' 
          }}>
            We Accept
          </h3>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <img src="/images/payments/visa.png" alt="Visa" width="45" />
            <img src="/images/payments/mastercard.png" alt="Mastercard" width="45" />
            <img src="/images/payments/upi.png" alt="UPI" width="45" />
            <img src="/images/payments/wallet.png" alt="Wallet" width="45" />
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 style={{ 
            fontSize: '1rem', 
            marginBottom: '25px', 
            letterSpacing: '0.6px', 
            fontWeight: '600', 
            color: '#000' 
          }}>
            Social
          </h3>
          <a
            href="https://www.instagram.com/shoeskleed.in/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: '#000',
              fontSize: '0.9rem',
              letterSpacing: '0.4px',
              transition: 'opacity 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.opacity = '0.7')}
            onMouseOut={(e) => (e.target.style.opacity = '1')}
          >
            <img src="/images/social/instagram.png" alt="Instagram" width="20" />
            Instagram
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '50px',
          fontSize: '0.85rem',
          color: '#000',
          letterSpacing: '0.5px',
          borderTop: '1px solid #ddd',
          paddingTop: '25px',
        }}
      >
        © {new Date().getFullYear()} ShoesKleed. All rights reserved.
      </div>
    </footer>
  );
}
