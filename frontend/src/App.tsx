import { useState, useEffect } from 'react'
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      {
        isLogged
          ? <Home isRegistered={isRegistered} setIsRegistered={setIsRegistered} isAdmin={isAdmin} setIsLogged={setIsLogged} setIsAdmin={setIsAdmin} />
          : <Login setIsLogged={setIsLogged} setIsAdmin={setIsAdmin} />
      }
    </>
  )
}

export default App
