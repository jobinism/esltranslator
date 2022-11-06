import React, { useState, useRef, useEffect } from "react";
import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import { useFormControlUnstyledContext } from '@mui/base/FormControlUnstyled';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import { borderRadius } from "@mui/system";
import { Button } from "@mui/material";


// Example POST method implementation:
async function getData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data)
  });
  return response.json(data); // parses JSON response into native JavaScript objects
}

const Log = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const validate = (event) => {
    event.preventDefault()
    const data = {email, password}
    getData('/', data)
    .then((data) => {
      console.log(data, "successful post request"); // JSON data parsed by `data.json()` call
    })
    .catch(err => console.error(err));
  
    // setError("");
    // onSave(student, interviewer);
  };



    return (
    <div>
      <br />
      <br />
      <Box sx={{backgroundColor: '#116ac2', borderRadius: 10, marginLeft: 5, marginRight: 5, filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))'}}>
          <br />
            <h1 style={{color: '#FFFFFF'}}> Login </h1>

          <form onSubmit={validate} autoComplete="off">
            <FormControlUnstyled defaultValue="" required>
              <FormLabel style={{color: '#FFFFFF'}}>Email:</FormLabel>
              <Input 
              sx={{width: 250}}
              onChange={ (event) => setEmail(event.target.value)}
              value={email}
              />
              <FormHelperText />
            </FormControlUnstyled>
            <FormControlUnstyled defaultValue="" required>
              <FormLabel style={{color: '#FFFFFF'}}>Password:</FormLabel>
              <Input
               sx={{width: 225}} 
               onChange={ (event) => setPassword(event.target.value)}
               value={password}
               />
              <FormHelperText />
            </FormControlUnstyled>
            <Button 
            type="submit"
            sx={{backgroundColor: '#FFFFFF', color: '#1a75d2'}}
            >Submit</Button>
          </form>
          <br />
          <br />

      </Box>

      <h2>Don't have an acount? <a href="/register">Sign up here</a></h2>
    </div>
    )
}
export default Log;