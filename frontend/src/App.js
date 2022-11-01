import './App.css';
import { useState, useEffect } from "react";
import useApplicationData from './Hooks/useEffect';
import * as React from 'react';
import Translate from './components/translate';


const encodedParams = new URLSearchParams();
encodedParams.append("f", "8khz_8bit_mono");
encodedParams.append("c", "mp3");
encodedParams.append("r", "0");
encodedParams.append("hl", "en-us");
encodedParams.append("src", "Hello, world!");
encodedParams.append("b64", true);

const options = {
  method: 'POST',
  url: 'https://voicerss-text-to-speech.p.rapidapi.com/',
  params: {key: 'a9a3766b578a4fc5b1f61e79e32f9430'},
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '99129ff186msh350496067e563f8p1154adjsnb260d0841d43',
    'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
  },
  data: encodedParams
};



const App = () => {
  const [aud, setAud] = useState();
  // const reply = axios.request(options);
  // reply.then(res => {setAud(res.data)});
  // console.log(aud);
  

  const start = () => {
    document.getElementById('audio').play();
  }
  
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
      <Translate />
</div >
);
};

export default App;

