import React from 'react';
import { Link } from 'react-router-dom';

const SecondaryNavBar = () => {
  return (
    <nav className='SecondaryNavBar'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/item/:id">Tipo Producto</Link>
        </li>
        <li>
          <Link to="/category/:categoryId">Categoria</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SecondaryNavBar;
