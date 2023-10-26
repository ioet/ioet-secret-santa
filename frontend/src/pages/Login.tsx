import axios from 'axios';
import BackgoundImage from '../assets/christmas_background.gif';
import envManager from '../config/envManager';
import IOETLogo from '../assets/ioet.png';
import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar
  } from '@mui/material';
import { useEffect, useState } from 'react';
import { useUserContext } from '../hooks/useUserContext';

const loginURL = `${envManager.AUTH_URL}/authn/login/${envManager.APP_NAME}`;
const backend = axios.create({
  baseURL: envManager.BACKEND_URL,
  withCredentials: true,
});

const Login = () => {
  const [showError, setShowError] = useState<string | null>(null);
  const { setIsLogged, setIsAdmin } = useUserContext();

  useEffect(() => {
    const getUserPermissions = async () => {
      try {
        const response = await backend.get("/api/authz/user-permissions");
        if(response?.data.error_message) {
          setShowError(response.data.error_message)
          return null;
        } else {
          return response?.data;
        }
      } catch (error) {
        return null;
      }
    };

    const fetchAndCheckUserPermissions = async () => {
      const user = await getUserPermissions();
      if (user) {
        sessionStorage.setItem("user", JSON.stringify(user));
        setIsLogged(true);

        user["roles"][envManager.APP_NAME].map((role: string) => {
          role === "admin" && setIsAdmin(true)
        })
      } else {
        sessionStorage.clear();
      }
    };

    fetchAndCheckUserPermissions();
  }, []);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
      sx={{ backgroundImage: `url(${BackgoundImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      <Box
        component='img'
        alt='ioet logo.'
        src={IOETLogo}
      />
      <Button href={loginURL} sx={{ width: '200px', bgcolor: '#A30000', color: 'white', '&:hover': { bgcolor: '#F51300' } }}>LOGIN</Button>
      {showError && <Snackbar open={showError !== null} autoHideDuration={6000} onClose={() => setShowError(null)}>
        <Alert onClose={() => setShowError(null)} severity="error" sx={{ width: '100%' }}>
          {showError}
        </Alert>
      </Snackbar>}
    </Grid >
  )
}

export default Login
