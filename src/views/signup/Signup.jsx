import { authSignUp } from 'components/async_redux/authOperators';
import { getInfo } from 'components/async_redux/selectors';
import Form from 'components/form/Form';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function Signup() {
  const dispatch = useDispatch();
  const userInfo = useSelector(getInfo);

  const onSignUpSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch(authSignUp({ name, email, password }));
  };

  return (
    <div>
      {JSON.stringify(userInfo) === '{}' ? (
        <Form title={'Sign Up'} handleForm={onSignUpSubmit}></Form>
      ) : (
        <Navigate to={'/login'} replace />
      )}
    </div>
  );
}

export default Signup;
