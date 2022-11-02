import React, { useState, useRef, useEffect } from "react";
import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import { useFormControlUnstyledContext } from '@mui/base/FormControlUnstyled';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import { borderRadius } from "@mui/system";
import { Button } from "@mui/material";

//Create a login form that adds to our database, First Name, Last Name, Email and Password


const Register = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
    return (
        <Box sx={{backgroundColor: '#ba000d', borderRadius: 10, marginLeft: 5, marginRight: 5, filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))'}}>
          <br />
            <h1> Register </h1>

          <FormControlUnstyled defaultValue="" required>
            <FormLabel>First Name:</FormLabel>
            <Input sx={{width: 215}} />
            <FormHelperText />
          </FormControlUnstyled>
          <FormControlUnstyled defaultValue="" required>
            <FormLabel>Last Name:</FormLabel>
            <Input sx={{width: 215}} />
            <FormHelperText />
          </FormControlUnstyled>
          <FormControlUnstyled defaultValue="" required>
            <FormLabel>Email:</FormLabel>
            <Input sx={{width: 250}} />
            <FormHelperText />
          </FormControlUnstyled>
          <FormControlUnstyled defaultValue="" required>
            <FormLabel>Password:</FormLabel>
            <Input sx={{width: 225}} />
            <FormHelperText />
          </FormControlUnstyled>
          <Button sx={{color: '#000000', flexDirection: 'row', alignItems: 'end'}} variant='outlined' color='inherit'> Submit </Button>
          <br />
          <br />

      </Box>
    )
}
export default Register;