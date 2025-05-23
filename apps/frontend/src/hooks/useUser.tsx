import { useContext } from 'react';
import type { UserContextType } from '../../types/auth.ts';
import { UserContext } from '../contexts/user-context.tsx';

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
