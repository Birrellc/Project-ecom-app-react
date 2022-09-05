import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { CartContext } from '../../contexts/Cart';
import { UserContext } from '../../contexts/User';
import { signOutUser } from '../../utility/firebase/firebase';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';
import './Navigation.scss';

const Navigation = () => {
  // recieve value of current user from UserContext
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrownLogo className='logo' />
        </Link>

        <div className='links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              LOG OUT
            </span>
          ) : (
            <Link className='nav-link' to='/login'>
              LOGIN
            </Link>
          )}
          <CartIcon />
        </div>
        {/* logic - both sides have to evaluate true to work */}
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
