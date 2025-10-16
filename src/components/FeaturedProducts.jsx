import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800 animate-fade-in text-center md:text-left">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <ProductCard
            key={idx}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>
      {/* Dummy Product Popup/Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm animate-fade-in relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-green-700 text-xl"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold mb-2 text-green-700">
              {selectedProduct.name}
            </h2>
            <div className="mb-4">
              {selectedProduct.sale ? (
                <div>
                  <span className="text-gray-500 line-through mr-2">
                    {selectedProduct.price}
                  </span>
                  <span className="text-green-700 font-bold">
                    {selectedProduct.salePrice}
                  </span>
                  <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 text-xs rounded">
                    Sale
                  </span>
                </div>
              ) : (
                <span className="text-gray-800 font-bold">
                  {selectedProduct.price}
                </span>
              )}
            </div>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition w-full font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedProducts;
