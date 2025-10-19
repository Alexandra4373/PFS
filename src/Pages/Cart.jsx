import React, { useState } from "react";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Mango Powder",
      price: 45,
      quantity: 2,
      image: "/images/mango.png",
    },
    {
      id: 2,
      name: "Instant Rice Porridge",
      price: 30,
      quantity: 1,
      image: "/images/rice.png",
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 15;

  return (
    <div className="bg-white min-h-screen p-4 md:p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">
          Shopping Cart
        </h1>
        <p className="text-gray-500 mb-6">
          <Link to="/" className="text-orange-600 hover:underline">
            Home
          </Link>{" "}
          / Cart
        </p>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 mt-20 text-lg">
            Your cart is empty.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-5">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemove}
                />
              ))}
            </div>

            {/* Order Summary */}
            <OrderSummary subtotal={subtotal} shipping={shipping} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
