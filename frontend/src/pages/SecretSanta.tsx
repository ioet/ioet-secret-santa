import Appbar from '../components/Appbar';
import confetti from 'canvas-confetti';
import Countdown from 'react-countdown';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography
  } from '@mui/material';
import { getSecretSanta } from '../services/player';
import { useEffect, useState } from 'react';
import '../styles/Renderer.css';

interface Props {
  countdown: any,
}

interface CountdownProps {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  completed: boolean,
}

interface WaitingCountdownProps {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
}

const SecretSantaCard = () => {
  const [secretSanta, setSecretSanta] = useState({
    'name': '', 'wishes': [], 'picture': ""
  });

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
    });
  }, [])


  const fetchSecretSanta = async () => {
    const sessionStorageData = sessionStorage.getItem('user');
    const jsonData = sessionStorageData && JSON.parse(sessionStorageData);
    return await getSecretSanta(jsonData['email']);
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
      height='50%'
    >
      <Card>
        <CardContent>
          <Typography variant='h4'>Your Secret Santa is:</Typography>
          <Divider />
          <Box
            display='flex'
            flexDirection={{
              md: 'row',
              sm: 'column',
              xs: 'column',
            }}
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
                  : <Typography textAlign='left'>- A surprise!</Typography>
              }
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box >
  )
}

const WaitingCountdown = ({ days, hours, minutes, seconds }: WaitingCountdownProps) => {
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

  useEffect(() => {
    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
    
    function createSnowflake() {
      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: 500,
        origin: {
          x: Math.random(),
          y: 0,
        },
        colors: ['#ffffff'],
        shapes: ['circle'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4),
      });
    
      requestAnimationFrame(createSnowflake);
    }
    
    createSnowflake();
  }, [])

  return (
    <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography
              variant='h6'
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
  )
}

function Renderer({ days, hours, minutes, seconds, completed }: CountdownProps) {
  return (
    <>
      {
        completed
          ? <SecretSantaCard />
          : <WaitingCountdown
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
      }
    </>
  )
};

const SecretSanta = ({ countdown }: Props) => {
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
            justifyContent: 'center',
            alignItems: 'center',
          }}
          width='100%'
          height='100%'
        >
          <Appbar />
          <Box sx={{ textAlign: 'center', width: '80%' }}>
            <Countdown date={countdown} renderer={Renderer} />
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default SecretSanta
