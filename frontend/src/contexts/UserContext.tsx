import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
  } from 'react';

type UserContextType = {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  isRegistered: boolean;
  setIsRegistered: Dispatch<SetStateAction<boolean>>;
  isAdmin: boolean;
  setIsAdmin: Dispatch<SetStateAction<boolean>>;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <UserContext.Provider value={{ 
      isLogged,
      setIsLogged,
      isRegistered,
      setIsRegistered,
      isAdmin,
      setIsAdmin 
    }}>
      {children}
    </UserContext.Provider>
  );
};
