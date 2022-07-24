import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utility/firebase/firebase';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Password does not match');
      return;
    }
    try {
      // destructure user from the response object - recieve email and password
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // create user document with the user an object wit the displayName value that the user would have entered in the form
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email in use');
      }
      console.log('user creation encountered an error', error);
    }
  };

  // function to gather field input data
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    // spread previous state
    // update the correct field using [] takes the value from name and apply it then assign value
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your Email and Password</h1>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={onChangeHandler}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={onChangeHandler}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={onChangeHandler}
          name='password'
          value={password}
          minLength='6'
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={onChangeHandler}
          name='confirmPassword'
          value={confirmPassword}
          minLength='6'
        />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
