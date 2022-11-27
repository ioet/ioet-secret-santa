import { Typography, Box } from "@mui/material";
import Countdown from "react-countdown";
import Appbar from "../components/Appbar";

interface Props {
  countdown: any
}

const SecretSanta = ({ countdown }: Props) => {
  return (
    <Box display='block' width='100vw'>
      <Box
        display={{ sm: 'block', md: 'flex' }}
        sx={{
          width: '100%',
          height: '100vh',
          background: 'linear-gradient(210deg, rgba(255,128,128,1) 1%, rgba(255,0,0,1) 100%);'
        }}
      >
        <Box
          sx={{
            display: 'grid',
            alignItems: 'center'
          }}
          width='100%'
          height='100%'
        >
          <Appbar />
          <Box sx={{ textAlign: 'center', }}>
            <Typography variant='body1' sx={{ color: 'white' }}>Thank you for registering for the Christmas Secret Santa game! Wait until the counter reaches zero to find out who is your Secret Santa!</Typography>
            <Countdown date={countdown}>
              <h1>Se acabo el tiempo</h1>
            </Countdown>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default SecretSanta
