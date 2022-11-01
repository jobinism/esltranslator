import React from 'react';
import { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [viewTranscript, setViewTranscript] = useState("");

  useEffect(() => {
    setViewTranscript(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const printText = (lang) => {
    if (transcript) {
      resetTranscript();
    }
    SpeechRecognition.startListening({ language: lang});
  }
  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={() => printText('ja')}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <textarea id="translate" value={viewTranscript} onChange={(event) => setViewTranscript(event.target.value)}/>
    </div>
  );
};
export default Dictaphone;