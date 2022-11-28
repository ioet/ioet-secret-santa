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
  Modal,
  Backdrop,
  Fade,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from 'react';

interface Props {
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  open: boolean,
}

const RegistrationForm = ({ setIsRegistered, open, setOpen }: Props) => {
  const [selectedOffice, setSelectedOffice] = useState('');
  const [firstWish, setFirstWish] = useState('');
  const [secondWish, setSecondWish] = useState('');
  const [thirdWish, setThirdWish] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedOffice(event.target.value as string);
  };

  const handleSubmit = async () => {
    setIsRegistered(true);
  }


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <Box
          display='flex'
          width="100%"
          justifyContent="center"
        >
          <Typography variant="h2" component="h3" sx={{ mb: 3 }} >REGISTRATION FORM</Typography>
          <Button onClick={handleOpen} sx={{ ml: 5, borderRadius: '50%', bgcolor: 'rgba(255,0,0,1)', color: '#fff', '&:hover': { bgcolor: 'rgba(255,128,128,1)' }, width: '70px', height: '70px' }}>Rules</Button>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={{
              position: 'absolute' as 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 500,
              bgcolor: 'white',
              boxShadow: 24,
              p: 4,
              borderRadius: '10px'
            }}>
              <Typography variant="h6" component="h2" textAlign='center'>
                RULES
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    The gift will have a minimum of $20 and a maximum of whatever your heart desires.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    The gift will be delivered to your Secret Santa on December 16th during Christmas dinner.
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Fade>
        </Modal>
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
