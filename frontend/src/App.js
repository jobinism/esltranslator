import './App.css';
import React from 'react';
import Translate from './components/Translate';
import AccountMenu from './components/AccountMenu';
import Popup from './components/Popover';
import { useState, useEffect } from "react";
// import Translate from './components/translate';
// import AccountMenu from './components/AccountMenu';
import Register from './components/Register';
import Log from './components/Log';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import Home from './Home';



const App = () => {
  
//   const {
//       state,
//       dispatch
//   } = useApplicationData();
//     const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
// ));
return (
<div className="App" >
  <Navbar />
  <br />
  <br />
  <br />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>

  <Footer />
</div >
);
};

export default App;

