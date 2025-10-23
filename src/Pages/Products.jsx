import React from "react";
import { useLocation } from "react-router-dom";
import products from "../data/products"; // adjust the path if needed

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        {searchQuery ? `Results for "${searchQuery}"` : "All Products"}
      </h2>

      {filteredProducts.length === 0 ? (
        <p>No products found for "{searchQuery}"</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={index} className="border rounded p-4 shadow">
              <img
                src={product.image}
                alt={product.name}
                className="rounded mb-2"
              />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-700 line-through">{product.price}</p>
              <p className="text-green-700 font-bold">{product.salePrice}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
