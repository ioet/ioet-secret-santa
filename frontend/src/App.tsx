import { useState, useEffect } from 'react'
import { ThemeProvider } from '@mui/material';
import Login from './pages/Login';
import Home from './pages/Home';
import Theme from './theme'



function App() {

  const [isLogged, setIsLogged] = useState(true);
  const [isRegistered, setIsRegistered] = useState(true);

  useEffect(() => {

  }, []);

  return (
    <ThemeProvider theme={Theme}>
      {
        isLogged
          ? <Home isRegistered={isRegistered} setIsRegistered={setIsRegistered} />
          : <Login setIsLogged={setIsLogged} />
      }
    </ThemeProvider>
  )
}

export default App
