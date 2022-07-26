import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener } from '../utility/firebase/firebase';

// as actual value to access
// empty state of an object should usually be null
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // passes the two values of state - the value and the setter function
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
    });

    return unsubscribe;
  }, []);
  // allows any child component to access the values inside of the state above
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
