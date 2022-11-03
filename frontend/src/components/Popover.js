import { Popover, Typography } from '@mui/material';
import * as React from 'react';
import LoadingAnimation from './LoadingAnimation';

const Popup = (props) => {
  // declaring state variables
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [definition, setDefinition] = React.useState(LoadingAnimation);
  
  // urls for the fetch requests
  const url =`https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`;
  const transUrl = `https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&to%5B0%5D=${props.language}&textType=plain&profanityAction=NoAction`;

  // setting up fetch request for a word definition
  const options = {
    method: 'GET'
  };

  // function is run when clicked
  const handleClick = (event) => {
    // sets the popover anchor to the current element
    setAnchorEl(event.currentTarget);
      // retrieving the definition of the word
      fetch(url, options)
      // convert the data retrieved in a json
      .then(res => res.json())
      .then(json => {
        const def = json[0].meanings[0].definitions[0].definition;
        // setting up the fetch request to translate the definition
        const transOptions= {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
          },
          body: `[{"Text":"${def}"}]`
        };
        return transOptions;
      })
      .then((transOptions) => {
        // fetching the translation of the definition in the user's native language
        return fetch(transUrl, transOptions);
      })
      .then(response => response.json())
      .then(response => {
        const translatedDef = response[0].translations[0].text;
        // definition set to the translated definition
        setDefinition(translatedDef);
      })
      .catch(err => console.error('error:' + err));
  };

  // function closes popover
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <p onClick={handleClick}>
        {props.word}
      </p>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>{definition}</Typography>
      </Popover>
    </div>
  );
}

export default Popup;