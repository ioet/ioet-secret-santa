import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      light: '#EF4750',
      main: '#fff',
      dark: '#A51119',
      contrastText: '#ec1925',
    },
    secondary: {
      light: '#7BD544',
      main: '#5bcb16',
      dark: '#3F8E0F',
      contrastText: '#fff',
    },
  },
});

export default Theme;
