import React from "react";
import { FaTimes } from "react-icons/fa";

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-md object-cover"
        />
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => onQuantityChange(item.id, -1)}
          className="px-2 py-1 border rounded hover:bg-gray-100"
        >
          -
        </button>
        <span className="px-2">{item.quantity}</span>
        <button
          onClick={() => onQuantityChange(item.id, +1)}
          className="px-2 py-1 border rounded hover:bg-gray-100"
        >
          +
        </button>
      </div>

      <div className="text-right">
        <p className="font-semibold">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <button
        onClick={() => onRemove(item.id)}
        className="ml-3 text-red-500 hover:text-red-700"
      >
        <FaTimes size={18} />
      </button>
    </div>
  );
};

export default CartItem;
