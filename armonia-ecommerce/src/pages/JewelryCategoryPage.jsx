import React, { useState, useEffect } from 'react';

const JewelryCategoryPage = () => {
  const [jewelryProducts, setJewelryProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJewelryProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
        const data = await response.json();
        setJewelryProducts(data);
      } catch (error) {
        setError('Error al obtener los productos de joyería. Por favor, inténtalo de nuevo más tarde.');
        console.error('Error al obtener los productos de joyería:', error);
      }
    };

    fetchJewelryProducts();
  }, []);

  return (
    <div>
      {error ? <div>{error}</div> : (
        <div>
          {jewelryProducts.map(product => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title} />
              <p>{product.description}</p>
              <p>Precio: ${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JewelryCategoryPage;
