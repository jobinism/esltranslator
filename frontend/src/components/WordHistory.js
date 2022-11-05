import React, { useState, useEffect } from "react";
import WordPost from "./WordPost";
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import Cookies from "js-cookie";

const WordHistory = () => {
  const [wordHistory, setWordHistory] = useState("");
  const [wordHistoryView, setWordHistoryView] = useState();
  const cookie = Cookies.get('user_id');
  console.log(cookie);
  const options = {
    method: 'GET'
  };
  const url = `/api/posts/${cookie}`;
  useEffect(() => {
    fetch(url, options)
    .then(response => response.json())
    .then(response => {
      setWordHistory(response);
      console.log(response);
    });
  }, []);

  useEffect(() => {
    if(wordHistory) {
      const history = wordHistory.map(word => {
        return (
          <WordPost engWord={word.engword} transWord={word.transword} definition={word.definition}/>
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