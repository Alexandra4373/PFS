import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Products from './components/Products.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Products />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;