import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Phonebook } from 'views';

export default function PrivateRoutes() {
  const isLoggedIn = useSelector(state => state.auth.authInfo);
  return JSON.stringify(isLoggedIn) !== '{}' ? (
    <Phonebook />
  ) : (
    <Navigate to={'/'} replace />
  );
}
