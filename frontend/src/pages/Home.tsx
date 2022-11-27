import { useState } from 'react';
import Registration from './Registration';
import envManager from "../config/envManager";
import SecretSanta from './SecretSanta';

interface Props {
  isRegistered: boolean,
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>
}

const Home = ({ isRegistered, setIsRegistered }: Props) => {
  const [registrationDeadline] = useState(envManager.REGISTRATION_DEADLINE);
  const [gameDeadline] = useState(envManager.GAME_DEADLINE);

  return (
    <>
      {
        isRegistered
          ? <SecretSanta countdown={gameDeadline} />
          : <Registration setIsRegistered={setIsRegistered} countdown={registrationDeadline} />
      }
    </>
  );
}

export default Home;
