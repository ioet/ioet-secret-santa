import Appbar from '../components/Appbar';
import confetti from 'canvas-confetti';
import Countdown from 'react-countdown';
import {
  Box,
  Button,
  Divider,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { getSecretSanta } from '../services/player';
import { useEffect, useState } from 'react';
import CountdownBox from '../components/CountdownBox';

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
    return await getSecretSanta(jsonData['id']);
  }

  const showSecretSanta = async () => {
    const secretSantaData = await fetchSecretSanta();
    secretSantaData && setSecretSanta(secretSantaData['secret_santa'])
  }

  useEffect(() => {
    showSecretSanta();
  }, [])

  const firstName = secretSanta['name'].split(' ')[0];

  return (
    <Box
      height='100%'
      width='100%'
      maxWidth='1000px'
      display='flex'
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent='center'
      alignItems='center'
      gap={{ xs: 4, md: 15 }}
    >
      <div>
        <Box
          component='img'
          src={secretSanta['picture']}
          sx={{ width: 200, height: 200 }}
          border='6px solid white'
          borderRadius={1}
        />
        <Typography
          variant='h4'
          sx={{ color: 'white', marginTop: 2, fontWeight: 'bold' }}
        >{secretSanta['name']}</Typography>
      </div>
      <Box
        display='flex'
        flexDirection='column'
        gap={1}
        p={5}
      >
        {Array.isArray(secretSanta['wishes']) ? secretSanta['wishes'].map((wish: string, index: number) => (
          <div key={wish}>
            <Box color='white' display='flex' gap={3} alignItems='center' width='100%'>
              <div>
                <svg width="64px" height="64px" viewBox="-5.52 0 80.542 80.542" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="_9" data-name="9" transform="translate(-564.75 -406.375)"> <path id="Path_56" data-name="Path 56" d="M623.375,484.167h-47.5a5.375,5.375,0,0,1-5.375-5.375V441.917h58.25v36.875A5.375,5.375,0,0,1,623.375,484.167Z" fill="#ee6159"></path> <path id="Path_57" data-name="Path 57" d="M623.375,486.917h-47.5a8.134,8.134,0,0,1-8.125-8.125V441.917a2.75,2.75,0,0,1,2.75-2.75h58.25a2.75,2.75,0,0,1,2.75,2.75v36.875A8.134,8.134,0,0,1,623.375,486.917Zm-50.125-42.25v34.125a2.628,2.628,0,0,0,2.625,2.625h47.5A2.628,2.628,0,0,0,626,478.792V444.667Z" fill="#151515"></path> <path id="Path_58" data-name="Path 58" d="M625.667,425.167H573.333A5.833,5.833,0,0,0,567.5,431v10.917h64V431A5.833,5.833,0,0,0,625.667,425.167Z" fill="#ee6159"></path> <path id="Path_59" data-name="Path 59" d="M631.5,444.667h-64a2.75,2.75,0,0,1-2.75-2.75V431a8.594,8.594,0,0,1,8.583-8.583h52.334A8.594,8.594,0,0,1,634.25,431v10.917A2.75,2.75,0,0,1,631.5,444.667Zm-61.25-5.5h58.5V431a3.086,3.086,0,0,0-3.083-3.083H573.333A3.086,3.086,0,0,0,570.25,431Z" fill="#151515"></path> <rect id="Rectangle_5" data-name="Rectangle 5" width="16.417" height="43.25" transform="translate(591.417 440.917)" fill="#ffc97a"></rect> <path id="Path_60" data-name="Path 60" d="M607.833,486.917H591.417a2.75,2.75,0,0,1-2.75-2.75v-43.25a2.75,2.75,0,0,1,2.75-2.75h16.416a2.75,2.75,0,0,1,2.75,2.75v43.25A2.75,2.75,0,0,1,607.833,486.917Zm-13.666-5.5h10.916v-37.75H594.167Z" fill="#151515"></path> <rect id="Rectangle_6" data-name="Rectangle 6" width="16.417" height="18.25" transform="translate(591.417 422.667)" fill="#fbbf77"></rect> <path id="Path_61" data-name="Path 61" d="M607.833,443.667H591.417a2.75,2.75,0,0,1-2.75-2.75v-18.25a2.75,2.75,0,0,1,2.75-2.75h16.416a2.75,2.75,0,0,1,2.75,2.75v18.25A2.75,2.75,0,0,1,607.833,443.667Zm-13.666-5.5h10.916v-12.75H594.167Z" fill="#151515"></path> <g id="Group_29" data-name="Group 29"> <path id="Path_62" data-name="Path 62" d="M610.372,425.417h-.118l-12.121-.145a2.75,2.75,0,0,1-2.3-4.211l6.437-10.269a9.421,9.421,0,0,1,16.207.412l.113.2a9.422,9.422,0,0,1-8.221,14.013Zm-7.273-5.588,7.221.087.052,2.751v-2.75a3.882,3.882,0,0,0,3.376-1.937,3.833,3.833,0,0,0,.042-3.894l-.112-.2a3.919,3.919,0,0,0-6.744-.172Z" fill="#151515"></path> </g> <g id="Group_30" data-name="Group 30"> <path id="Path_63" data-name="Path 63" d="M588.886,425.417a9.421,9.421,0,0,1-8.221-14.013l.112-.2a9.421,9.421,0,0,1,16.207-.412l6.438,10.269a2.75,2.75,0,0,1-2.3,4.211L589,425.416Zm.12-13.542a3.874,3.874,0,0,0-3.426,2.009l-.112.2a3.829,3.829,0,0,0,.041,3.893,3.884,3.884,0,0,0,3.377,1.938v2.75l.051-2.751,7.222-.087-3.835-6.116A3.844,3.844,0,0,0,589.006,411.875Z" fill="#151515"></path> </g> </g> </g></svg>
              </div>
              <Box display='flex' flexDirection='column' sx={{ lineBreak: 'anywhere', textAlign: 'left' }}>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{firstName}'s Wish {index + 1}</Typography>
                <Typography variant='body1'>{wish}</Typography>
              </Box>
            </Box>
            {index !== secretSanta['wishes'].length - 1 && <Divider sx={{ border: '1px solid white', my: 3 }} />}
          </div>
        )) : <Box color='white' display='flex' gap={3} alignItems='center' width='100%'>
          <div>
            <svg width="64px" height="64px" viewBox="-5.52 0 80.542 80.542" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="_9" data-name="9" transform="translate(-564.75 -406.375)"> <path id="Path_56" data-name="Path 56" d="M623.375,484.167h-47.5a5.375,5.375,0,0,1-5.375-5.375V441.917h58.25v36.875A5.375,5.375,0,0,1,623.375,484.167Z" fill="#ee6159"></path> <path id="Path_57" data-name="Path 57" d="M623.375,486.917h-47.5a8.134,8.134,0,0,1-8.125-8.125V441.917a2.75,2.75,0,0,1,2.75-2.75h58.25a2.75,2.75,0,0,1,2.75,2.75v36.875A8.134,8.134,0,0,1,623.375,486.917Zm-50.125-42.25v34.125a2.628,2.628,0,0,0,2.625,2.625h47.5A2.628,2.628,0,0,0,626,478.792V444.667Z" fill="#151515"></path> <path id="Path_58" data-name="Path 58" d="M625.667,425.167H573.333A5.833,5.833,0,0,0,567.5,431v10.917h64V431A5.833,5.833,0,0,0,625.667,425.167Z" fill="#ee6159"></path> <path id="Path_59" data-name="Path 59" d="M631.5,444.667h-64a2.75,2.75,0,0,1-2.75-2.75V431a8.594,8.594,0,0,1,8.583-8.583h52.334A8.594,8.594,0,0,1,634.25,431v10.917A2.75,2.75,0,0,1,631.5,444.667Zm-61.25-5.5h58.5V431a3.086,3.086,0,0,0-3.083-3.083H573.333A3.086,3.086,0,0,0,570.25,431Z" fill="#151515"></path> <rect id="Rectangle_5" data-name="Rectangle 5" width="16.417" height="43.25" transform="translate(591.417 440.917)" fill="#ffc97a"></rect> <path id="Path_60" data-name="Path 60" d="M607.833,486.917H591.417a2.75,2.75,0,0,1-2.75-2.75v-43.25a2.75,2.75,0,0,1,2.75-2.75h16.416a2.75,2.75,0,0,1,2.75,2.75v43.25A2.75,2.75,0,0,1,607.833,486.917Zm-13.666-5.5h10.916v-37.75H594.167Z" fill="#151515"></path> <rect id="Rectangle_6" data-name="Rectangle 6" width="16.417" height="18.25" transform="translate(591.417 422.667)" fill="#fbbf77"></rect> <path id="Path_61" data-name="Path 61" d="M607.833,443.667H591.417a2.75,2.75,0,0,1-2.75-2.75v-18.25a2.75,2.75,0,0,1,2.75-2.75h16.416a2.75,2.75,0,0,1,2.75,2.75v18.25A2.75,2.75,0,0,1,607.833,443.667Zm-13.666-5.5h10.916v-12.75H594.167Z" fill="#151515"></path> <g id="Group_29" data-name="Group 29"> <path id="Path_62" data-name="Path 62" d="M610.372,425.417h-.118l-12.121-.145a2.75,2.75,0,0,1-2.3-4.211l6.437-10.269a9.421,9.421,0,0,1,16.207.412l.113.2a9.422,9.422,0,0,1-8.221,14.013Zm-7.273-5.588,7.221.087.052,2.751v-2.75a3.882,3.882,0,0,0,3.376-1.937,3.833,3.833,0,0,0,.042-3.894l-.112-.2a3.919,3.919,0,0,0-6.744-.172Z" fill="#151515"></path> </g> <g id="Group_30" data-name="Group 30"> <path id="Path_63" data-name="Path 63" d="M588.886,425.417a9.421,9.421,0,0,1-8.221-14.013l.112-.2a9.421,9.421,0,0,1,16.207-.412l6.438,10.269a2.75,2.75,0,0,1-2.3,4.211L589,425.416Zm.12-13.542a3.874,3.874,0,0,0-3.426,2.009l-.112.2a3.829,3.829,0,0,0,.041,3.893,3.884,3.884,0,0,0,3.377,1.938v2.75l.051-2.751,7.222-.087-3.835-6.116A3.844,3.844,0,0,0,589.006,411.875Z" fill="#151515"></path> </g> </g> </g></svg>
          </div>
          <Box display='flex' flexDirection='column' sx={{ lineBreak: 'anywhere', textAlign: 'left' }}>
            <Typography variant='h5' sx={{ color: 'white', fontWeight: 'bold' }}>{firstName}'s Wish</Typography>
            <Typography variant='body1'>A surprise!</Typography>
          </Box>
        </Box>}
      </Box>
    </Box>
  )
}

const WaitingCountdown = ({ days, hours, minutes, seconds }: WaitingCountdownProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const [open, setOpen] = useState(true);

  useEffect(() => {
    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    function createSnowflake() {
      confetti({
        particleCount: 2,
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
    <Box paddingX={isSmallScreen ? 2 : 8} sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {open ? <Box>
        <Typography
          variant={isSmallScreen || isMediumScreen ? 'body1' : 'h6'}
          sx={{ color: 'white' }}
          marginBottom={isSmallScreen ? 2 : 10}
        >Thank you for registering for the Christmas Secret Santa game! Wait until the counter reaches zero to find out who is your Secret Santa!</Typography>
        <Button variant='contained' sx={{ bgcolor: 'white', color: '#a5a5a5' }} onClick={() => setOpen(false)}>I understand</Button>
      </Box>
        : <Box display='flex' flexDirection={isSmallScreen ? 'column' : 'row'} gap={1}>
          <CountdownBox count={days} title='Days' />
          <CountdownBox count={hours} title='Hours' />
          <CountdownBox count={minutes} title='Minutes' />
          <CountdownBox count={seconds} title='Seconds' />
        </Box>}
    </Box>
  )
}

function Renderer({ days, hours, minutes, seconds, completed }: CountdownProps) {
  return completed
    ? <SecretSantaCard />
    : <WaitingCountdown
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
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
          <Box sx={{ textAlign: 'center' }}>
            <Countdown date={countdown} renderer={Renderer} />
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default SecretSanta
