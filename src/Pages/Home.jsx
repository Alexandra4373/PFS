// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
// import "../main.css";


const HeartIcon = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? "currentColor" : "none"}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-6 h-6 ${filled ? "text-red-500" : "text-gray-400"} transition`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 7.5a3.75 3.75 0 00-6 0L12 9l1.5-1.5a3.75 3.75 0 016 0c1.5 1.5 1.5 4 0 5.5l-7.5 7.5-7.5-7.5c-1.5-1.5-1.5-4 0-5.5a3.75 3.75 0 016 0L12 9l1.5-1.5z"
    />
  </svg>
);

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-green-700 transition group-hover:text-green-900"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 2.25l1.5 1.5m0 0l1.5 1.5m-3-3l16.5 16.5m-16.5-16.5l16.5 16.5m-16.5-16.5l16.5 16.5"
    />
  </svg>
);

// Feature section icons
const TagIcon = () => (
  <svg className="w-10 h-10 text-green-700 mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7l10 10M7 17L17 7M7 7v10m10-10v10" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-10 h-10 text-green-700 mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8l-4 1 1-4A8.96 8.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-10 h-10 text-green-700 mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a2 2 0 012-2h6a2 2 0 012 2v2M9 17H7a2 2 0 01-2-2v-5a2 2 0 012-2h2m0 9v-2m0 2h6m0 0v-2m0 2h2a2 2 0 002-2v-5a2 2 0 00-2-2h-2m0 9v-2m0 2h-6" />
  </svg>
);

const products = [
  {
    name: "Shemah Instant Rice Porridge Mix",
    price: "GH₵43.00",
    salePrice: "GH₵40.00",
    image: "",
    sale: true,
  },
  {
    name: "Shemah Instant Rice Porridge Mix (with Carrot)",
    price: "GH₵43.00",
    salePrice: "GH₵40.00",
    image: "",
    sale: true,
  },
  {
    name: "Shemah Instant Rice Porridge Mix (with Coconut Chunks)",
    price: "GH₵45.00",
    salePrice: "GH₵42.00",
    image: "",
    sale: true,
  },
  {
    name: "Shemah Instant Rice Porridge Mix (with Groundnut Chunks)",
    price: "GH₵45.00",
    salePrice: "GH₵45.00",
    image: "",
    sale: false,
  },
];

function App() {
  // const [hoveredProduct, setHoveredProduct] = useState(null);
  // const [cartHover, setCartHover] = useState(null);

  return (
    <>
      {/* <Header /> */}
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-green-700 text-white py-12 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Welcome to PFS Store</h1>
          <p className="text-lg animate-fade-in delay-100"> Discover our range of natural and healthy products!</p>
        </section>


        {/* Product Grid */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800 animate-fade-in">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product, idx) => (
  <div
    key={idx}
    className="bg-white rounded-lg shadow hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col relative overflow-hidden transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 animate-fade-in"
  >
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-40 object-cover rounded mb-4 transition-transform duration-300 group-hover:scale-105"
    />
    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
    <div className="mb-2">
      {product.sale ? (
        <div>
          <span className="text-gray-500 line-through mr-2">{product.price}</span>
          <span className="text-green-700 font-bold">{product.salePrice}</span>
          <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Sale</span>
        </div>
      ) : (
        <span className="text-gray-800 font-bold">{product.price}</span>
      )}
    </div>
    <button className="mt-auto bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
      Add to Cart
    </button>
  </div>
))}
          </div>
          {/* Browse All Products Button */}
          <div className="flex justify-center mt-10">
            <Link
            to="/products"
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-800 transition mx-2"
            >
            Browse All Products
            </Link>
            
            {/* <a
              href="/buy"
              className="bg-green-100 text-green-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-200 transition mx-2 border border-green-700"
            >
              Buy Now
            </a> */}
          </div>
        </section>



          {/* Why Choose Us Section */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition animate-fade-in">
              {/* <TagIcon /> */}
              <h3 className="text-lg font-bold mb-2 text-green-700">Best Prices</h3>
              <p className="text-gray-600">
                Get our premium quality mango powder products for commercial and retail use, processed with advanced dehydration technology.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition animate-fade-in">
              {/* <ChatIcon /> */}
              <h3 className="text-lg font-bold mb-2 text-green-700">Live Support</h3>
              <p className="text-gray-600">
                Our friendly support team is always ready to assist you in real-time with orders, inquiries, and delivery updates, anytime you need.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition animate-fade-in">
              {/* <TruckIcon /> */}
              <h3 className="text-lg font-bold mb-2 text-green-700">Quick Delivery</h3>
              <p className="text-gray-600">
                Experience fast and reliable delivery of our products straight to your door, ensuring quality, convenience, and satisfaction with every order.
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;