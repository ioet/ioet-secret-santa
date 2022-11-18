import { Button, Box, Grid } from '@mui/material'
import IOETLogo from '../assets/ioet.png'
import BackgoundImage from '../assets/christmas_background.gif'

const Login = () => {
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
      <Button variant='contained'>Login</Button>
    </Grid>
  )
}

export default Login
