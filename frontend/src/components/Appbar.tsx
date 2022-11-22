import { AccountCircle } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';

const Appbar = () => {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          IOET Secret Santa
        </Typography>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
