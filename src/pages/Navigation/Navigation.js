import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/User';
import { signOutUser } from '../../utility/firebase/firebase';
import './Navigation.scss';

const Navigation = () => {
  // recieve value of current user from UserContext
  const { currentUser, setCurrentUser } = useContext(UserContext);
  // setCurrentUser to null on logout
  const signOutHandler = async () => {
    // track auth state of user
    await signOutUser();
    setCurrentUser(null);
  };
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
            <span className='nav-link' onClick={signOutHandler}>
              LOG OUT
            </span>
          ) : (
            <Link className='nav-link' to='/login'>
              LOGIN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
