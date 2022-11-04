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
  
  const {
      state,
      dispatch
  } = useApplicationData();
    const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
));
return (
<div className="App" >
  <Navbar />
  {/* <h1> Users </h1> */}
  <br />
  <br />
  <br />
  <Welcome />
  
  {/* <ul> {userList} </ul> */}
      <Translate />

      <Footer />
</div >
);
};

export default App;

