import React, { useState, useEffect } from 'react';

const ElectronicsCategoryPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchElectronicsProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/category/electronics');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError('Error al obtener los productos de electrónicos. Por favor, inténtalo de nuevo más tarde.');
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchElectronicsProducts();
  }, []);

  return (
    <div>
      {error ? <div>{error}</div> : (
        <div>
          <h2>Productos de Electrónicos</h2>
          {products.map(product => (
            <div key={product.id}>
              {/* Muestra los detalles del producto */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ElectronicsCategoryPage;
