import { useState, useEffect } from 'react'
import { ThemeProvider } from '@mui/material';
import Login from './pages/Login';
import Home from './pages/Home';



function App() {

  const [isLogged, setIsLogged] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {

  }, []);

  return (
    <>
      {
        isLogged
          ? <Home isRegistered={isRegistered} setIsRegistered={setIsRegistered} />
          : <Login setIsLogged={setIsLogged} />
      }
    </>
  )
}

export default App
