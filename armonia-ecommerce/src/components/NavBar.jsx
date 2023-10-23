import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'; 

function NavBar() {
  return (
    <nav className='navbar'>
      <Link to="/">
        <img className='Logo' src="https://armoniagospel.com/wp-content/uploads/2023/08/armonia-logo-blanco-768x218.png" alt="logo" />
      </Link>
      <Link to="/">Inicio</Link>
      <Link to="/acerca">Acerca de</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/category/electronics">Electronicos</Link> 
      <Link to="/category/jewelery">Joyas</Link> 
      <CartWidget />       
    </nav>
  );
}

export default NavBar;




