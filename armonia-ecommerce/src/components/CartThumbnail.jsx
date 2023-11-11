import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const CartThumbnail = () => {
  const { cartItems, totalAmount } = useContext(CartContext);

  return (
    <div className="cart-thumbnail">
      <h4>Carrito en miniatura</h4>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - Cantidad: {item.quantity} - Precio: ${item.price}
          </li>
        ))}
      </ul>
      <p>Total a pagar: ${totalAmount}</p>
      <Link to="/cart">Ver Carrito</Link>
    </div>
  );
};

export default CartThumbnail;
