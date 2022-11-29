import { Typography, Box, Card, CardContent, Divider, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import Appbar from "../components/Appbar";
import '../styles/Renderer.css'

interface Props {
  countdown: any
}

interface CountdownProps {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  completed: boolean,
}

const SecretSantaCard = () => {
  const [secretSanta, setSecretSanta] = useState({ 'name': '', 'wishes': [] });

  useEffect(() => {
    // llamada a backend para conocer el amigo secreto
  }, [])

  return (
    <Box
      padding={{
        sm: 5,
        xs: 5,
        md: 15,
      }}
    >
      <Card>
        <CardContent>
          <Typography variant='h4'>Your Secret Santa is:</Typography>
          <Divider />
          <Typography variant='h6' sx={{ mt: 3 }}>{secretSanta['name']}</Typography>
          <Box
            sx={{
              p: 5
            }}
          >
            <Typography textAlign='left'>Its wishes are:</Typography>
            {
              secretSanta['wishes'].map((wish) => (
                <Typography key={wish} textAlign='left'>- {wish}</Typography>
              ))
            }
          </Box>
        </CardContent>
      </Card>
    </Box>
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
          : <Grid
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
      }
    </>
  )
};

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
            <Box sx={{ p: 5 }}>
              <Typography
                variant='body1'
                sx={{ color: 'white', mb: 10 }}
              >Thank you for registering for the Christmas Secret Santa game! Wait until the counter reaches zero to find out who is your Secret Santa!</Typography>
              <Countdown date={countdown} renderer={Renderer} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default SecretSanta
