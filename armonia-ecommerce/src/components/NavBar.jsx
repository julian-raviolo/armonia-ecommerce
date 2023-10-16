import React from 'react';
import CartWidget from './CartWidget'; 


function NavBar() {
    return (
        <nav className='navbar'>
            <a href=""><img className='Logo' src="https://armoniagospel.com/wp-content/uploads/2023/08/armonia-logo-blanco-768x218.png" title="source: imgur.com" /></a>
            <a href="/">Inicio</a>
            <a href="/acerca">Acerca de</a>
            <a href="/contacto">Contacto</a>
            <CartWidget /> {}       
        </nav>
    );
}

export default NavBar;


