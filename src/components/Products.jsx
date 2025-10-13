import React from 'react';

const products = [
  {
    name: "Fibrelicious 100% Natural Mango Powder",
    price: "GH₵72.00",
    salePrice: "GH₵68.00",
    image: "https://via.placeholder.com/300x200?text=Mango+Powder",
    sale: true,
  },
  {
    name: "Fibrelicious Instant High Fruit Fibre Porridge Mix (Creamy - Delight)",
    price: "GH₵66.00",
    salePrice: "GH₵62.00",
    image: "https://via.placeholder.com/300x200?text=Creamy+Delight",
    sale: true,
  },
  {
    name: "Fibrelicious Instant High Fruit Fibre Porridge Mix (Fibre - Fix)",
    price: "GH₵78.00",
    salePrice: "GH₵75.00",
    image: "https://via.placeholder.com/300x200?text=Fibre+Fix",
    sale: true,
  },
  {
    name: "Shemah Instant Rice Porridge Mix",
    price: "GH₵40.00",
    salePrice: "GH₵34.00",
    image: "https://via.placeholder.com/300x200?text=Rice+Porridge+Mix",
    sale: true,
  },
  {
    name: "Shemah Instant Rice Porridge Mix (plain, rice only)",
    price: "GH₵40.00",
    salePrice: "GH₵36.00",
    image: "https://via.placeholder.com/300x200?text=Plain+Rice+Mix",
    sale: true,
  },
  {
    name: "Shemah Instant Rice Porridge Mix (with Carrot)",
    price: "GH₵43.00",
    salePrice: "GH₵40.00",
    image: "https://via.placeholder.com/300x200?text=Carrot+Mix",
    sale: true,
  },
  {
    name: "Shemah Instant Rice Porridge Mix (with Coconut Chunks)",
    price: "GH₵40.00",
    salePrice: "GH₵36.00",
    image: "https://via.placeholder.com/300x200?text=Coconut+Chunks",
    sale: true,
  },
  {
    name: "Shemah Instant Rice Porridge Mix (with Groundnut Chunks)",
    price: "GH₵40.00",
    salePrice: "GH₵36.00",
    image: "https://via.placeholder.com/300x200?text=Groundnut+Chunks",
    sale: true,
  },
  {
    name: "Shemah Instant Rice Porridge Mix (with Mango)",
    price: "GH₵40.00",
    salePrice: "GH₵36.00",
    image: "https://via.placeholder.com/300x200?text=Mango+Mix",
    sale: true,
  },
  {
    name: "Shemah Instant Rice Porridge Mix(with Tigernut)",
    price: "GH₵40.00",
    salePrice: "GH₵36.00",
    image: "https://via.placeholder.com/300x200?text=Tigernut+Mix",
    sale: true,
  },
];

function Products() {
  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">All Products</h1>
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
      </div>
    </main>
  );
}

export default Products;