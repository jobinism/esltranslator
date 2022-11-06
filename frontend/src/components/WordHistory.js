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
  const [wordHistory, setWordHistory] = useState("");
  const [wordHistoryView, setWordHistoryView] = useState();
  const options = {
    method: 'GET'
  };
  const url = `/api/posts/1`;
  useEffect(() => {
    fetch(url, options)
    .then(response => response.json())
    .then(response => {
      setWordHistory(response);
    });
  }, []);

  useEffect(() => {
    if(wordHistory) {
      let num = -1;
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