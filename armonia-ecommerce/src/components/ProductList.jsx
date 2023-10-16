import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?category=tenis&limit=10')
      .then(response => response.json())
      .then(data => {
        setProducts(data); // Guarda los productos en el estado local del componente
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  return (
    <div className='CardsProducts'>
        {products.map(product => (
          <div className='Product'>
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className='ProductTitle'>{product.title}</div>
            <div className='ProductPrice'>Precio: ${product.price}</div>
            <div className='ProductDescription'>{product.description}</div>
          </li>
          <div className='ProductAdd'><button>Comprar</button></div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
