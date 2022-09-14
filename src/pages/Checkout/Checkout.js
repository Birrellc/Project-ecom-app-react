import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import './Checkout.scss';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header'>
          <span>Product</span>
        </div>
        <div className='header'>
          <span>Description</span>
        </div>
        <div className='header'>
          <span>Quantity</span>
        </div>
        <div className='header'>
          <span>Price</span>
        </div>
        <div className='header'>
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className='total'>Total: 0</span>
    </div>
  );
};

export default Checkout;
