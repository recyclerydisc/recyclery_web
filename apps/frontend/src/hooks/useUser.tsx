import { useContext } from 'react';
import { UserContext } from '../contexts/user-context';
import type { UserContextType } from '../../types/auth';

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
