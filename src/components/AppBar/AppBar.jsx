import React from 'react'
import css from './AppBar.module.css';
import Navigation from 'components/Navigation/Navigation'
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import UserMenu from 'components/UserMenu/UserMenu';

const AppBar = () => {

  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
        <Navigation/>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
 
    </header>
  )
}

export default AppBar
