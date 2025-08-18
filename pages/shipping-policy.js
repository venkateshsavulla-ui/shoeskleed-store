// pages/shipping-policy.js

import Head from 'next/head';

export default function ShippingPolicy() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Head>
        <title>Shipping & Delivery Policy | Shoeskleed</title>
      </Head>
      
      <h1>Shipping & Delivery Policy</h1>
      <p>Please carefully review our Shipping & Delivery Policy when purchasing our products. This policy will apply to any order you place with us.</p>
      
      <h2>Overview</h2>
      <p>Thank you for visiting Shoeskleed. We are committed to providing you with a seamless shopping experience, including timely and efficient shipping of your orders.</p>
      
      <h2>How Can I Track My Order?</h2>
      <p>To track your order, please visit: xyz</p>
      
      <h2>Shipping Methods</h2>
      <p>We currently only offer standard shipping.</p>
      <p style={{ fontWeight: 'bold' }}>Standard shipping (Delivery Time 5-7 days):</p>
      <p>Free on all prepaid orders.</p>
      
      <h2>Advance Payment</h2>
      <p>We take shipping charges in advance in cash on delivery orders so that the customer receives the product at the time of delivery. If your product is RTO (return to origin), then your advance payment will not be refunded.</p>
      
      <h2>Delivery Of Your Order May Be Canceled Or Delayed Due To These Reasons:</h2>
      <ul>
        <li>Incorrect or incomplete shipping address</li>
        <li>Shipping not available in your pincode</li>
        <li>Lack of courier partner in your area</li>
        <li>Due to bad weather conditions in your area</li>
        <li>Due to the product being out of stock</li>
        <li>If you don't receive our confirmation call</li>
      </ul>
      <p>We will always confirm your address details with you at the time of order confirmation.</p>
      
      <h2>Lost Or Damaged Orders</h2>
      <p>If your order is lost or damaged in transit, please contact us at venkateshsavulla@gmail.com within 3 days of receiving your shipment. We will assist you in resolving the issue promptly.</p>
      
      <h2>QUESTIONS ABOUT RETURNS?</h2>
      <p>If you have questions about returns, please review our Return Policy: venkateshsavulla@gmai.com</p>
      
      <h2>HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h2>
      <p>If you have any further questions or comments, please contact us by:</p>
      <p>Email: venkateshsavulla@gmail.com</p>
    </div>
  );
}