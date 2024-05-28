import { Navbar } from 'components/navbar/Navbar';
import React from 'react';
import './Home.css';
import { useSelector } from 'react-redux';
import { getInfo } from 'components/async_redux/selectors';
import { Navigate } from 'react-router-dom';
function Home() {
  const userInfo = useSelector(getInfo);

  return (
    <div className="container">
      {JSON.stringify(userInfo) === '{}' ? (
        <div className="title p-2 border">
          <hr />
          <h1>Welcome to Phonebook</h1>
          <hr />
          <Navbar></Navbar>
        </div>
      ) : (
        <Navigate to={'/phonebook'} replace />
      )}
    </div>
  );
}

export default Home;
