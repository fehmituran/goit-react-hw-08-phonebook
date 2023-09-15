import React from 'react'
import { Link } from './AuthNav.styled'

const AuthNav = () => {
  return (
    <nav>
    <Link to="/register">Register</Link>
    <Link to="/login">Log In</Link>
  </nav>
  )
}

export default AuthNav
