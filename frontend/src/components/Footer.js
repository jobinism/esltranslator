import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function Footer() {
  return (
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
        <IconButton color="inherit">
            
            <a href="https://github.com/jobinism/esltranslator"><GitHubIcon sx={{color: '#FFFFFF'}} /></a>
          </IconButton>
          <StyledFab 
          sx={{backgroundColor: '#1a75d2', color: '#FFFFFF'}}
          >
            <a href="/"><LanguageIcon style={{color: '#FFFFFF'}} /></a>
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <a href="https://www.twinkl.ca/teaching-wiki/esl"><HelpCenterIcon sx={{color: '#FFFFFF'}} /></a>
          </IconButton>
        </Toolbar>
      </AppBar>

  );
}
