import React from 'react';
import { signInWithGooglePopup } from '../../utility/firebase/firebase';

const Login = () => {
  // remember whenever accessing database we use async
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
    </div>
  );
};

export default Login;
