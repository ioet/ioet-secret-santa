import {
  Box,
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  Button,
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

  const handleSubmit = () => {

  }

  return (
    <Box
      width="100%"
      height="100%"
    >
      <Box
        display='block'
        paddingX={{
          md: 10,
          sm: 5,
          xs: 5
        }}
        textAlign="center"
      >
        <Typography variant="h2" component="h3" sx={{ mb: 3 }} >REGISTRATION FORM</Typography>
        <FormControl fullWidth sx={{ mb: 3 }}>
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
        <Typography variant="body1" component="div" sx={{ mb: 3 }} textAlign="left">Enter three things you would like to wish for Christmas:</Typography>
        <TextField required fullWidth label="First wish" value={firstWish} onChange={(e) => setFirstWish(e.target.value)} sx={{ mb: 3 }} />
        <TextField required fullWidth label="Second wish" value={secondWish} onChange={(e) => setSecondWish(e.target.value)} sx={{ mb: 3 }} />
        <TextField required fullWidth label="Third wish" value={thirdWish} onChange={(e) => setThirdWish(e.target.value)} sx={{ mb: 3 }} />
        <Button fullWidth sx={{ height: '50px', color: '#fff', bgcolor: 'rgba(255,0,0,1)', '&:hover': { bgcolor: 'rgba(255,128,128,1)' } }} onClick={handleSubmit}>Register</Button>
      </Box>
    </Box >
  )
}

export default RegistrationForm
