import Admin from './Admin';
import axios from 'axios';
import envManager from '../config/envManager';
import Registration from './Registration';
import SecretSanta from './SecretSanta';
import { useEffect, useState } from 'react';
import { useUserContext } from '../hooks/useUserContext';

const backend = axios.create({
  baseURL: envManager.BACKEND_URL,
  withCredentials: true,
});

const Home = () => {
  const { 
    isRegistered, 
    setIsRegistered, 
    isAdmin, 
  } = useUserContext();

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
          ? <Admin />
          : <>
            {
              isRegistered
                ? <SecretSanta countdown={registrationDeadline} />
                : <Registration countdown={registrationDeadline} />
            }
          </>
      }
    </>
  );
}

export default Home;
