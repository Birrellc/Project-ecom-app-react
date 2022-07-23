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
