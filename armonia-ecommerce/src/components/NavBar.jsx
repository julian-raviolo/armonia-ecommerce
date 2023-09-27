import React from 'react';
import CartWidget from './CartWidget'; 
import img from './Images/logo-armonia.png'


function NavBar() {
    return (
        <nav className='navbar'>
            <img src="./logo-armonia.png" alt="Logo"/>
            <a href="/">Inicio</a>
            <a href="/acerca">Acerca de</a>
            <a href="/contacto">Contacto</a>
            <CartWidget /> {}       
        </nav>
    );
}

export default NavBar;


