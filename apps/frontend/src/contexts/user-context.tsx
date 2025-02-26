import { createContext } from 'react';
import type { UserContextType } from '../../types/auth';

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  isLoading: false,
  isAuthenticated: false,
  login: async () => false,
  logout: async () => {},
  loadUser: async () => {},
  checkAuth: async () => false,
  googleAuth: async () => {},
  requestPasswordReset: async () => false,
  updatePassword: async () => false,
});
