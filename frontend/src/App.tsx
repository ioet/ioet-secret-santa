import { useState, useEffect } from 'react'
import Login from './pages/Login';
import Home from './pages/Home';


function App() {

  const [isLogged, setIsLogged] = useState(true);

  useEffect(() => {

  }, []);

  return (
    isLogged
      ? <Home />
      : <Login />
  )
}

export default App
