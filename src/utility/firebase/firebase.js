import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyARA2pifyktFTOl0y6SM2HCG6ybutu0W4Q',
  authDomain: 'ecom-app-db-a3213.firebaseapp.com',
  projectId: 'ecom-app-db-a3213',
  storageBucket: 'ecom-app-db-a3213.appspot.com',
  messagingSenderId: '1028307236048',
  appId: '1:1028307236048:web:f6ede98f918d74054d9ad5',
  measurementId: 'G-7KDWFHSBTE',
};

const app = initializeApp(firebaseConfig);

// initialize a provider - create a new provider class - eg if you sign in normally or redirect
const provider = new GoogleAuthProvider();

// rules - must select an account
provider.setCustomParameters({
  prompt: 'select_account',
});

// authentication instance exported to app - singleton - always the same rules so no need to create new classes
export const auth = getAuth();

// google sign in popup which returns signInWithPopup function with auth and provider passed in
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
