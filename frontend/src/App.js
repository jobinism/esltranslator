import './App.css';
import Register from './components/Register';
import Log from './components/Log';
import Navbar from './components/Navbar';
import * as React from 'react';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import Home from './Home';
import {useCookies} from "react-cookie"
import WordHistory from './components/WordHistory';




const App = () => {
 
  
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
        <Route path="/history" element={<WordHistory />} />
      </Routes>
    </BrowserRouter>
  <Footer />
</div >
);
};

export default App;

