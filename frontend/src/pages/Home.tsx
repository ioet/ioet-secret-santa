import { useEffect, useState } from 'react';
import Registration from './Registration';
import Admin from './Admin';
import envManager from "../config/envManager";
import SecretSanta from './SecretSanta';
import axios from 'axios';


const backend = axios.create({
  baseURL: envManager.BACKEND_URL,
  withCredentials: true,
});

interface Props {
  isRegistered: boolean,
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>,
  isAdmin: boolean,
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>,
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>,
}

const Home = ({ isRegistered, setIsRegistered, isAdmin, setIsAdmin, setIsLogged }: Props) => {
  const [registrationDeadline] = useState(envManager.REGISTRATION_DEADLINE.replace(/["']/g, ''));

  const sessionStorageData = sessionStorage.getItem('user');
  const jsonData = sessionStorageData && JSON.parse(sessionStorageData);

  const fetchRegistrationStatus = async () => {
    const response = await backend.get(`/player/get/${jsonData['email']}`);
    return response.status === 200 ? response.data : null;
  }

  useEffect(() => {
    const validateRegistrationStatus = async () => {
      const status = await fetchRegistrationStatus();
      status && setIsRegistered(status['is_player_registered'])
    }
    validateRegistrationStatus();
  }, [])

  return (
    <>
      {
        isAdmin
          ? <Admin setIsAdmin={setIsAdmin} setIsLogged={setIsLogged} />
          : <>
            {
              isRegistered
                ? <SecretSanta countdown={registrationDeadline} setIsLogged={setIsLogged} />
                : <Registration setIsRegistered={setIsRegistered} countdown={registrationDeadline} />
            }
          </>
      }
    </>
  );
}

export default Home;
