import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import { getCookie } from '../helpers/cookieHelpers';
import axios from 'axios';
import './Navbar.css'

function Navbar() {

  let loggedIn = getCookie('user_id');

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const loggedOut = () => {
    // logs user out
    axios.post('/logout', { } , { withCredentials: true })
    .then (response => {
      // if user was logged out shows the response
      console.log(response);
      // changes options of navbar
      loggedIn = "";
      // closes navbar
      setAnchorElNav(null);
    })
    .catch (err => console.error(err));
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LanguageIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            
            {(!loggedIn) &&
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem><a href="/register" className='menuItem'>Register</a></MenuItem>
              <MenuItem> <a href="/login" className='menuItem'>Login</a></MenuItem>
              <MenuItem><a href="/about" className='menuItem'>About Us</a></MenuItem>
            </Menu>
          }
            {(loggedIn) &&
            <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
            >
            <MenuItem><a href="/account" className='menuItem'>My Profile</a></MenuItem>
            <MenuItem><a href="/about" className='menuItem'>About Us</a></MenuItem>
            <MenuItem onClick={loggedOut}><a href="/" className='menuItem'>Logout</a></MenuItem>
            </Menu>

          }
          </Box>
          <LanguageIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Easy English
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
