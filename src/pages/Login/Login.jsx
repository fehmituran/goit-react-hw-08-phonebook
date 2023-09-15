import React from 'react'
import "./Login.scss"
import { Link } from "react-router-dom";
import LoginForm from 'components/LoginForm/LoginForm';


const Login = () => {
  
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
            <h1>Hello World</h1>
            <p className="lorem">Lorem, ipsum dolor sit amet 
            consectetur adipisicing elit. Porro asperiores 
            aperiam dicta veniam, voluptatibus aspernatur 
            fugiat placeat illum quas et in velit necessitatibus 
            quidem, piditate.</p>
            <span>Don't you have an account</span>
            <Link to="/register">
            <button >Register</button>
            </Link>
           

        </div>
        <div className="right">
            <h1>Login</h1>
            <LoginForm/>

        </div>
      </div>
    </div>
  )
}

export default Login
