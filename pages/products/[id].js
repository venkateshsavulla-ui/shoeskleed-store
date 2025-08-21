// pages/products/[id].js

import { useRouter } from 'next/router';
import { useCart } from 'react-use-cart';

// This is your product data. For a real site, this would come from a database.
const allProducts = [
  { id: '1', name: 'Men’s Stylish Sneakers', price: 89.99, description: 'Comfortable and stylish sneakers for men.', image: '/images/sneakers.jpg' },
  { id: '2', name: 'Women’s Casual Flats', price: 49.99, description: 'Simple and elegant flats for women.', image: '/images/flats.jpg' },
];

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const { addItem } = useCart();

  // Find the product that matches the ID from the URL
  const product = allProducts.find((p) => p.id === id);

  // If no product is found, show a message
  if (!product) {
    return <p style={{ padding: '20px' }}>Product not found.</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '400px', height: 'auto' }} />
      <p style={{ marginTop: '20px' }}>{product.description}</p>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>${product.price}</p>
      <button onClick={() => addItem(product)}>Add to Cart</button>
    </div>
  );
}