import React from "react";
import { useLocation, Link } from "react-router-dom";
import products from "../data/products";

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";

  // Debug logs
  console.log("📍 Location search:", location.search);
  console.log("🔍 Search query:", searchQuery);
  console.log("📦 All products:", products);
  console.log(
    "🔄 Products names:",
    products.map((p) => p.name)
  );

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("✅ Filtered products:", filteredProducts);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        {searchQuery ? `Search Results for "${searchQuery}"` : "All Products"}
      </h2>

      {filteredProducts.length === 0 && searchQuery ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-4">
            No products found for "{searchQuery}"
          </p>
          <Link
            to="/products"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            View All Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id || index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                {product.name}
              </h3>
              <div className="flex items-center gap-2">
                {product.salePrice ? (
                  <>
                    <p className="text-gray-500 line-through text-sm">
                      {product.price}
                    </p>
                    <p className="text-green-700 font-bold text-lg">
                      {product.salePrice}
                    </p>
                  </>
                ) : (
                  <p className="text-green-700 font-bold text-lg">
                    {product.price}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
