import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Item = ({ item }) => {
  const { id, title, price, image } = item;
  const { handleAddToCart, cartItems } = useContext(CartContext);

  const handleAddToCartClick = () => {
    handleAddToCart(item);
  };

  const cartItem = cartItems.find((cartItem) => cartItem.id === id);
  const itemCount = cartItem ? cartItem.quantity : 0;

  return (
    <article className="Product">
      <img src={image} alt={title} />
      <h3 className='ProductTitle'>{title}</h3>
      <div className='ProductPrice'><p>Precio: ${price}</p></div>
      <button onClick={handleAddToCartClick}>Agregar al Carrito</button>
    </article>
  );
};

export default Item;
