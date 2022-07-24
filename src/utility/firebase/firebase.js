import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
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
const googleProvider = new GoogleAuthProvider();

// rules - must select an account
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// authentication instance exported to app - singleton - always the same rules so no need to create new classes
export const auth = getAuth();

// google sign in popup which returns signInWithPopup function with auth and provider passed in
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Sign in With Redirect
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

//Database - instantiate - to do anything to the db we use 'db'
export const db = getFirestore();

//Async function that recieves user authentication logic
// // addictionalInfo is empty object but when displayName is null we overwrite with the object data
// // displayName comes from signup form so need to add to database as google needs a name
export const createUserDocumentFromAuth = async (
  userAuth,
  // Empty object
  additionalInfo = {}
) => {
  // if no userAuth return out of the function
  if (!userAuth) return;
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
      // if displayName exists on userAuth set
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        // if no displayName will set to null so spread the additionalinfo on top to overwrite null to the actual displayName
        ...additionalInfo,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  // if user data does exist
  // 1) return userDocRef
  return userDocRef;
};

// Create user with email and password
// crete an authenticated user inside firebase authentication
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  // if either email or password is missing return out of function
  if (!email || !password) return;
  // do not confuse with createAuhUserWithEmailAndPassowrd - will cause a loop
  return await createUserWithEmailAndPassword(auth, email, password);
};
