import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContext provider');
  }
  return context;
};
