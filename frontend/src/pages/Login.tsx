import { Button, Box, Grid } from '@mui/material';

import { useState, useEffect } from 'react'
import axios from "axios"
import IOETLogo from '../assets/ioet.png';
import BackgoundImage from '../assets/christmas_background.gif';
import envManager from "../config/envManager";

interface Props {
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>,
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>,
}

const loginURL = `${envManager.AUTH_URL}/authn/login/${envManager.APP_NAME}`;
const backend = axios.create({
  baseURL: envManager.BACKEND_URL,
  withCredentials: true,
});

const Login = ({ setIsLogged, setIsAdmin }: Props) => {

  useEffect(() => {
    const getUserPermissions = async () => {
      try {
        const response = await backend.get("/api/authz/user-permissions");
        return response?.status === 200 ? response?.data : null;
      } catch (error) {
        return null;
      }
    };

    const fetchAndCheckUserPermissions = async () => {
      const user = await getUserPermissions();
      if (user != null) {
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
    </Grid >
  )
}

export default Login
