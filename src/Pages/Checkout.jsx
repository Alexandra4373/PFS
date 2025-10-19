import React from "react";
import CheckoutForm from "../components/CheckoutForm";
import OrderReview from "../components/OrderReview";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Checkout</h1>
        <p className="text-gray-500 mb-6">
          <Link to="/" className="text-green-700 hover:underline">
            Home
          </Link>{" "}
          / Checkout
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow">
            <CheckoutForm />
          </div>
          <OrderReview />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
