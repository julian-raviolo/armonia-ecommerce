import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext';

const CartWidget = () => {
  const { itemCount, cartItems, removeFromCart, totalAmount } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="Carrito">
      {isOpen && (
        <div className="cart-thumbnail">
          <button className="close-button" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h4><b>Resumen del Carrito</b></h4>
          <hr />
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Producto</th>
                <th>Unidad</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td><img src={item.image} alt={item.name} className="cart-item-image" /></td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td><button onClick={() => removeFromCart(item)}><FontAwesomeIcon icon={faTrash} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />
          <p className='total-amount'>Total: ${totalAmount}</p>
          <p>
            <Link to="/checkout">Finalizar Pedido</Link>
          </p>
        </div>
      )}
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faShoppingCart} color="white" size="1x" />
        <span className="item-count">{itemCount}</span>
      </button>
    </div>
  );
};

export default CartWidget;










