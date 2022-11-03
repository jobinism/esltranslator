import * as React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { PropTypes } from 'prop-types';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';


const styles = theme => ({
  root:{
      flex:1
  },
  button:{
      justifyContent:'center'
  },
  languageListForm:{ 
      margin: '10px'
  }
})

function TextField(props) {



  return (
  <div>
    <Box sx={{filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))'}}>
      <TextareaAutosize
        aria-label="empty textarea"
        minRows={3}
        placeholder="Translate Here!"
        style={{ width: 300 }}
      />
    </Box>
  </div>
  );
}


export default TextField;