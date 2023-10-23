import React from 'react';
import { Link } from 'react-router-dom';


const SecondaryNavBar = ({ categories, itemId }) => {
  if (!categories || !Array.isArray(categories)) {
    // Manejar el caso cuando categories es undefined o no es un array
    return <div>No hay categorías disponibles</div>;
  }

  return (
    <nav className='SecondaryNavBar'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {itemId && (
          <li>
            <Link to={`/item/${itemId}`}>Tipo Producto</Link>
          </li>
        )}
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SecondaryNavBar;




