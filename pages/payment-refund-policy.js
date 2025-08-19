// pages/payment-refund-policy.js

export default function PaymentRefundPolicy() {
  return (
    <div style={{ padding: "50px 20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}>
        Payment & Refund Policy
      </h1>

      <h2 style={{ fontSize: "1.5rem", marginTop: "30px", marginBottom: "10px" }}>
        Payment Options
      </h2>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333" }}>
        At <strong>Shoeskleed</strong>, we offer multiple secure payment options to ensure a smooth
        shopping experience:
      </p>
      <ul style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333", marginLeft: "20px" }}>
        <li>Credit / Debit Cards (Visa, MasterCard, RuPay, etc.)</li>
        <li>UPI / Net Banking</li>
        <li>Cash on Delivery (COD)</li>
        <li>Wallets (Paytm, PhonePe, Google Pay, etc.)</li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", marginTop: "30px", marginBottom: "10px" }}>
        Refund Policy
      </h2>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333" }}>
        We aim to ensure complete satisfaction with every purchase. However, if you are not fully
        satisfied with your order, you can request a refund under the following conditions:
      </p>
      <ul style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333", marginLeft: "20px" }}>
        <li>Refunds are only applicable for unused products returned in original packaging.</li>
        <li>Refund requests must be initiated within <strong>7 days</strong> of delivery.</li>
        <li>COD charges (if any) are non-refundable.</li>
        <li>Refunds will be processed within <strong>5–7 business days</strong> once the product is received and inspected.</li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", marginTop: "30px", marginBottom: "10px" }}>
        Exchange Policy
      </h2>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333" }}>
        If you’ve received a wrong size or defective product, we are happy to exchange it for you. 
        Exchanges must be requested within <strong>3 days</strong> of delivery.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333", marginTop: "20px" }}>
        For assistance with payment or refund issues, please contact our support team at  
        <strong> support@shoeskleed.com</strong>.
      </p>
    </div>
  );
}
