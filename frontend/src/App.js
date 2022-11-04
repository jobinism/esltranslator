import React from 'react';
import './App.css';
import Translate from './components/Translate';
import AccountMenu from './components/AccountMenu';
import useApplicationData from './Hooks/useEffect';
import Popup from './components/Popover';
import { useState, useEffect } from "react";
// import Translate from './components/translate';
// import AccountMenu from './components/AccountMenu';
import Register from './components/Register';
import Log from './components/Log';
import WordHistory from './components/WordHistory';



const App = () => {
  
  const {
      state,
      dispatch
  } = useApplicationData();
    const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
));
return (
<div className="App" >
  <h1> Users </h1>
  
  <ul> {userList} </ul>
      <WordHistory />
</div >
);
};

export default App;

