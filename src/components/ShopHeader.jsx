import React from "react";
import { Link } from "react-router-dom";

function ShopHeader() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Breadcrumb */}
        <nav className="text-sm mb-4">
          <Link to="/" className="hover:text-green-200 transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Shop</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>

        {/* Description */}
        <p className="text-green-100 text-lg max-w-2xl mx-auto">
          Discover our complete range of natural, healthy, and science-driven
          food products
        </p>
      </div>
    </div>
  );
}

export default ShopHeader;
