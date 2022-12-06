import { Typography, Box, Card, CardContent, Divider, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import Appbar from "../components/Appbar";
import '../styles/Renderer.css'
import envManager from "../config/envManager";
import axios from 'axios';


const backend = axios.create({
  baseURL: envManager.BACKEND_URL,
  withCredentials: true,
});

interface Props {
  countdown: any,
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>,
}

interface CountdownProps {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  completed: boolean,
}

const SecretSantaCard = () => {
  const [secretSanta, setSecretSanta] = useState({
    'name': '', 'wishes': [], 'picture': ""
  });


  const fetchSecretSanta = async () => {
    const sessionStorageData = sessionStorage.getItem('user');
    const jsonData = sessionStorageData && JSON.parse(sessionStorageData);
    const response = await backend.get(`/results/email/${jsonData['email']}`)
    return response.status === 200 ? response.data : null;
  }

  const showSecretSanta = async () => {
    const secretSantaData = await fetchSecretSanta();
    secretSantaData && setSecretSanta(secretSantaData['secret_santa'])
  }

  useEffect(() => {
    showSecretSanta();
  }, [])

  return (
    <Box
      padding={{
        sm: 5,
        xs: 5,
        md: 15,
      }}
      height='50%'
    >
      <Card>
        <CardContent>
          <Typography variant='h4'>Your Secret Santa is:</Typography>
          <Divider />
          <Box
            display='flex'
            flexDirection='row'
            sx={{ justifyContent: 'space-evenly', mb: 3 }}
          >
            <Box
              display='flex'
              justifyContent="center"
              flexDirection='column'
              sx={{ justifyContent: 'space-evenly' }}
            >
              <Typography variant='h6' sx={{ mt: 3 }}>{secretSanta['name']}</Typography>
              <Box component="img" alt="secret santa picture" src={secretSanta['picture']} />
            </Box>
            <Box
              sx={{
                p: 5
              }}
            >
              <Typography variant="h5" textAlign='left'>Christmas wishes:</Typography>
              {
                Array.isArray(secretSanta['wishes'])
                  ? secretSanta['wishes'].map((wish) => (
                    <Typography key={wish} textAlign='left'>- {wish}</Typography>
                  ))
                  : <Typography textAlign='left'>- A surprice!</Typography>
              }
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box >
  )
}

function Renderer({ days, hours, minutes, seconds, completed }: CountdownProps) {

  function getFirstNumber(date: number) {
    if (date < 10) {
      return 0;
    }
    const firstDigit = date.toString().substring(0, 1);
    return firstDigit;
  }

  function getSecondNumber(date: number) {
    const secondDigit = date.toString().slice(-1);
    return Number(secondDigit);
  }

  return (
    <>
      {
        completed
          ? <SecretSantaCard />
          : <Box sx={{ p: 5 }}>
            <Typography
              variant='body1'
              marginTop={{
                xs: 15,
                sm: 15,
                md: 10,
              }}
              sx={{ color: 'white', mb: 10 }}
            >Thank you for registering for the Christmas Secret Santa game! Wait until the counter reaches zero to find out who is your Secret Santa!</Typography>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
            >
              <div className="date-group">
                <div style={{ 'display': 'flex' }}>
                  <Grid item width={{ xs: '50px', sm: '50px', md: '100px' }} height={{ xs: '75px', sm: '75px', md: '125px' }} border={1} textAlign="center" sx={{ mr: 1, backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
                    <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ pt: { xs: 2.5, sm: 2.5, md: 4 } }}>{getFirstNumber(days)}</Typography>
                  </Grid>
                  <Grid item width={{ xs: '50px', sm: '50px', md: '100px' }} height={{ xs: '75px', sm: '75px', md: '125px' }} border={1} textAlign="center" sx={{ backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
                    <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ pt: { xs: 2.5, sm: 2.5, md: 4 } }}>{getSecondNumber(days)}</Typography>
                  </Grid>
                </div>
                <Typography variant="h6" sx={{ pt: 1, color: '#fff' }}>DAYS</Typography>
              </div>
              <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ color: '#fff', mr: 1, mb: 7, ml: 1 }} align='center'>:</Typography>
              <div className="date-group">
                <div style={{ 'display': 'flex' }}>
                  <Grid item width={{ xs: '50px', sm: '50px', md: '100px' }} height={{ xs: '75px', sm: '75px', md: '125px' }} border={1} textAlign="center" sx={{ mr: 1, backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
                    <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ pt: { xs: 2.5, sm: 2.5, md: 4 } }}>{getFirstNumber(hours)}</Typography>
                  </Grid>
                  <Grid item width={{ xs: '50px', sm: '50px', md: '100px' }} height={{ xs: '75px', sm: '75px', md: '125px' }} border={1} textAlign="center" sx={{ backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
                    <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ pt: { xs: 2.5, sm: 2.5, md: 4 } }}>{getSecondNumber(hours)}</Typography>
                  </Grid>
                </div>
                <Typography variant="h6" sx={{ pt: 1, color: '#fff' }}>HOURS</Typography>
              </div>
              <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ color: '#fff', mr: 1, mb: 7, ml: 1 }}>:</Typography>
              <div className="date-group">
                <div style={{ 'display': 'flex' }}>
                  <Grid item width={{ xs: '50px', sm: '50px', md: '100px' }} height={{ xs: '75px', sm: '75px', md: '125px' }} border={1} textAlign="center" sx={{ mr: 1, backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
                    <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ pt: { xs: 2.5, sm: 2.5, md: 4 } }}>{getFirstNumber(minutes)}</Typography>
                  </Grid>
                  <Grid item width={{ xs: '50px', sm: '50px', md: '100px' }} height={{ xs: '75px', sm: '75px', md: '125px' }} border={1} textAlign="center" sx={{ backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
                    <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ pt: { xs: 2.5, sm: 2.5, md: 4 } }}>{getSecondNumber(minutes)}</Typography>
                  </Grid>
                </div>
                <Typography variant="h6" sx={{ pt: 1, color: '#fff' }}>MINUTES</Typography>
              </div>
              <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ color: '#fff', mr: 1, mb: 7, ml: 1 }}>:</Typography>
              <div className="date-group">
                <div style={{ 'display': 'flex' }}>
                  <Grid item width={{ xs: '50px', sm: '50px', md: '100px' }} height={{ xs: '75px', sm: '75px', md: '125px' }} border={1} textAlign="center" sx={{ mr: 1, backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
                    <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ pt: { xs: 2.5, sm: 2.5, md: 4 } }}>{getFirstNumber(seconds)}</Typography>
                  </Grid>
                  <Grid item width={{ xs: '50px', sm: '50px', md: '100px' }} height={{ xs: '75px', sm: '75px', md: '125px' }} border={1} textAlign="center" sx={{ mr: 1, backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
                    <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ pt: { xs: 2.5, sm: 2.5, md: 4 } }}>{getSecondNumber(seconds)}</Typography>
                  </Grid>
                </div>
                <Typography variant="h6" sx={{ pt: 1, color: '#fff' }}>SECONDS</Typography>
              </div>
            </Grid>
          </Box>
      }
    </>
  )
};

const SecretSanta = ({ countdown, setIsLogged }: Props) => {
  return (
    <Box display='block' width='100%'>
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
            justifyContent: 'center'
          }}
          width='100%'
          height='100%'
        >
          <Appbar setIsLogged={setIsLogged} />
          <Box sx={{ textAlign: 'center', width: '80%' }}>
            <Countdown date={countdown} renderer={Renderer} />
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default SecretSanta
