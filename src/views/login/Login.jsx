import { authlogin } from 'components/async_redux/authOperators';
import { getInfo } from 'components/async_redux/selectors';
import Form from 'components/form/Form';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();

  const userInfo = useSelector(getInfo);

  const onLoginSubmit = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch(authlogin({ email, password }));
  };
  return (
    <div>
      {JSON.stringify(userInfo) === '{}' ? (
        <Form title={'Login'} handleForm={onLoginSubmit}></Form>
      ) : (
        <Navigate to={'/phonebook'} replace />
      )}
    </div>
  );
}

export default Login;
