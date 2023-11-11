import React, { useContext, useState } from 'react';
import CartContext from '../components/CartContext';

const Checkout = () => {
  const { cartItems, totalAmount } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expDate: '',
    cvc: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Formulario enviado:', formData);
    // Aquí puedes realizar cualquier lógica adicional necesaria con los datos del formulario.
  };

  return (
    <div className="checkout-container">
      <h2><b>Finaliza tu compra</b></h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="address">Dirección de envío:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        ></textarea>
        <label htmlFor="cardNumber">Número de tarjeta:</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
          required
        />
          <div className='input-tarjeta'>
              <label htmlFor="expDate">Fecha de expiración:</label>
              <input
                type="text"
                id="expDate"
                name="expDate"
                value={formData.expDate}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="cvc">CVC:</label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                value={formData.cvc}
                onChange={handleInputChange}
                required
              />
          </div>
        
      </form>
      <div className="checkout-summary">
        <hr />
        <h3>Resumen del carrito:</h3>
        {cartItems && Array.isArray(cartItems) ? (
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Producto</th>
                <th>Unidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.image} alt={item.title} className="checkout-img" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
        <hr />
        <p><b>Total a pagar: ${totalAmount}</b></p>
      </div>
      <button className='button-pagar' type="submit">Realizar pago</button>
    </div>
  );
};

export default Checkout;



