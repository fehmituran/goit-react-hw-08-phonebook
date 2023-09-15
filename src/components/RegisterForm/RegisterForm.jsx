import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';


const RegisterForm = () => {
  const dispatch = useDispatch();
 

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Formik>
      <Form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="Username" name="name" />
        </label>
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type='submit'>Register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
