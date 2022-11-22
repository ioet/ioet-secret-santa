import {
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const SecretSanta = () => {
  return (
    <Grid
      container
      spacing={2}
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
      margin="10px"
    >
      <Grid
        container
        width={{ sm: "100vw", md: "50vw" }}
        spacing={2}
        marginLeft='2px'
      >
        <Grid item width="100%" textAlign="center">
          <Typography variant="h2" component="h3">SECRET SANTA</Typography>
        </Grid>
        <Grid item width="100%">

        </Grid>
        <Grid item width="100%">

        </Grid>
      </Grid >
    </Grid >
  )
}

export default SecretSanta;
