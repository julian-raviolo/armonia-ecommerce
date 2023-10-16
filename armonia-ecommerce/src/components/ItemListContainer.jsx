import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { itemId, categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products?category=${categoryId}`);
        const data = await response.json();
        setProducts(data); 
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div style={containerStyle}>
      <div>
      </div>
    </div>
  );
};

const containerStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f0f0f0',
};

const greetingStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
};

export default ItemListContainer;
