import React from 'react';

function CartWidget() {
  const itemCount = 5; 
    return (
        <div className="cart-widget">
          <a  href="https://icons8.com/icon/9671/carrito-de-compras"></a>
          <span className="item-count">{itemCount}</span>
        </div>
    );
}

export default CartWidget;
