// pages/index.js

import Link from 'next/link';
import Head from 'next/head';

// This is your product data.
const featuredProducts = [
  { id: '1', name: 'Men’s Stylish Sneakers', price: 89.99, image: '/images/sneakers.jpg' },
  { id: '2', name: 'Women’s Casual Flats', price: 49.99, image: '/images/flats.jpg' },
];

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Shoeskleed | Your E-commerce Store</title>
        <meta name="description" content="Find the perfect shoes for your style." />
      </Head>

      {/* Main Hero Section */}
      <div style={{
        position: 'relative',
        height: '600px',
        backgroundImage: 'url("/images/hero-banner.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(14, 14, 14, 0.5)',
        paddingBottom: '120px'
      }}>
        <h1 style={{ fontSize: '3rem', margin: '0' }}>Your Style, Our Shoes</h1>
        <p style={{ 
          fontSize: '1.2rem',
          marginTop: '10px', 
          color: '#090909ff' 
        }}>Discover our latest collection.</p>
        <Link href="/products">
          <button style={{ 
            marginTop: '20px', 
            padding: '15px 30px', 
            fontSize: '1.2rem', 
            backgroundColor: '#191818ff', 
            color: '#fbf7f7ff', 
            border: 'none', 
            cursor: 'pointer' 
          }}>
            Shop Now
          </button>
        </Link>
      </div>

      {/* Featured Section */}
      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2>Featured Products</h2>
        <p>Explore some of our most popular styles.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
          {featuredProducts.map(product => (
            <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '250px' }}>
              <Link href={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', cursor: 'pointer' }} />
                <h3 style={{ marginTop: '10px' }}>{product.name}</h3>
                <p style={{ fontWeight: 'bold' }}>${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
