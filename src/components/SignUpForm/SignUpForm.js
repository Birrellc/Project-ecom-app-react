import { useState } from 'react';

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
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type='text'
          required
          onChange={onChangeHandler}
          name='displayName'
          value={displayName}
        />

        <label>Email</label>
        <input
          type='email'
          required
          onChange={onChangeHandler}
          name='email'
          value={email}
        />

        <label>Password</label>
        <input
          type='password'
          required
          onChange={onChangeHandler}
          name='password'
          value={password}
        />

        <label>Confim Password</label>
        <input
          type='password'
          required
          onChange={onChangeHandler}
          name='confirmPassword'
          value={confirmPassword}
        />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
