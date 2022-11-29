import { AccountCircle } from '@mui/icons-material';
import axios from "axios"
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import envManager from '../config/envManager';

interface Props {
  isAdmin?: boolean,
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>,
}

const Appbar = ({ isAdmin, setIsLogged }: Props) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
    try {
      await backendLogout.get("/authn/logout");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    await logoutUser();
    setIsLogged(false);
  };

  return (
    <AppBar position="absolute" sx={{ height: '64px', bgcolor: 'white' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#A30000' }}>
          Secret Santa {isAdmin && '- Admin'}
        </Typography>
        <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                sx={{bgcolor: "#A30000", color:"#fff"}}
              >
                <AccountCircle />
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
            </div>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
