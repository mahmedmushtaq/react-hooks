import React from 'react';
import InputController from './InputController';

export default (props) => {
  const [signUpForm, setSignUpForm] = React.useState({
    first_name: '',
    last_name: '',
  });
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeValue = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSignUp = (e) => {
    e.preventDefault();
    console.log('value is = ', {
      ...signUpForm,
      email,
      password,
    });
  };

  return (
    <div>
      <form action="" method="POST" onSubmit={onSignUp}>
        {/* don't need to validate value therefore we declare both propertyName in same object */}
        <input
          type="text"
          name="first_name"
          value={signUpForm.first_name}
          onChange={onChangeValue}
          placeholder="Firs t Name"
        />
        <br />
        {/* don't need to validate value therefore we declare both propertyName in same object */}
        <input
          type="text"
          name="last_name"
          value={signUpForm.last_name}
          onChange={onChangeValue}
          placeholder="last name"
        />

        <br />

        {/* first validate email and then update state therefore we declare separate useState for this */}
        <InputController
          value={email}
          setValue={setEmail}
          placeholder={'email'}
        />
        <br />

        {/* first validate password and then update state therefore we declare separate useState for this */}
        <InputController
          value={password}
          setValue={setPassword}
          placeholder={'password'}
        />
        <br />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
