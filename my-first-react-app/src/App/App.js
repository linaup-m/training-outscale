import React from 'react';
import logo from './logo.png';
import LoginForm from '../LoginForm/LoginForm';
import './reset.sass';
import './App.css';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <LoginForm/>
    </div>
  );
}

export default App;
