import React from 'react';

function CartWidget() {
  const itemCount = 0; 
    return (
        <div className="Carrito">
          <a  href=""><img src="https://i.imgur.com/ygoVAH8.png" title="Carrito" /></a>
          <span className="item-count">{itemCount}</span>
        </div>
    );
}

export default CartWidget;
