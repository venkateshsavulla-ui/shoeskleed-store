// pages/products.js

import Link from 'next/link';
import { useCart } from 'react-use-cart';

const products = [
  { id: '1', name: 'Men’s Stylish Sneakers', price: 89.99, image: '/images/sneakers.jpg' },
  { id: '2', name: 'Women’s Casual Flats', price: 49.99, image: '/images/flats.jpg' },
];

export default function ProductsPage() {
  const { addItem } = useCart();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Our Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '250px' }}>
            <Link href={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', cursor: 'pointer' }} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Link>
            <button onClick={() => addItem(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
