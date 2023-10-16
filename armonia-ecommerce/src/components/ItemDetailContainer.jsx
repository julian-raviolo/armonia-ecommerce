import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { itemId, categoryId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {

    const fetchItem = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${itemId}`);
        const data = await response.json();
        setItem(data); // Detalles del producto en el estado local del componente
      } catch (error) {
        console.error('Error al obtener los detalles del producto:', error);
      }
    };

    fetchItem();
  }, [itemId]);
  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>
      <p>Categoría: {categoryId}</p> 
      <p>Precio: ${item.price}</p>
    </div>
  );
};

export default ItemDetailContainer;

