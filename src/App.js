import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import logo from './logo.svg';
import  Counter  from './components/Counter';
import './App.css';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';


function App() {

  const authSelector = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Fragment>
          {!authSelector && <Auth/>}
          {authSelector && <UserProfile/>}
          <Counter />
        </Fragment>
      </header>
    </div>
  );
}

export default App;
