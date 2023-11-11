import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';

const ItemCount = ({ initial, stock }) => {
  const [count, setCount] = useState(initial);
  const { handleAddToCart } = useContext(CartContext);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCartClick = () => {
    console.log('Adding to cart:', count);
    handleAddToCart(count);
  };

  return (
    <div className="ItemCount">
      <button onClick={handleAddToCartClick}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;



