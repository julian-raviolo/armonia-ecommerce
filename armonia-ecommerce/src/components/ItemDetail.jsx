import React, { useState } from 'react';


const ItemDetail = ({ item, onAddToCart }) => {
  const [itemCount, setItemCount] = useState(1);

  const onAdd = (count) => {
    setItemCount(count);
  };

  return (
    <div>
      {item ? (
        <div>
          <article className='Product' key={item.id}>
            <img src={item.image} alt={item.title} />
            <div >{item.title}</div>
            <div>ID: {item.id}</div>
            <div >Precio: ${item.price}</div>
            <div>{item.description}</div>
          </article>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetail;




