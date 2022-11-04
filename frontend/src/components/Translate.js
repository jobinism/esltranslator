import React from 'react';
import { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import TextToSpeech from './TextToSpeech';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Popup from './Popover';
import { TextareaAutosize } from '@mui/material';
import Button from '@mui/material/Button';
import MicIcon from '@mui/icons-material/Mic';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import './Translate.css'
import FormHelperText from '@mui/material/FormHelperText';

const age = "English"
const Translate = () => {

  // declaring variables needed for speech to text
  const {
    transcript, // stores speech as text
    listening, // checks if the mic is actively being recorded by the transcript
    resetTranscript, 
    browserSupportsSpeechRecognition 
  } = useSpeechRecognition();

  // setting up the request boiler plate for the api
  const [textToTranslate, setTextToTranslate] = useState({
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
    },
    body: '[{"Text":""}]'
  });
  // declaring state variables
  const [num, setNum] = useState(0);
  const [language, setLanguage] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [viewTranscript, setViewTranscript] = useState("");
  const [speechLang, setSpeechLang] = useState('zh-HK');
  const [words, setWords] = useState([]);

  useEffect(() => {
    if (translatedText) {
      let phrase = translatedText.split(' ');
      const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?~]/;
      let key = -1;
      const wordsWithPopover = phrase.map((word) => {
        key += 1;
        const check = specialChars.test(word);
        let updatedWord = word;
        if (check) {
          const length = word.length-1;
          updatedWord = word.slice(0,length)
        }
        return (
          <Popup word={word} updatedWord={updatedWord} language={language} key={key}/>
        );
      });
      setWords(wordsWithPopover);
    }
  }, [translatedText])
  // updates on each change to the transcript (when user is using speech to text)
  useEffect(() => {
    setViewTranscript(transcript);
    setTextToTranslate(prev => ({...prev, body:`[{"Text":"${transcript}"}]`}));
  }, [transcript]);

  useEffect(() => {
  
    // ensures fetch request doesn't run on page render
    if (num > 1) {
      // fetches translation and puts it into translated text
      const url = 'https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&to%5B0%5D=en&textType=plain&profanityAction=NoAction';
      const timer = setTimeout (() => {
        fetch(url, textToTranslate)
          .then(response => response.json())
          .then(response => {
            const translation = response[0].translations[0].text;
            const language = response[0].detectedLanguage.language;
            setTranslatedText(translation);
            setLanguage(language);
          })
          .catch(err => console.error(err));
      }, 500);

      return () => clearTimeout(timer);
    }
    setNum(prev => prev + 1);
    
  }, [viewTranscript]);

  // checks if browser supports speech recognition
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const printText = (lang) => {
    // transcript resets if it already contains text
    if (transcript) {
      resetTranscript();
    }
    // starts listening to mic and stores the data as text in transcript
    SpeechRecognition.startListening({ language: lang });
  }

  // updates when the user types in the textbox
  const setText = (text) => {
    setViewTranscript(text);
    setTextToTranslate(prev => ({...prev, body:`[{"Text":"${text}"}]`}));
  }

  // set the language for speech to text
  const handleChange = (event) => {
    setSpeechLang(event.target.value);
  };

  return (
    <div>
      <div className="microphoneIcon">
        <Box 
        sx={{ display: {xs: "flex", justifyContent: "center", alignContent: 'center'},width: 50, height: 50, backgroundColor: "#FFFFF", borderRadius: 50, borderStyle: 'solid', borderColor: '#8500D6', boxShadow: '2px 5px 5px 0px rgba(0,0,0,0.75)'}}>

          <p>{listening ? <MicIcon
          sx={{color: "#00FF00"}}
          /> : <MicIcon
            sx={{color: "red"}}
            />}</p>
        </Box>
      </div>
    <div className='languageDrop'>
      <FormControl margin='normal' variant='standard'>
        <InputLabel id="lang-label">Language</InputLabel>
        <Select
          labelId="lang-label"
          id="lang-select"
          value={speechLang}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value={"zh-HK"}>粵語</MenuItem>
          <MenuItem value={"es-MX"}>Español</MenuItem>
          <MenuItem value={"fr-FR"}>Français</MenuItem>
          <MenuItem value={"de-DE"}>Deutsch</MenuItem>
          <MenuItem value={"it-IT"}>Italiano</MenuItem>
          <MenuItem value={"ja"}>日本語</MenuItem>
          <MenuItem value={"ko"}>한국어</MenuItem>
          <MenuItem value={"zh-CN"}>普通话</MenuItem>
          <MenuItem value={"ru"}>русский</MenuItem>          
        </Select>
      </FormControl>
      <FormControl margin='normal' variant='standard' disabled>
      <InputLabel id="lang-label">Language</InputLabel>

      <Select
          labelId="lang-label"
          id="lang-select"
          value={speechLang}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value={"zh-HK"}>English</MenuItem>
          <MenuItem value={"es-MX"}>Español</MenuItem>
          <MenuItem value={"fr-FR"}>Français</MenuItem>
          <MenuItem value={"de-DE"}>Deutsch</MenuItem>
          <MenuItem value={"it-IT"}>Italiano</MenuItem>
          <MenuItem value={"ja"}>日本語</MenuItem>
          <MenuItem value={"ko"}>한국어</MenuItem>
          <MenuItem value={"zh-CN"}>普通话</MenuItem>
          <MenuItem value={"ru"}>русский</MenuItem>          
        </Select>
      </FormControl>
    </div>
    <div className='speechButtons'>
    <Button onClick={() => printText(speechLang)}><MicIcon /></Button>
    <TextToSpeech text={translatedText}/>
    </div>  
    <div className='inputOutput'>       
      <div className='inputBox'>
        <TextareaAutosize 
        id="translate" 
        value={viewTranscript} 
        onChange={(event) => setText(event.target.value)}
        aria-label="multiline"
        minRows={10}
        placeholder="Translate Here!"
        style={{ width: 150, marginRight: 2, fontSize: 15  }}
        />
      </div>  
      <div className='outputBox'>
        <TextareaAutosize 
        value={translatedText} 
        aria-label="empty textarea"
        minRows={10}
        placeholder="Output here!"
        style={{ width: 150, marginLeft: 2, fontSize: 15 }}
        />
      </div>  
    </div> 
      <br/>
      <div className='defWordBox'>
      <div className="definedWords">{words}</div>
      </div>
    </div>
  );
};
export default Translate;