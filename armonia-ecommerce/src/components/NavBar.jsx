import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'; 
import ItemCount from './ItemCount';
import Cart from './Cart';

function NavBar() {
  const [cartItemCount, setCartItemCount] = useState(0); 

  return (
    <nav className='navbar'>
      <Link to="/">
        <img className='Logo' src="https://armoniagospel.com/wp-content/uploads/2023/08/armonia-logo-blanco-768x218.png" alt="logo" />
      </Link>
      <Link to="/">Inicio</Link>
      <Link to="/category/electronics">Electronicos</Link> 
      <Link to="/category/jewelery">Joyas</Link> 
      <CartWidget itemCount={cartItemCount} />

    </nav>
  );
}

export default NavBar;




