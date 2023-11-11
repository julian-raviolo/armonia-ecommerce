import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item'; 

const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        if (id) {
          const filteredProducts = data.filter(product => product.category.toLowerCase() === id.toLowerCase());
          setProducts(filteredProducts);
        } else {
          setProducts(data);
        }
      } catch (error) {
        setError('Error al obtener los productos. Por favor, inténtalo de nuevo más tarde.');
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
  }, [id]);

  const handleAddToCart = (item) => {
    console.log('Añadir al carrito:', item);
  };

  return (
    <div>
      {error ? <div>{error}</div> : (
        <div className='CardsProducts'>
          {products.map(product => (
            <Item key={product.id} item={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;








