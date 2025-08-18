import { CartProvider } from 'react-use-cart';
import Header from '../components/Header';
import Footer from '../components/Footer';   // 👈 import Footer
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />   {/* 👈 add Footer here */}
    </CartProvider>
  );
}

export default MyApp;
