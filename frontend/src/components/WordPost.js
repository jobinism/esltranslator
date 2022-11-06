import * as React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TextToSpeech from "./TextToSpeech";

const WordPost = props => {
  
  return (
    <TableRow
      key={props.transWord}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {props.transWord}
      </TableCell>
      <TableCell align="right">{props.definition}</TableCell>
      <TableCell align="right">{props.engWord}</TableCell>
      <TableCell align="right"><TextToSpeech text={props.engWord}/></TableCell>
    </TableRow>
  )
}

export default WordPost;