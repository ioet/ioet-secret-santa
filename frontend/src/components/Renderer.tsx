import { Typography, Grid } from "@mui/material";

interface CountdownProps {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
}

const renderer = ({ days, hours, minutes, seconds }: CountdownProps) => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
    >
      <Grid item width='75px' height='75px' border={1} textAlign="center" sx={{ mr: 1, backgroundColor: '#3F8E0F', borderColor: '#3F8E0F', color: '#fff' }}>
        <Typography sx={{ pt: 3 }}>{days}</Typography>
      </Grid>
      <Grid item width='75px' height='75px' border={1} textAlign="center" sx={{ mr: 1, backgroundColor: '#3F8E0F', borderColor: '#3F8E0F', color: '#fff' }}>
        <Typography sx={{ pt: 3 }}>{hours}</Typography>
      </Grid>
      <Grid item width='75px' height='75px' border={1} textAlign="center" sx={{ mr: 1, backgroundColor: '#3F8E0F', borderColor: '#3F8E0F', color: '#fff' }}>
        <Typography sx={{ pt: 3 }}>{minutes}</Typography>
      </Grid>
      <Grid item width='75px' height='75px' border={1} textAlign="center" sx={{ backgroundColor: '#3F8E0F', borderColor: '#3F8E0F', color: '#fff' }}>
        <Typography sx={{ pt: 3 }}>{seconds}</Typography>
      </Grid>
    </Grid>
  );
};

export default renderer;
