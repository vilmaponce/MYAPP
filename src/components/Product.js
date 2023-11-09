import React, { useState } from 'react';
import QuantityControl from './QuantityControl';
import Message from './Message';

const Product = ({ product }) => {
  const [message, setMessage] = useState(null);

  const handleQuantityChange = (newQuantity) => {
    setMessage(`Cantidad actualizada a ${newQuantity}`);
  };

  return (
    <div>
      <p><strong>Nombre:</strong> {product.name}</p>
      <p><strong>Descripción:</strong> {product.description}</p>
      <p><strong>Precio:</strong> {product.price}</p>
      <p><strong>SKU:</strong> {product.sku}</p>
      <p><strong>Cantidad Disponible:</strong> 
        <QuantityControl
          initialQuantity={parseInt(product.quantityAvailable, 10)}
          onChange={handleQuantityChange}
        />
      </p>
      {message && <Message text={message} />}
    </div>
  );
};

export default Product;


