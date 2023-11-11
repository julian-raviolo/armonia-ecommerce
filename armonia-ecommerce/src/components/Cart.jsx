import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, totalAmount } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <div className="cart-items">
        {/*Items seleccioandos */}
      </div>
      <p>Total a pagar: ${totalAmount}</p>
      <Link to="/checkout">
        <button>Finalizar Compra</button>
      </Link>
    </div>
  );
};

export default Cart;