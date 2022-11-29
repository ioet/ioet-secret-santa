import { AccountCircle } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';

interface Props {
  isAdmin?: boolean,
}

const Appbar = ({ isAdmin }: Props) => {
  return (
    <AppBar position="absolute" sx={{ height: '64px', bgcolor: 'white' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#A30000' }}>
          Secret Santa {isAdmin && '- Admin'}
        </Typography>
        <div>
          <Avatar sx={{ bgcolor: '#bbb' }}>
            <AccountCircle sx={{ color: '#A30000' }} />
          </Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
