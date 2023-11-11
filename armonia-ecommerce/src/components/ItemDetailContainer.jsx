import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${itemId}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        setError('Error al obtener los detalles del producto. Por favor, inténtalo de nuevo más tarde.');
        console.error('Error al obtener los detalles del producto:', error);
      }
    };

    fetchItem();
  }, [itemId]);

  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        item && <ItemDetail item={item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;




