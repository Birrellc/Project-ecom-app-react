import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import './CartDropdown.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {/* need to map the data onto the page */}
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
