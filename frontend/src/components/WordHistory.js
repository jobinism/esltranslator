import React, { useState, useEffect } from "react";
import WordPost from "./WordPost";
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';



const WordHistory = () => {

  // declaring state variables
  const [wordHistory, setWordHistory] = useState("");
  const [wordHistoryView, setWordHistoryView] = useState();

  // setting up the request boiler plate for the api
  const options = {
    method: 'GET'
  };

  const url = `/api/posts/1`;
  useEffect(() => {
    // fetching the user's word history
    fetch(url, options)
    .then(response => response.json())
    .then(response => {
      // updating the WordHistory
      setWordHistory(response);
    });
  }, []);

  useEffect(() => {
    // checks if there is a word history
    if(wordHistory) {
      let num = -1;
      // returns an array of each word in a tag
      const history = wordHistory.map(word => {
        num ++;
        return (
          <WordPost engWord={word.engword} transWord={word.transword} definition={word.definition} key={num}/>
        );
      });
      setWordHistoryView(history);
    }
  }, [wordHistory])
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Translated Word</TableCell>
          <TableCell align="right">Definition</TableCell>
          <TableCell align="right">English Word</TableCell>
          <TableCell align="right"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {wordHistoryView}
      </TableBody>
    </Table>
  </TableContainer>
  )
};

export default WordHistory;