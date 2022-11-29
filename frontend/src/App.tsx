import { useState, useEffect } from 'react'
import Login from './pages/Login';
import Home from './pages/Home';

function App() {

  const [isLogged, setIsLogged] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);

  useEffect(() => {
    //validar login y registro desde auth
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
