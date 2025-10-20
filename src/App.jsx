import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
