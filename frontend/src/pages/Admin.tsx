import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Typography,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
  Divider
} from "@mui/material";
import { useState } from "react"
import Appbar from "../components/Appbar";

interface Props {
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>
}

const Admin = ({ setIsAdmin }: Props) => {
  const [selectedOffice, setSelectedOffice] = useState('');
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedOffice(event.target.value as string);

    // llamar al backend para conseguir los resultados por oficina
    setSelectedPlayers([]);
  };

  const handleRestart = () => {
    const firstResponse = confirm('Are you sure you want to restart the game?\nThis will erase all log data and game operations.');
    var secondResponse;
    var thirdResponse;

    if (firstResponse) {
      secondResponse = confirm('But are you absolutely sure you want to restart the game?');

      if (secondResponse) {
        thirdResponse = confirm('Last time, 100% sure?\nNo turning back :o');

        if (thirdResponse) {
          //reiniciar el juego
        }
      }
    }
  }

  const handleStart = () => {
    // comenzar el juego
    // llamada al backend
  }

  const handlePlay = () => {
    setIsAdmin(false);
  }

  return (
    <Box display='block' width='100vw'>
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
            display: 'grid',
          }}
          width='100%'
          height='100%'
        >
          <Appbar isAdmin={true} />
          <Box
            sx={{ mt: '64px' }}
            display={{
              xs: 'block',
              sm: 'block',
              md: 'flex',
            }}
          >
            <Box
              width={{
                xs: '100%',
                sm: '100%',
                md: '50%',
              }}
              height={{
                xs: 'auto',
                sm: 'auto',
                md: '100%'
              }}
            >
              <Box
                sx={{
                  p: 5,
                  height: 'auto'
                }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" component="div" sx={{ mb: '10px' }}>
                      Players by office
                    </Typography>
                    <Divider />
                    <FormControl fullWidth sx={{ mt: 2 }}>
                      <InputLabel id="office-select-label">Select the office *</InputLabel>
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
                    {
                      selectedPlayers.map((result) => (
                        <Typography
                          key={result['player']['timestamp']}
                        >
                          {result['player']['name']} - {result['secret-santa']['name']}
                        </Typography>
                      ))
                    }
                  </CardContent>
                </Card>
              </Box>
            </Box>
            <Box
              width={{
                xs: '100%',
                sm: '100%',
                md: '50%',
              }}
              height={{
                xs: 'auto',
                sm: 'auto',
                md: '100%'
              }}
            >
              <Box
                sx={{
                  p: 5,
                  height: 'auto'
                }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" component="div" sx={{ mb: '10px' }}>
                      Admin Actions
                    </Typography>
                    <Divider />
                    <Typography sx={{ mt: 2 }}>Go to the game</Typography>
                    <Button
                      fullWidth
                      sx={{ bgcolor: '#A30000', color: '#fff', '&:hover': { bgcolor: 'rgba(255,128,128,1)' } }}
                      onClick={handlePlay}
                    >GAME</Button>
                    <Typography sx={{ mt: 2 }}>Press the following button to start the Secret Santa.</Typography>
                    <Button
                      fullWidth
                      sx={{ bgcolor: '#A30000', color: '#fff', '&:hover': { bgcolor: 'rgba(255,128,128,1)' } }}
                      onClick={handleStart}
                    >START</Button>
                    <Typography sx={{ mt: 2 }}>Press the following button to restart the game.</Typography>
                    <Button
                      fullWidth
                      sx={{ bgcolor: '#A30000', color: '#fff', '&:hover': { bgcolor: 'rgba(255,128,128,1)' } }}
                      onClick={handleRestart}
                    >RESTART</Button>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default Admin
