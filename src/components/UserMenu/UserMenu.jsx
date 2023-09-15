import React from 'react'
import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div className={css.wrapper}>
          <p className={css.username}>Welcome, {user.name}</p>
          <button type="button" onClick={() => dispatch(logOut())}>
            Logout
          </button>
        </div>
      );
}

export default UserMenu
