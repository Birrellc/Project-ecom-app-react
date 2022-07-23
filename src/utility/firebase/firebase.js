import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// initialize firestore, get a document instance, access data of a doc and set the data for a doc
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

//Database - instantiate - to do anything to the db we use 'db'
export const db = getFirestore();

//Async function that recieves user authentication logic
export const createUserDocumentFromAuth = async (userAuth) => {
  //take data from auth service nd store the data inside firestore db
  // 1) see if there is an existing doc references
  // doc info - 3 arguments - the db - the collection - an identifier eg (db, shoes, nikeairmax)
  // access the uid key and value from the userAuth object
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  // user data
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  // see if reference exists in database
  console.log(userSnapshot.exists());

  // if user data does not exist (check to see if exists)
  // 1) create/ set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    // get the diplay name and email from userAuth
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // set/create a doc with the displayName,email & created at in the db
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  // if user data does exist
  // 1) return userDocRef
  return userDocRef;
};
