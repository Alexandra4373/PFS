import React from "react";

const OrderReview = ({ items = [], subtotal = 0, shipping = 15 }) => {
  const total = subtotal + shipping;
  const isFreeShipping = subtotal >= 200;
  const finalShipping = isFreeShipping ? 0 : shipping;
  const finalTotal = subtotal + finalShipping;

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 sticky top-4">
      <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
        Order Review
      </h2>

      {/* Items List */}
      <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
        {items.length === 0 ? (
          <div className="text-center py-8">
            <svg
              className="w-12 h-12 mx-auto text-gray-400 mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <p className="text-gray-500 text-sm">No items in cart</p>
          </div>
        ) : (
          items.map((item) => {
            const price = parseFloat(
              item.salePrice?.replace(/[^0-9.]/g, "") || "0"
            );
            const itemTotal = price * item.quantity;

            return (
              <div
                key={item.id}
                className="flex items-center gap-3 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
              >
                <div className="flex-shrink-0">
                  <img
                    src={item.image || "/api/placeholder/60/60"}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-lg border border-gray-200"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/60/60";
                    }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 line-clamp-2 leading-tight mb-1">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-600 mb-1">
                    Qty: {item.quantity}
                  </p>
                  <p className="text-sm font-semibold text-green-600">
                    GH₵{price.toFixed(2)}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                    GH₵{itemTotal.toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Totals */}
      <div className="space-y-3 border-t border-gray-200 pt-4">
        <div className="flex justify-between items-center text-gray-700">
          <span className="text-base">Subtotal ({items.length} items):</span>
          <span className="font-semibold text-gray-900">
            GH₵{subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center text-gray-700">
          <span className="text-base">Shipping:</span>
          <span
            className={`font-semibold ${isFreeShipping ? "text-green-600" : "text-gray-900"}`}
          >
            {isFreeShipping ? "FREE" : `GH₵${shipping.toFixed(2)}`}
          </span>
        </div>

        {/* Free Shipping Message */}
        {!isFreeShipping && subtotal > 0 && (
          <div className="bg-blue-50 rounded-lg p-3 mt-2">
            <div className="flex items-center gap-2 text-sm text-blue-700">
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Add GH₵{(200 - subtotal).toFixed(2)} more for free shipping!
              </span>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center text-lg font-bold text-gray-900 border-t border-gray-200 pt-3">
          <span>Total:</span>
          <span className="text-green-700 text-xl">
            GH₵{finalTotal.toFixed(2)}
          </span>
        </div>

        {/* Estimated Delivery */}
        <div className="bg-gray-50 rounded-lg p-3 mt-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Estimated delivery: 2-4 business days</span>
          </div>
        </div>
      </div>

      {/* Security Badge */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
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
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <span>Secure checkout • SSL encrypted</span>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
