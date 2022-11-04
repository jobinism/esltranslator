import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

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
    </TableRow>
  )
}

export default WordPost;