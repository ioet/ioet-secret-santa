import { Button, Box, Grid } from '@mui/material';

import IOETLogo from '../assets/ioet.png';
import BackgoundImage from '../assets/christmas_background.gif';
import envManager from "../config/envManager";

interface Props {
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
}

const loginURL = `${envManager.AUTH_URL}authn/login/${envManager.APP_NAME}`;

const Login = ({ setIsLogged }: Props) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '97vh' }}
      sx={{ backgroundImage: `url(${BackgoundImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      <Box
        component='img'
        alt='ioet logo.'
        src={IOETLogo}
      />
      <Button variant='contained' size="large" href={loginURL} >LOGIN</Button>
    </Grid >
  )
}

export default Login
