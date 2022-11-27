import { Typography, Hidden, Button, Box } from "@mui/material";
import Image from ".././assets/christmas-gifts.webp"
import RegistrationForm from "../components/RegistrationForm";

interface Props {
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>
}

const Registration = ({ setIsRegistered }: Props) => {
  const scrollWindow = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }

  return (
    <Box display='block'>
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
            display: 'flex',
            alignItems: 'center',
          }}
          width={{
            sm: '100%',
            md: '50%'
          }}
          height={{
            xs: '30vh',
            sm: '30vh',
            md: '100vh',
          }}
        >
          <Box
            sx={{
              display: 'block',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                p: 5,
                wordWrap: "break-word"
              }}
            >The registration countdown begun!</Typography>
            <Hidden only={['sm', 'xs']}>
              <Button onClick={scrollWindow} sx={{ width: '250px', color: '#A30000', bgcolor: '#fff', '&:hover': { bgcolor: '#bbb' } }}>Register</Button>
            </Hidden>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
          width={{
            sm: '100%',
            md: '50%'
          }}
          height={{
            xs: '70vh',
            sm: '70vh',
            md: '100vh',
          }}
        >
          <Box
            sx={{
              display: 'block',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <Box component="img" src={Image} alt="Christmas gifts image" sx={{ maxWidth: '300px' }} />
            <br></br>
            {/* Countdown component here */}
            <Hidden only={['md', 'lg', 'xl']}>
              <Button onClick={scrollWindow} sx={{ width: '250px', color: '#A30000', bgcolor: '#fff', '&:hover': { bgcolor: '#bbb' } }}>Register</Button>
            </Hidden>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'grid',
          alignContent: 'center',
        }}
        width='100%'
        height='100vh'
      >
        <RegistrationForm />
      </Box>
    </Box >
  )
}

export default Registration
