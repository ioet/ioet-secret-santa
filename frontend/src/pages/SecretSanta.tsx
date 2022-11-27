import { Typography, Box, Card, CardContent, Divider } from "@mui/material";
import { useState } from "react";
import Countdown from "react-countdown";
import Appbar from "../components/Appbar";

interface Props {
  countdown: any
}

const SecretSanta = ({ countdown }: Props) => {
  const [secretSanta, setSecretSanta] = useState({ 'name': 'Eliangei', 'wishes': ['1', '2', '3'] });
  const [hasInfo, setHasInfo] = useState(false);

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
            alignItems: 'center'
          }}
          width='100%'
          height='100%'
        >
          <Appbar />
          <Box sx={{ textAlign: 'center', }}>
            {
              hasInfo
                ? <Box
                  padding={{
                    sm: 5,
                    xs: 5,
                    md: 15,
                  }}
                >
                  <Card>
                    <CardContent>
                      <Typography variant='h4'>Your Secret Santa is:</Typography>
                      <Divider />
                      <Typography variant='h6' sx={{ mt: 3 }}>{secretSanta['name']}</Typography>
                      <Box
                        sx={{
                          p: 5
                        }}
                      >
                        <Typography textAlign='left'>Its wishes are:</Typography>
                        {
                          secretSanta['wishes'].map((wish) => (
                            <Typography key={wish} textAlign='left'>- {wish}</Typography>
                          ))
                        }
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
                : <>
                  <Typography variant='body1' sx={{ color: 'white' }}>Thank you for registering for the Christmas Secret Santa game! Wait until the counter reaches zero to find out who is your Secret Santa!</Typography>
                  <Countdown date={countdown} />
                </>
            }
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default SecretSanta
