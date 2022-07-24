import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utility/firebase/firebase';

import SignUpForm from '../../components/SignUpForm/SignUpForm';

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
      <SignUpForm />
    </div>
  );
};

export default Login;

// **** This code was created to experiment with login methods ****
// *** Sign in with google redirect ***
// when we come back application remount
// on mount run the below callback
// which gets the response from the redirect that just happened via tracking the auth
// useEffect(() => {
//   async function fetchData() {
//     const response = await getRedirectResult(auth);
//     console.log(response);
//     if (response) {
//       // if response create user in the db from the response.user
//       const userDocRef = await createUserDocumentFromAuth(response.user);
//     }
//   }
//   fetchData();
// }, []);
