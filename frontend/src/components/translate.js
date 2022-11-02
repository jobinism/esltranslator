import React from 'react';
import { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import TextToSpeech from './textToSpeech';
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

  const [num, setNum] = useState(0);
  const [translatedText, setTranslatedText] = useState("");
  const [viewTranscript, setViewTranscript] = useState("");

  // updates on each change to the transcript(when user is using speech to text)
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
            const translation = response[0].translations[0].text
            setTranslatedText(translation);
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


  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={() => printText('ja')}>Start</button>
      <textarea id="translate" value={viewTranscript} onChange={(event) => setText(event.target.value)}/>
      <textarea value={translatedText}>
      </textarea>
      <TextToSpeech text={translatedText}/>
    </div>
  );
};
export default Translate;