// pages/cart.js

import { useCart } from 'react-use-cart';
import { useState, useEffect } from 'react';

export default function CartPage() {
  // Use a state variable to track if the component has mounted on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { isEmpty, items, updateItemQuantity, removeItem, cartTotal } = useCart();

  // If we are not on the client yet, show a loading message or nothing
  if (!isClient) {
    return <p style={{ padding: '20px' }}>Loading cart...</p>;
  }

  // Now that we are on the client, we can safely check if the cart is empty
  if (isEmpty) {
    return <p style={{ padding: '20px' }}>Your cart is empty.</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
            <p>Subtotal: ${(item.itemTotal).toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <h2>Total: ${cartTotal.toFixed(2)}</h2>
      <button>Proceed to Checkout</button>
    </div>
  );
}