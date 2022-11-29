import { useState } from 'react';
import Registration from './Registration';
import Admin from './Admin';
import envManager from "../config/envManager";
import SecretSanta from './SecretSanta';

interface Props {
  isRegistered: boolean,
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>,
  isAdmin: boolean,
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>,
}

const Home = ({ isRegistered, setIsRegistered, isAdmin }: Props) => {
  const [registrationDeadline] = useState(envManager.REGISTRATION_DEADLINE);
  const [gameDeadline] = useState(envManager.GAME_DEADLINE);

  return (
    <>
      {
        isAdmin
          ? <Admin setIsAdmin={setIsAdmin} />
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
