import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calcular el totalAmount cada vez que cambie el carrito
    const calculateTotalAmount = () => {
      const total = cartItems.reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0);
      setTotalAmount(total);
    };

    calculateTotalAmount();
  }, [cartItems]);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === existingItem.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, handleAddToCart, removeFromCart, totalAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;




