import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import FeaturedProducts from "./components/FeaturedProducts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<FeaturedProducts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
