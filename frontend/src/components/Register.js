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
async function postData(url = '', data = {}) {
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
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const Register = () => {

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const validate = (event) => {
    event.preventDefault()

  const data = { 
    first_name: 'Jarret',
    last_name: 'Coyle',
    email: 'jarretcoyle@gmail.com',
    password: 'password' }
    postData('/api/users', data)
    .then((data) => {
      console.log(data, "successful post request"); // JSON data parsed by `data.json()` call
    });
  

    console.log('hello validated')
    // setError("");
    // onSave(student, interviewer);
  };



    return (
      <div>
        <br />
        <br />
        <Box sx={{backgroundColor: '#116ac2', borderRadius: 10, marginLeft: 5, marginRight: 5, filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))'}}>
          <br />
            <h1 style={{color: '#FFFFFF'}}> Register </h1>

          <form onSubmit={validate} autoComplete="off">
            <FormControlUnstyled defaultValue="" required>
              <FormLabel style={{color: '#FFFFFF'}}>First Name:</FormLabel>
              <Input sx={{width: 215}} />
              <FormHelperText />
            </FormControlUnstyled>
            <FormControlUnstyled defaultValue="" required>
              <FormLabel style={{color: '#FFFFFF'}}>Last Name:</FormLabel>
              <Input sx={{width: 215}} />
              <FormHelperText />
            </FormControlUnstyled>
            <FormControlUnstyled defaultValue="" required>
              <FormLabel style={{color: '#FFFFFF'}}>Email:</FormLabel>
              <Input sx={{width: 250}} />
              <FormHelperText />
            </FormControlUnstyled>
            <FormControlUnstyled defaultValue="" required>
              <FormLabel style={{color: '#FFFFFF'}}>Password:</FormLabel>
              <Input sx={{width: 225}} />
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

      <h2>Already have an acount? <a href="/login">Login here</a></h2>

      </div>
    )
}
export default Register;