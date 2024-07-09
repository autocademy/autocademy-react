import React, {useState, useEffect} from 'react'
import AppRoutes from './Routes';
import './App.css';

function App() {

  const handleLoginClick = () => {
    // implementation of the action when the button is clicked
    console.log('login btn has been clicked');
  };

  const handleSignUpClick = () => {
    // implementation of the action when the button is clicked
    console.log('signup btn has been clicked');
  };

  return (
    <AppRoutes />
  );
}

export default App;
