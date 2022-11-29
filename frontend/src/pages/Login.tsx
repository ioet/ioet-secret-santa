import { Button, Box, Grid } from '@mui/material';

import { useState, useEffect } from 'react'
import axios from "axios"
import IOETLogo from '../assets/ioet.png';
import BackgoundImage from '../assets/christmas_background.gif';
import envManager from "../config/envManager";

interface Props {
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
}

const loginURL = `${envManager.AUTH_URL}authn/login/${envManager.APP_NAME}`;
const backend = axios.create({
  baseURL: envManager.BACKEND_URL,
  withCredentials: true,
});

const Login = ({ setIsLogged }: Props) => {

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
      style={{ minHeight: '97vh' }}
      sx={{ backgroundImage: `url(${BackgoundImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      <Box
        component='img'
        alt='ioet logo.'
        src={IOETLogo}
      />
      <Button variant='contained' size="large" href={loginURL} >LOGIN</Button>
    </Grid >
  )
}

export default Login
