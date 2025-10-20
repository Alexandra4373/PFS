import React from "react";

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const price = parseFloat(item.salePrice?.replace(/[^0-9.]/g, "") || "0");
  const itemTotal = price * item.quantity;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-4">
        {/* Product Image */}
        <div className="w-20 h-20 flex-shrink-0">
          <img
            src={item.image || "/api/placeholder/80/80"}
            alt={item.name}
            className="w-full h-full object-cover rounded-md"
            onError={(e) => {
              e.target.src = "/api/placeholder/80/80";
            }}
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 text-sm">
            {item.name}
          </h3>
          <p className="text-green-600 font-bold text-base">
            GH₵{price.toFixed(2)}
          </p>
          {item.price && item.price !== item.salePrice && (
            <p className="text-gray-500 text-sm line-through mt-1">
              GH₵
              {parseFloat(item.price?.replace(/[^0-9.]/g, "") || "0").toFixed(
                2
              )}
            </p>
          )}
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-gray-300 rounded-lg bg-white">
            <button
              onClick={() => onQuantityChange(item.id, -1)}
              disabled={item.quantity === 1}
              className="px-3 py-2 text-gray-600 hover:bg-gray-50 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed rounded-l-lg"
              aria-label="Decrease quantity"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </button>

            <span className="px-3 py-2 font-medium text-gray-800 border-x border-gray-300 min-w-[2.5rem] text-center bg-white">
              {item.quantity}
            </span>

            <button
              onClick={() => onQuantityChange(item.id, 1)}
              className="px-3 py-2 text-gray-600 hover:bg-gray-50 transition-colors duration-200 rounded-r-lg"
              aria-label="Increase quantity"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Item Total */}
        <div className="text-right min-w-[90px]">
          <p className="font-bold text-gray-900 text-base">
            GH₵{itemTotal.toFixed(2)}
          </p>
        </div>

        {/* Remove Button */}
        <button
          onClick={() => onRemove(item.id)}
          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
          aria-label="Remove item from cart"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
