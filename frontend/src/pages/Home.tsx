import { Typography, Hidden, Button, Box } from "@mui/material";
import { useState } from 'react';
import Countdown from 'react-countdown';
import Appbar from "../components/Appbar";
import RegistrationForm from "../components/RegistrationForm";
import renderer from "../components/Renderer";
import SecretSanta from "../components/SecretSanta";
import envManager from "../config/envManager";
import Image from ".././assets/christmas-gifts.webp"

interface Props {
  isRegistered: boolean,
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>
}

const Home = ({ isRegistered, setIsRegistered }: Props) => {
  const [registrationDeadline] = useState(envManager.REGISTRATION_DEADLINE);
  const [gameDeadline] = useState(envManager.GAME_DEADLINE);

  return (
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
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              p: 5,
              wordWrap: "break-word"
            }}
          >Days until registration ends!</Typography>
          <Hidden only={['sm', 'xs']}>
            <Button variant="contained">Register</Button>
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
          {/* Countdown component here */}
          <Hidden only={['md', 'lg', 'xl']}>
            <Button variant="contained">Register</Button>
          </Hidden>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
