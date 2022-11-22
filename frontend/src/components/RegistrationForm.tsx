import {
  Grid,
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from 'react';

const RegistrationForm = () => {
  const [selectedOffice, setSelectedOffice] = useState('');
  const [firstWish, setFirstWish] = useState('');
  const [secondWish, setSecondWish] = useState('');
  const [thirdWish, setThirdWish] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedOffice(event.target.value as string);
  };

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
          <Typography variant="h2" component="h3">REGISTRATION FORM</Typography>
        </Grid>
        <Grid item width="100%">
          <FormControl fullWidth>
            <InputLabel id="office-select-label">Select your office *</InputLabel>
            <Select
              labelId="office-select-label"
              value={selectedOffice}
              label="Select your office"
              onChange={handleChange}
              required
            >
              <MenuItem value={'Quito'}>Quito</MenuItem>
              <MenuItem value={'Guayaquil'}>Guayaquil</MenuItem>
              <MenuItem value={'Loja'}>Loja</MenuItem>
            </Select>
          </FormControl>
        </Grid >
        <Grid item width="100%">
          <Typography variant="body1" component="div">Enter three things you would like to wish for Christmas:</Typography>
        </Grid>
        <Grid item width="100%">
          <TextField required fullWidth label="First wish" value={firstWish} onChange={(e) => setFirstWish(e.target.value)} />
        </Grid>
        <Grid item width="100%">
          <TextField required fullWidth label="Second wish" value={secondWish} onChange={(e) => setSecondWish(e.target.value)} />
        </Grid>
        <Grid item width="100%">
          <TextField required fullWidth label="Third wish" value={thirdWish} onChange={(e) => setThirdWish(e.target.value)} />
        </Grid>
      </Grid >
    </Grid >
  )
}

export default RegistrationForm
