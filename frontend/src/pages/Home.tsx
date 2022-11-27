import { useEffect, useState } from 'react';
import Registration from './Registration';
import Admin from './Admin';
import envManager from "../config/envManager";
import SecretSanta from './SecretSanta';

interface Props {
  isRegistered: boolean,
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>
}

const Home = ({ isRegistered, setIsRegistered }: Props) => {
  const [registrationDeadline] = useState(envManager.REGISTRATION_DEADLINE);
  const [gameDeadline] = useState(envManager.GAME_DEADLINE);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // llamada al auth para conocer el rol

    setIsAdmin(true);
  }, []);

  return (
    <>
      {
        isAdmin
          ? <Admin />
          : <>
            {
              isRegistered
                ? <SecretSanta countdown={gameDeadline} />
                : <Registration setIsRegistered={setIsRegistered} countdown={registrationDeadline} />
            }
          </>
      }
    </>
  );
}

export default Home;
