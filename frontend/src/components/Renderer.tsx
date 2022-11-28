import { Typography, Grid, Box } from "@mui/material";
import '../styles/Renderer.css'
interface CountdownProps {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
}

function Renderer({ days, hours, minutes, seconds }: CountdownProps){

  function getFirstNumber(date: number){
    if (date < 10){
      return 0;
    }
    const firstDigit = date.toString().substring(0,1);
    return firstDigit;
  }

  function getSecondNumber(date: number){
    const secondDigit = date.toString().slice(-1);
    return Number(secondDigit);
  }


  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
      >
        <div className="date-group">
          <div style={{'display':'flex'}}>
            <Grid item width='75px' height='100px' border={1} textAlign="center" sx={{ mr: 1, backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
              <Typography variant="h3" sx={{ pt: 3 }}>{getFirstNumber(days)}</Typography>
            </Grid>
            <Grid item width='75px' height='100px' border={1} textAlign="center" sx={{backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
              <Typography variant="h3" sx={{ pt: 3 }}>{getSecondNumber(days)}</Typography>
            </Grid>
          </div>
          <Typography variant="h6" sx={{ pt: 3, color:'#fff' }}>DAYS</Typography>
        </div>
        <Typography variant="h3" sx={{ color:'#fff', mr: 1, mb: 7, ml: 1 }} align='center'>:</Typography>
        <div className="date-group">
          <div style={{'display':'flex'}}>
            <Grid item width='75px' height='100px' border={1} textAlign="center" sx={{ mr: 1, backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
              <Typography variant="h3" sx={{ pt: 3 }}>{getFirstNumber(hours)}</Typography>
            </Grid>
            <Grid item width='75px' height='100px' border={1} textAlign="center" sx={{backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
              <Typography variant="h3" sx={{ pt: 3 }}>{getSecondNumber(hours)}</Typography>
            </Grid>
          </div>
          <Typography variant="h6" sx={{ pt: 3, color:'#fff' }}>HOURS</Typography>
        </div>
        <Typography variant="h3" sx={{ color:'#fff', mr: 1, mb: 7, ml: 1 }}>:</Typography>
        <div className="date-group">
          <div style={{'display':'flex'}}>
            <Grid item width='75px' height='100px' border={1} textAlign="center" sx={{ mr: 1, backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
              <Typography variant="h3" sx={{ pt: 3 }}>{getFirstNumber(minutes)}</Typography>
            </Grid>
            <Grid item width='75px' height='100px' border={1} textAlign="center" sx={{backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
              <Typography variant="h3" sx={{ pt: 3 }}>{getSecondNumber(minutes)}</Typography>
            </Grid>
          </div>
          <Typography variant="h6" sx={{ pt: 3, color:'#fff' }}>MINUTES</Typography>
        </div>
        <Typography variant="h3" sx={{ color:'#fff', mr: 1, mb: 7, ml: 1 }}>:</Typography>
        <div className="date-group">
          <div style={{'display':'flex'}}>
            <Grid item width='75px' height='100px' border={1} textAlign="center" sx={{ mr: 1, backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
              <Typography variant="h3" sx={{ pt: 3 }}>{getFirstNumber(seconds)}</Typography>
            </Grid>
            <Grid item width='75px' height='100px' border={1} textAlign="center" sx={{ mr: 1, backgroundColor: '#fff', borderColor: '#fff', borderRadius: 3, color: '#6B2424' }}>
              <Typography variant="h3" sx={{ pt: 3 }}>{getSecondNumber(seconds)}</Typography>
            </Grid>
          </div>
          <Typography variant="h6" sx={{ pt: 3, color:'#fff' }}>SECONDS</Typography>
        </div>
      </Grid>
        
    </>
  );
};

export default Renderer;
