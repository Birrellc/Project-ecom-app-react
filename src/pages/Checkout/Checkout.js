import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart';
import './Checkout.scss';

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout Page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>-</span>
              <span>{quantity}</span>
              <span onClick={() => addItemToCart(cartItem)}>+</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
