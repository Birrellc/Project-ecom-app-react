import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';

import './Login.scss';

const Login = () => {
  return (
    <div className='test'>
      <div className='login-container'>
        <SignInForm />
        <SignUpForm />
      </div>
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
