import React from 'react';

function CartWidget({ itemCount }) {
  return (
    <div className="Carrito">
      <a href="">
        <img src="https://i.imgur.com/ygoVAH8.png" alt="Carrito" />
      </a>
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

export default CartWidget;
