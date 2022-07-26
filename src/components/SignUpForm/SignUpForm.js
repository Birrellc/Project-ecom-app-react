import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utility/firebase/firebase';
import './SignUpForm.scss';
import Button from '../Button/Button';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

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

    // spread previous state
    // update the correct field using [] takes the value from name and apply it then assign value
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your Email and Password</span>
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

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
