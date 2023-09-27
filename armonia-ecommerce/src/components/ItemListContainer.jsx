import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div style={containerStyle}>
        <p style={greetingStyle}>{greeting}</p>
        </div>
    );
};

// Estilos en línea para el contenedor y el mensaje
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
