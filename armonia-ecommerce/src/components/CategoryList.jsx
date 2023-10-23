import React, { useState, useEffect } from 'react';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data); // Guarda las categorías en el estado local del componente
      } catch (error) {
        setError('Error al obtener las categorías. Por favor, inténtalo de nuevo más tarde.');
        console.error('Error al obtener las categorías:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        <ul>
          {categories.map(category => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryList;



