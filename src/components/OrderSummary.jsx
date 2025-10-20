import React from "react";

const OrderSummary = ({ subtotal = 0, shipping = 15, onCheckout }) => {
  // Calculate free shipping threshold
  const freeShippingThreshold = 200;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const finalShipping = isFreeShipping ? 0 : shipping;
  const total = subtotal + finalShipping;

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 sticky top-4">
      <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-3">
        Order Summary
      </h2>

      {/* Order Details */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-gray-700">
          <span className="text-base">Subtotal:</span>
          <span className="font-semibold text-gray-900">
            GH₵{subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between text-gray-700">
          <span className="text-base">Shipping:</span>
          <span
            className={`font-semibold ${isFreeShipping ? "text-green-600" : "text-gray-900"}`}
          >
            {isFreeShipping ? "FREE" : `GH₵${shipping.toFixed(2)}`}
          </span>
        </div>

        {/* Free Shipping Progress */}
        {!isFreeShipping && (
          <div className="bg-gray-50 rounded-lg p-3 mt-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <svg
                className="w-4 h-4 text-green-600"
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
              <span>
                Add GH₵{(freeShippingThreshold - subtotal).toFixed(2)} for free
                shipping!
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min((subtotal / freeShippingThreshold) * 100, 100)}%`,
                }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between items-center text-gray-900">
          <span className="text-lg font-bold">Total:</span>
          <span className="text-xl font-bold text-green-700">
            GH₵{total.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Including VAT where applicable
        </p>
      </div>

      {/* Checkout Button */}
      <button
        onClick={onCheckout}
        disabled={subtotal === 0}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg flex items-center justify-center gap-2"
      >
        <span className="text-base">Proceed to Checkout</span>
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Security Features */}
      <div className="mt-6 space-y-3 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-green-600 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <span>Secure SSL encrypted checkout</span>
        </div>

        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-green-600 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span>Easy returns within 7 days</span>
        </div>

        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-green-600 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <span>Your payment info is safe with us</span>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center mb-2">We accept:</p>
        <div className="flex justify-center items-center gap-3">
          <div className="bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-600">
            Visa
          </div>
          <div className="bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-600">
            Mastercard
          </div>
          <div className="bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-600">
            Mobile Money
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
