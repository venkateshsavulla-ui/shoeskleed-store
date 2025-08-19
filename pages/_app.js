import { CartProvider } from "react-use-cart";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthModal from "../components/AuthModal";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Header />
      <AuthModal />   {/* 👈 this makes modal appear on ALL pages */}
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  );
}

export default MyApp;
