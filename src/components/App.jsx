import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';


import { useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/contacts/operations';
import { lazy, useEffect } from 'react';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';


const HomePage = lazy(() => import("../pages/Home/Home"));
const RegisterPage = lazy(() => import ("../pages/Register/Register"));
const LoginPage = lazy(() => import ("../pages/Login/Login"));
const ContactPage = lazy(() => import("../pages/Contacts/Contacts"));



export const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth();
 
 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return  isRefreshing ? (
    <b>Refreshing user ...</b>) : (
    
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/login" component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        />
        <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
   
  );
};
