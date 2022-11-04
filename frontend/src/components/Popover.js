import { Popover, Typography } from '@mui/material';
import * as React from 'react';
import LoadingAnimation from './LoadingAnimation';

const Popup = (props) => {
  // declaring state variables
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [definition, setDefinition] = React.useState(LoadingAnimation);
  const [synTrans, setSynTrans] = React.useState("");
  const [synEng, setSynEng] = React.useState("");
  // urls for the fetch requests
  const url =`https://api.dictionaryapi.dev/api/v2/entries/en/${props.updatedWord}`;
  const transUrl = `https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&to%5B0%5D=${props.language}&textType=plain&profanityAction=NoAction`;
  const synUrl = `https://api.datamuse.com/words?rel_syn=${props.updatedWord}&max=3`;
  // setting up fetch request for a word definition
  const options = {
    method: 'GET'
  };

  // retrieves the synonyms of the given word 
  React.useEffect(() => {
    // fetches synonyms
    fetch(synUrl, options)
    .then((response) => response.json())
    .then(response => {
      // takes the response and stores each synonym in an array
      const onlySyns = response.map(syn => syn.word);
      // converts the array into a string
      const synString = onlySyns.join(", ");
      setSynEng("Synonyms: " + synString);
    })
  }, [])

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
          body: `[{"Text":"${def}"}, {"Text":"${synEng}"}]`
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
        const translatedSyn = response[1].translations[0].text;
        // definition set to the translated definition and synonym
        setDefinition(translatedDef);
        setSynTrans(translatedSyn);
      })
      .catch(err => {
        console.error('error:' + err);
        setDefinition("ERROR");
      });
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
        style={{margin: 5}}
        sx={{display: {xs: 'flex', justifyContent: 'space-around'}}}
      >
        <Typography sx={{ p: 2 }} component={'span'}>{definition} <br/> {synTrans}</Typography>
      </Popover>
    </div>
  );
}

export default Popup;