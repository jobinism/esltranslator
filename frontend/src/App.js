import './App.css';
import Translate from './components/Translate';
import AccountMenu from './components/AccountMenu';
import Popup from './components/Popover';
// import Translate from './components/translate';
// import AccountMenu from './components/AccountMenu';
import Register from './components/Register';
import Log from './components/Log';
import Navbar from './components/Navbar';
import * as React from 'react';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import Home from './Home';
import {useCookies} from "react-cookie"
import WordHistory from './components/WordHistory';
import About from './components/About';



const App = () => {
  // const [cookies, setCookie] = useCookies([]);
  // useEffect(() => {
  //   setCookie('user_id', 1, { path: '/' });
  // }, []);
  
return (
<div className="App" >
    <Navbar />
  <br />
  <br />
  <br />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Log />} />
        <Route path="/account" element={<WordHistory />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  <Footer />
</div >
);
};

export default App;

