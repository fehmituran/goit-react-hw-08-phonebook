import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {

   const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })  
        );
        form.reset();
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" name='email' />
      <input type="password" placeholder="Password" name='password' />
      <button  type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
