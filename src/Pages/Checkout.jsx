import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import CheckoutForm from "../components/CheckoutForm";
import OrderReview from "../components/OrderReview";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = getCartTotal();
  const shipping = subtotal >= 200 ? 0 : 15;

  const handleOrderSubmit = async (formData) => {
    setIsProcessing(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Order submitted:", formData);
      console.log("Cart items:", cart);

      setShowSuccess(true);

      // Clear cart and redirect after 3 seconds
      setTimeout(() => {
        clearCart();
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Order submission failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (cart.length === 0 && !showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <svg
              className="w-24 h-24 mx-auto text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-6">
            Add some items to your cart before proceeding to checkout.
          </p>
          <Link
            to="/products"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Order Placed Successfully!
          </h2>
          <p className="text-gray-600 mb-2">
            Thank you for your order. We've sent a confirmation email with your
            order details.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            You will be redirected to the home page shortly.
          </p>
          <div className="animate-pulse text-green-600 text-sm">
            <svg
              className="w-4 h-4 inline mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Redirecting...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
          <nav className="flex text-sm text-gray-600">
            <Link
              to="/"
              className="hover:text-green-700 transition-colors duration-200"
            >
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              to="/cart"
              className="hover:text-green-700 transition-colors duration-200"
            >
              Cart
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Checkout</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <CheckoutForm
                onSubmit={handleOrderSubmit}
                isLoading={isProcessing}
              />
            </div>
          </div>

          {/* Order Review */}
          <div className="lg:col-span-1">
            <OrderReview items={cart} subtotal={subtotal} shipping={shipping} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
