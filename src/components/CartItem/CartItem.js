import React from 'react';

import './CartItem.scss';

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

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
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x £{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
