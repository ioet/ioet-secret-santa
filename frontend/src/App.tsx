import Home from './pages/Home';
import Login from './pages/Login';
import { useUserContext } from './hooks/useUserContext';

const App = () => {
  const { isLogged } = useUserContext();

  return isLogged ? <Home /> : <Login />
}

export default App
