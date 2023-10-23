import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        if (category) {
          setProducts(data.filter(product => product.category === category));
        } else {
          setProducts(data);
        }
      } catch (error) {
        setError('Error al obtener los productos. Por favor, inténtalo de nuevo más tarde.');
        console.error('Error al obtener los productos:', error);
      }
    };
  
    fetchProducts();
  }, [category]);
  

  return (
    <div className='CardsProducts'>
      {error ? (
        <div>{error}</div>
      ) : (
        products.map(product => (
          <article className='Product' key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className='ProductTitle'>{product.title}</div>
            <div>ID: {product.id}</div>
            <div className='ProductPrice'>Precio: ${product.price}</div>
            <div className='ProductDescription'>{product.description}</div>
            <div className='ProductAdd'><button>Comprar</button></div>
          </article>
        ))
      )}
    </div>
  );
};

export default ProductList;

