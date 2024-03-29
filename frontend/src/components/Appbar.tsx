import axios from 'axios';
import envManager from '../config/envManager';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
  } from '@mui/material';
import { useState } from 'react';
import { useUserContext } from '../hooks/useUserContext';

const Appbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const {setIsLogged, isAdmin} = useUserContext();

  const backendLogout = axios.create({
    baseURL: envManager.AUTH_URL,
    withCredentials: true,
  });

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const logoutUser = async () => {
    await backendLogout.get("/authn/logout");
  };

  const handleLogout = async () => {
    await logoutUser();
    setIsLogged(false);
  };

  const sessionStorageData = sessionStorage.getItem('user');
  const jsonData = sessionStorageData && JSON.parse(sessionStorageData);

  return (
    <AppBar sx={{ height: '64px', bgcolor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ width: "100%", display: 'flex', justifyContent: 'end'}}>
        <Box display='flex' alignItems='center' padding='20px'>
          <Box display='flex' flexDirection='column'>
            <Typography variant='body2' component='span' fontWeight={800} display='flex' justifyContent='end'>Welcome</Typography>
            <Typography variant='body1' component='span'>{jsonData['name']}</Typography>
          </Box>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <Avatar alt="user img" src={jsonData['picture']} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
