import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col relative overflow-hidden transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 animate-fade-in">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-4 transition-transform duration-300 group-hover:scale-105"
      />
      <h3 className="font-bold text-lg mb-2">{product.name}</h3>

      <div className="mb-2">
        {product.inStock !== false && product.sale ? (
          <div>
            <span className="text-gray-500 line-through mr-2">
              {product.price}
            </span>
            <span className="text-green-700 font-bold">
              {product.salePrice}
            </span>
            <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 text-xs rounded">
              Sale
            </span>
          </div>
        ) : (
          <span className="text-gray-800 font-bold">{product.price}</span>
        )}
      </div>

      {product.inStock === false ? (
        <span className="mt-auto bg-gray-300 text-gray-700 px-4 py-2 rounded font-semibold cursor-not-allowed">
          Out of Stock
        </span>
      ) : (
        <>
          <button className="mt-auto bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
            Add to Cart
          </button>

          <Link to={`/product/${product.id}`} state={{ product }}>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              View Details
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default ProductCard;
