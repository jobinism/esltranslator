import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import jarret from '../images/jarret.png';
import simran from '../images/simran.png';
import './About.css';

const iconOne = (
  <Paper sx={{ m: 1, borderRadius: 50  }} elevation={6}>
  <Box sx={{ width: 100, height: 100}}>
    <Box >
    <a href='https://github.com/jobinism'><img src={jarret} style={{ width: 100, height: 100, borderRadius: 50}} /></a>
    <h5>Jarret Coyle</h5>
    </Box>

  </Box>
</Paper>

);

const iconTwo = (
  <Paper sx={{ m: 1, borderRadius: 50  }} elevation={6}>
    <Box sx={{ width: 100, height: 100}}>
      <Box >
      <a href='https://github.com/SimRai32'><img src={simran} style={{ width: 100, height: 100, borderRadius: 50}} /></a>
      <h5>Simran Kalirai</h5>
      </Box>

    </Box>
  </Paper>
);

export default function About () {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="aboutUs">
      <br />
      <h1>About Us</h1>
      <p>
        Easy English is a project for the Lighthouse Labs Web Development Bootcamp. It was created by Simran Kalirai and Jarret Coyle over the course of a week. 
      </p>
      <br />
      <p>
        The goal of this project was to create a web application that would allow users to translate any foreign language to English, while providing definitions and synonyms for words they find interesting or confusing. The project was inspired by a fellow member of our cohort, and taken on as a way to learn more about React, Microsoft Azure, and various API services.
      </p>
      <br />
      <p>
        The project is still in its early stages, and we hope to continue to improve it in the future. We hope in the near future, it will be used to make life for people learning English as a second language, a little easier.
      </p>
      <br />
      <div>
                  <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange} />}
              label="Meet The Team!"
            />
            <Box sx={{ display: 'flex' }}>
              <Grow in={checked}>{iconOne}</Grow>
              {/* Conditionally applies the timeout prop to change the entry speed. */}
              <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 1000 } : {})}
              >
                {iconTwo}
              </Grow>
            </Box>
      </div>  
      <br />
      <br />


      <p>
        The project is open source and available on{' '}
        <a href="">GitHub</a>
      </p>
      <br />
      <br />
      <br />
      <br />
    </div>
  )};