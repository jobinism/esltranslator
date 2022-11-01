import './App.css';
import { useState, useEffect } from "react";
import useApplicationData from './Hooks/useEffect';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import Dictaphone from './components/micTest';

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
  const [open, setOpen] = React.useState(false);
  const [aud, setAud] = useState();
  // const reply = axios.request(options);
  // reply.then(res => {setAud(res.data)});
  // console.log(aud);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="pass"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      <Dictaphone/>
</div >
);
};

export default App;

