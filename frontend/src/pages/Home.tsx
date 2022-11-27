import { useState } from 'react';
import SecretSanta from '../components/SecretSanta';
import Registration from './Registration';
import envManager from "../config/envManager";

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
          ? null
          : < Registration />
      }
    </>
  );
}

export default Home;
