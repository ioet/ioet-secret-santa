import Admin from './Admin';
import envManager from '../config/envManager';
import Registration from './Registration';
import SecretSanta from './SecretSanta';
import { getRegistrationStatus } from '../services/player';
import { useEffect, useState } from 'react';
import { useUserContext } from '../hooks/useUserContext';

const Home = () => {
  const {
    isRegistered,
    setIsRegistered,
    isAdmin,
  } = useUserContext();

  const [registrationDeadline] = useState(envManager.REGISTRATION_DEADLINE.replace(/["']/g, ''));

  const sessionStorageData = sessionStorage.getItem('user');
  const jsonData = sessionStorageData && JSON.parse(sessionStorageData);

  useEffect(() => {
    const validateRegistrationStatus = async () => {
      const status = await getRegistrationStatus(jsonData['email']);
      status && setIsRegistered(status['is_player_registered'])
    }
    validateRegistrationStatus();
  }, [])

  return isAdmin
    ? <Admin />
    : <>
      {
        isRegistered
          ? <SecretSanta countdown={registrationDeadline} />
          : <Registration countdown={registrationDeadline} />
      }
    </>
}

export default Home;
