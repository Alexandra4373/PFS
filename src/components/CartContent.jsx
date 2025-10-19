import React, { createContext, useContext, useState } from "react";

// Create a context for the cart
const CartContext = createContext();

// CartProvider component to wrap around your app
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ➕ Add item to cart
  function addToCart(product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // Increase quantity if product already exists
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product with quantity = 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  // ❌ Remove item from cart
  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  // 🔄 Update item quantity
  function updateQuantity(id, change) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  }

  // Context value to be shared
  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Custom hook for using cart context
function useCart() {
  return useContext(CartContext);
}

export { CartProvider, useCart };
