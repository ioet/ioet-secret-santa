import { Button, Box, Grid } from '@mui/material'
import IOETLogo from '../assets/ioet.png'


const Login = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '97vh' }}
      sx={{ backgroundColor: 'green' }}
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
