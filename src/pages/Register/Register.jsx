import React from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';


import RegisterForm from 'components/RegisterForm/RegisterForm';

const Register = () => {
  

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Phone Book</h1>
          <p className="lorem">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            asperiores aperiam dicta veniam, voluptatibus aspernatur fugiat
            placeat illum quas et in velit necessitatibus quidem, piditate.
          </p>
          <span>Do you have an account</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <RegisterForm/>
          
        </div>
      </div>
    </div>
  );
};

export default Register;
