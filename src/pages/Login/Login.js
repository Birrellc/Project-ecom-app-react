import React from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utility/firebase/firebase';

const Login = () => {
  // remember whenever accessing database we use async
  const logGoogleUser = async () => {
    // destruct the user from the response
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
    </div>
  );
};

export default Login;
