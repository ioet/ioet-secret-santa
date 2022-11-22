import { Typography, Grid, Button } from "@mui/material";
import { useState } from 'react';
import Countdown from 'react-countdown';
import Appbar from "../components/Appbar";
import RegistrationForm from "../components/RegistrationForm";
import renderer from "../components/Renderer";
import SecretSanta from "../components/SecretSanta";
import envManager from "../config/envManager";

interface Props {
  isRegistered: boolean,
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>
}

const Home = ({ isRegistered, setIsRegistered }: Props) => {
  const [registrationDeadline] = useState(envManager.REGISTRATION_DEADLINE);
  const [gameDeadline] = useState(envManager.GAME_DEADLINE);

  return (
    <>
      <Appbar />
      <Grid
        container
        spacing={2}
        width="100vw"
        height="80vh"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: 10 }}
      >
        <Grid item width={{ sm: '100vw', md: '60vw' }}>
          {
            isRegistered
              ? <SecretSanta />
              : <RegistrationForm />
          }
        </Grid>
        <Grid item width={{ sm: '100vw', md: '40vw' }}>
          <Grid container width="100%" spacing={2}>
            <Grid item width="100%">
              {
                isRegistered
                  ? <Grid item width={{ sm: '100vw', md: '39vw' }} textAlign="center">
                    <Typography variant="h6">DAYS UNTIL SECRET SANTA BEGIN</Typography>
                    <Countdown date={gameDeadline} renderer={renderer} />
                  </Grid>
                  : <Grid item width={{ sm: '100vw', md: '39vw' }} textAlign="center">
                    <Typography variant="h6">DAYS UNTIL REGISTRATION ENDS</Typography>
                    <Countdown date={registrationDeadline} renderer={renderer} />
                  </Grid>
              }
            </Grid>
            <Grid item width="100%" >
              <Grid
                container
                width="100%"
                alignItems="center"
                justifyContent="center"
              >
                <Button variant="contained" sx={{ ml: 1.5, width: "325px", height: "100px" }}>VIEW</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
