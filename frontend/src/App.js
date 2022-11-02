import React from 'react';
import './App.css';
import useApplicationData from './Hooks/useEffect'
import TextField from '../src/components/TextField';
import Login from './components/Login';
const App = () => {
  const {
      state,
      dispatch
  } = useApplicationData();
    const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
));
return (<div className="App" >
  <h1> Users </h1>
  <Login  />
  <br />
  <TextField />

  <ul> {userList} </ul>
</div >
);
};

export default App;
