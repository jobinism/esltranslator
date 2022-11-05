import './App.css';
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



const App = () => {
  
  
return (
<div className="App" >
  <Navbar />
  <br />
  <br />
  <br />
  <Welcome />
  
  
      <Translate />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
</div >
);
};

export default App;

