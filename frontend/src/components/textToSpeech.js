import axios from 'axios';
import { useState, useEffect } from "react";
const TextToSpeech = (props) => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("f", "8khz_8bit_mono");
  encodedParams.append("c", "mp3");
  encodedParams.append("r", "0");
  encodedParams.append("hl", "en-us");
  encodedParams.append("src", `"${props.text}"`);
  encodedParams.append("b64", true);


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

  const [aud, setAud] = useState();
  useEffect(() => {
    if (props.text) {
      const reply = axios.request(options);
      reply.then(res => {
        setAud((res.data));
      });
      console.log(aud);
    } else {
      setAud(null);
    } 
  }, [props.text]);
  
  const play = () => {
    if(aud !== null) {
      const audio = new Audio(`${aud}`);
      audio.play();
    }
  }
  return(
    <button onClick={play}>Play</button>
  );
}
export default TextToSpeech;