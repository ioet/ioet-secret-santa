import { AccountCircle } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';

const Appbar = () => {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Secret Santa
        </Typography>
        <div>
          <Avatar sx={{ bgcolor: '#fff' }}>
            <AccountCircle color='secondary' />
          </Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
