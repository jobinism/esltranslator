import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', position: 'absolute', backgroundColor: '#ba000d', width: '100vw', filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))' }}>
          {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
          <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              
              <Avatar sx={{ width: 32, height: 32, color: '#ba000d', backgroundColor: '#FFFFFF'}}>EE</Avatar>
            </IconButton>
          </Tooltip>
          <Typography sx={{ minWidth: 100, color: '#FFFFFF' }}>Easy English</Typography>

        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >
          <MenuItem sx={{color: '#ba000d'}}>
            <Avatar sx={{backgroundColor: '#FFFFFF', color: '#ba000d'}} /> Profile
          </MenuItem>
          <Divider sx={{color: '#ba000d'}} />
          <MenuItem sx ={{color: '#ba000d'}}>
            <ListItemIcon>
              <PersonAdd fontSize="small" sx={{color: '#ba000d'}} />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem sx={{color: '#ba000d'}}>
            <ListItemIcon>
              <Logout fontSize="small" sx={{color: '#ba000d'}} />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
        <br />
        <br />
      </React.Fragment>
      </ThemeProvider>
    
  );
}