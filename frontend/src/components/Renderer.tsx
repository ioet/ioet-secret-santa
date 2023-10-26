import { Grid, Typography } from '@mui/material';
import '../styles/Renderer.css';
interface CountdownProps {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  completed: boolean,
  setCanRegister: React.Dispatch<React.SetStateAction<boolean>>,
}

function Renderer({ days, hours, minutes, seconds, completed, setCanRegister }: CountdownProps) {

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

  if (completed) setCanRegister(false);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
    >
      <div className="date-group">
        <div style={{ 'display': 'flex' }}>
          <Grid item width={{ xs: '50px', sm: '50px', md: '75px' }} height={{ xs: '75px', sm: '75px', md: '100px' }} border={1} textAlign="center" sx={{ mr: 1, backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
            <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ pt: 2.5 }}>{getFirstNumber(days)}</Typography>
          </Grid>
          <Grid item width={{ xs: '50px', sm: '50px', md: '75px' }} height={{ xs: '75px', sm: '75px', md: '100px' }} border={1} textAlign="center" sx={{ backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
            <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ pt: 2.5 }}>{getSecondNumber(days)}</Typography>
          </Grid>
        </div>
        <Typography variant="h6" sx={{ pt: 1, color: '#fff' }}>DAYS</Typography>
      </div>
      <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ color: '#fff', mr: 1, mb: 7, ml: 1 }} align='center'>:</Typography>
      <div className="date-group">
        <div style={{ 'display': 'flex' }}>
          <Grid item width={{ xs: '50px', sm: '50px', md: '75px' }} height={{ xs: '75px', sm: '75px', md: '100px' }} border={1} textAlign="center" sx={{ mr: 1, backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
            <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ pt: 2.5 }}>{getFirstNumber(hours)}</Typography>
          </Grid>
          <Grid item width={{ xs: '50px', sm: '50px', md: '75px' }} height={{ xs: '75px', sm: '75px', md: '100px' }} border={1} textAlign="center" sx={{ backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
            <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ pt: 2.5 }}>{getSecondNumber(hours)}</Typography>
          </Grid>
        </div>
        <Typography variant="h6" sx={{ pt: 1, color: '#fff' }}>HOURS</Typography>
      </div>
      <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ color: '#fff', mr: 1, mb: 7, ml: 1 }}>:</Typography>
      <div className="date-group">
        <div style={{ 'display': 'flex' }}>
          <Grid item width={{ xs: '50px', sm: '50px', md: '75px' }} height={{ xs: '75px', sm: '75px', md: '100px' }} border={1} textAlign="center" sx={{ mr: 1, backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
            <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ pt: 2.5 }}>{getFirstNumber(minutes)}</Typography>
          </Grid>
          <Grid item width={{ xs: '50px', sm: '50px', md: '75px' }} height={{ xs: '75px', sm: '75px', md: '100px' }} border={1} textAlign="center" sx={{ backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
            <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ pt: 2.5 }}>{getSecondNumber(minutes)}</Typography>
          </Grid>
        </div>
        <Typography variant="h6" sx={{ pt: 1, color: '#fff' }}>MINUTES</Typography>
      </div>
      <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ color: '#fff', mr: 1, mb: 7, ml: 1 }}>:</Typography>
      <div className="date-group">
        <div style={{ 'display': 'flex' }}>
          <Grid item width={{ xs: '50px', sm: '50px', md: '75px' }} height={{ xs: '75px', sm: '75px', md: '100px' }} border={1} textAlign="center" sx={{ mr: 1, backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
            <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ pt: 2.5 }}>{getFirstNumber(seconds)}</Typography>
          </Grid>
          <Grid item width={{ xs: '50px', sm: '50px', md: '75px' }} height={{ xs: '75px', sm: '75px', md: '100px' }} border={1} textAlign="center" sx={{ mr: 1, backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
            <Typography fontSize={{ xs: 25, sm: 25, md: 40 }} sx={{ pt: 2.5 }}>{getSecondNumber(seconds)}</Typography>
          </Grid>
        </div>
        <Typography variant="h6" sx={{ pt: 1, color: '#fff' }}>SECONDS</Typography>
      </div>
    </Grid>
  );
};

export default Renderer;
