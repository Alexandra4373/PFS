import React from "react";
import { Link } from "react-router-dom";

const OrderSummary = ({ subtotal }) => {
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="bg-white p-6 rounded-2xl shadow sticky top-10">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping:</span>
        <span>${shipping.toFixed(2)}</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between font-semibold text-lg">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <Link
        to="/checkout"
        className="block mt-6 bg-green-700 text-white text-center py-3 rounded-xl hover:bg-green-800"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default OrderSummary;
