import { Typography, Hidden, Button, Box } from "@mui/material";
import { useState } from "react";
import Countdown from "react-countdown";
import Image from ".././assets/christmas-gifts.webp"
import RegistrationForm from "../components/RegistrationForm";

interface Props {
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>,
  countdown: any,
}

const Registration = ({ setIsRegistered, countdown }: Props) => {
  const [canRegister, setCanRegister] = useState(true);

  const scrollWindow = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }

  return (
    <Box display='block'>
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
            display: 'flex',
            alignItems: 'center',
          }}
          width={{
            sm: '100%',
            md: '50%'
          }}
          height={{
            xs: '30vh',
            sm: '30vh',
            md: '100vh',
          }}
        >
          <Box
            sx={{
              display: 'block',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <Box padding={5}>
              <Typography
                variant="h2"
                sx={{
                  color: 'white',
                  wordWrap: "break-word"
                }}
              >The registration countdown {canRegister ? 'begun!' : 'finished:('}</Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'white',
                  wordWrap: "break-word",
                  opacity: `${canRegister ? '1' : '0'}`
                }}
              >Join us in the Christmas Secret Santa game.</Typography>
            </Box>
            <Hidden only={['sm', 'xs']}>
              <Button onClick={scrollWindow} sx={{ width: '250px', color: '#A30000', bgcolor: '#fff', '&:hover': { bgcolor: '#bbb' }, opacity: `${canRegister ? '1' : '0'}` }}>Register</Button>
            </Hidden>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
          width={{
            sm: '100%',
            md: '50%'
          }}
          height={{
            xs: '70vh',
            sm: '70vh',
            md: '100vh',
          }}
        >
          <Box
            sx={{
              display: 'block',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <Box component="img" src={Image} alt="Christmas gifts image" sx={{ maxWidth: '300px' }} />
            <br></br>
            <Countdown date={countdown} />
            <Hidden only={['md', 'lg', 'xl']}>
              <Button onClick={scrollWindow} sx={{ width: '250px', color: '#A30000', bgcolor: '#fff', '&:hover': { bgcolor: '#bbb' } }}>Register</Button>
            </Hidden>
          </Box>
        </Box>
      </Box>
      {
        canRegister
        && <Box
          sx={{
            display: 'grid',
            alignContent: 'center',
          }}
          width='100%'
          height='100vh'
        >
          <RegistrationForm setIsRegistered={setIsRegistered} />
        </Box>
      }
    </Box >
  )
}

export default Registration
