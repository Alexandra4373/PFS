import React from "react";

const OrderReview = () => {
  const items = [
    { id: 1, name: "Wireless Headphones", price: 120, quantity: 1 },
    { id: 2, name: "Bluetooth Speaker", price: 85, quantity: 2 },
  ];

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="bg-white p-6 rounded-2xl shadow h-fit">
      <h2 className="text-xl font-semibold mb-4">Order Review</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <hr className="my-3" />
      <div className="flex justify-between text-gray-700">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-gray-700">
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-semibold text-lg mt-2">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderReview;
