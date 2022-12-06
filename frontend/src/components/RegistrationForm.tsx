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
  Checkbox,
} from "@mui/material";
import { useState } from 'react';
import envManager from "../config/envManager";
import axios from 'axios';


const backend = axios.create({
  baseURL: envManager.BACKEND_URL,
  withCredentials: true,
});

interface Props {
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>,
}

const RegistrationForm = ({ setIsRegistered }: Props) => {
  const [selectedOffice, setSelectedOffice] = useState('');
  const [firstWish, setFirstWish] = useState('');
  const [secondWish, setSecondWish] = useState('');
  const [thirdWish, setThirdWish] = useState('');
  const [checked, setChecked] = useState(true);
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedOffice(event.target.value as string);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const validateFields = () => {
    return selectedOffice !== '' && (checked || (firstWish !== '' && secondWish !== '' && thirdWish !== ''));
  }

  const handleSubmit = async () => {
    if (!validateFields()) alert('Fill all the required fields, please!');

    const sessionStorageData = sessionStorage.getItem('user');
    const jsonData = sessionStorageData && JSON.parse(sessionStorageData);

    let body = {
      'region': selectedOffice,
      'wishes': !checked ? [firstWish, secondWish, thirdWish] : '',
      'name': jsonData['name'],
      'email': jsonData['email'],
      'picture': jsonData['picture'],
    }

    const response = await backend.post('/player');
    response.status === 200 && setIsRegistered(true);
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
        <Box
          display={{
            sm: 'block',
            xs: 'block',
            md: 'flex',
          }}
          justifyContent="center"
          textAlign="center"
        >
          <Typography fontSize={{ xs: 30, sm: 30, md: 40 }} sx={{ mb: 3, wordWrap: "break-word" }} >REGISTRATION FORM</Typography>
          <Button onClick={handleOpen} sx={{ ml: { xs: 0, sm: 0, md: 5 }, bgcolor: 'rgba(255,0,0,1)', color: '#fff', '&:hover': { bgcolor: 'rgba(255,128,128,1)' }, height: '50px', mb: 5 }}>Rules</Button>
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
            <Box
              sx={{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'white',
                boxShadow: 24,
                p: 4,
                borderRadius: '10px'
              }}
              width={{
                xs: 250,
                sm: 250,
                md: 500,
              }}
            >
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
                <ListItem>
                  <ListItemText>
                    You can enter three wishes in the application to make it easy for your Secret Santa or you can uncheck the box to be surprised with a gift.
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
        <Typography variant="body1" component="div" sx={{ mb: 3 }} textAlign="left">{!checked ? 'I want to enter my christmas wishes' : 'Surprise me!'}<Checkbox sx={{ color: '#A30000', '&.Mui-checked': { color: '#A30000' }, }} checked={checked} onChange={handleChangeCheckbox} inputProps={{ 'aria-label': 'controlled' }} /></Typography>
        <>
          {
            !checked && <>
              <TextField required fullWidth label="First wish" value={firstWish} onChange={(e) => setFirstWish(e.target.value)} sx={{ mb: 3 }} />
              <TextField required fullWidth label="Second wish" value={secondWish} onChange={(e) => setSecondWish(e.target.value)} sx={{ mb: 3 }} />
              <TextField required fullWidth label="Third wish" value={thirdWish} onChange={(e) => setThirdWish(e.target.value)} sx={{ mb: 3 }} />
            </>
          }
        </>
        <Button fullWidth sx={{ height: '50px', color: '#fff', bgcolor: 'rgba(255,0,0,1)', '&:hover': { bgcolor: 'rgba(255,128,128,1)' } }} onClick={handleSubmit}>Register</Button>
      </Box>
    </Box >
  )
}

export default RegistrationForm
