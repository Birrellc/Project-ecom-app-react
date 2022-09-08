import React from 'react';

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;

  /*
  CartItem {
    id,
    name,
    price,
    imageUrl,
    quantity
  }
 */

  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
