import React from 'react';

const ItemDetail = ({ itemId }) => {
  // Aquí puedes implementar la lógica para obtener los detalles del producto con el ID proporcionado
  // Puedes realizar una llamada a una API o utilizar datos estáticos para obtener los detalles del producto

  // Supongamos que aquí tienes un objeto que representa los detalles del producto
  const productDetails = {
    id: itemId,
    name: 'Nombre del Producto',
    description: 'Descripción del producto',
    price: 10.99, // Precio del producto
    // ... otros detalles del producto
  };

  return (
    <div>
      <h2>Detalles del producto con ID: {productDetails.id}</h2>
      <h3>Nombre: {productDetails.name}</h3>
      <p>Descripción: {productDetails.description}</p>
      <p>Precio: ${productDetails.price}</p>
      {/* Otras propiedades del producto */}
    </div>
  );
};

export default ItemDetail;
