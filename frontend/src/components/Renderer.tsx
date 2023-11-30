import { Box, useMediaQuery, useTheme } from '@mui/material';
import CountdownBox from './CountdownBox';
interface CountdownProps {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  completed: boolean,
  setCanRegister: React.Dispatch<React.SetStateAction<boolean>>,
}

function Renderer({ days, hours, minutes, seconds, completed, setCanRegister }: CountdownProps) {
  if (completed) setCanRegister(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box display='flex' flexDirection='row' gap={2} justifyContent='center' alignItems='center' my={2}>
      <Box display='flex' flexDirection={isSmallScreen ? 'column' : 'row'} gap={2}>
        <CountdownBox count={days} title='Days' isRegistrarion />
        <CountdownBox count={hours} title='Hours' isRegistrarion />
      </Box>
      <Box display='flex' flexDirection={isSmallScreen ? 'column' : 'row'} gap={2}>
        <CountdownBox count={minutes} title='Minutes' isRegistrarion />
        <CountdownBox count={seconds} title='Seconds' isRegistrarion />
      </Box>
    </Box>
  );
};

export default Renderer;
