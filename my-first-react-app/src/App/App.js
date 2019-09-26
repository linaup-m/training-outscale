import React from 'react';
import logo from './logo.png';
import LoginForm from '../LoginForm/LoginForm';
import './reset.sass';
import './App.css';
import { changeEmail } from '../actions/users.actions';


function App(props) {

  const changeEmail = (email) => {
    props.changeEmail(email);
  }

  const changePassword = (password) => {
    props.changePassword(password);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <LoginForm 
        onUpdateEmail={email => changeEmail(email)} 
        onUpdatePassword={password => changePassword(password)}
        />
    </div>
  );
}

export default App;
