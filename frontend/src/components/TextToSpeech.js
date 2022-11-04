import axios from 'axios';
import { useState, useEffect } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
const TextToSpeech = (props) => {

  // setting up the api request data
  const encodedParams = new URLSearchParams();
  encodedParams.append("f", "8khz_8bit_mono");
  encodedParams.append("c", "mp3");
  encodedParams.append("r", "0");
  encodedParams.append("hl", "en-us");
  encodedParams.append("src", `"${props.text}"`);
  encodedParams.append("b64", true);

  // setting up the api request
  const options = {
    method: 'POST',
    url: 'https://voicerss-text-to-speech.p.rapidapi.com/',
    params: {key: process.env.REACT_APP_TEXT_TO_SPEECH_KEY},
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
    },
    data: encodedParams
  };

  // declaring state variable
  const [aud, setAud] = useState();

  useEffect(() => {
    // checks if there is text to convert into speech
    if (props.text) {
      // requests audio file from api
      const reply = axios.request(options);
      reply.then(res => {
        setAud((res.data));
      });
    } else {
      setAud(null);
    } 
  }, [props.text]);
  
  // function that plays the audio stored in the variable aud
  const play = () => {
    if(aud !== null) {
      const audio = new Audio(`${aud}`);
      audio.play();
    }
  }

  return(
    <Button onClick={play}><VolumeUpIcon /></Button>
  );

}

export default TextToSpeech;