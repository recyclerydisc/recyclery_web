import React from 'react';

export interface User {
  id: string;
  email: string;
  username: string;
  firstname?: string | null;
  lastname?: string | null;
}

export interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
  checkAuth: () => Promise<boolean>;
  googleAuth: () => Promise<void>;
  requestPasswordReset: (email: string) => Promise<boolean>;
  updatePassword: (password: string, accessToken: string) => Promise<boolean>;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  username: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps {
  title: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export interface GoogleButtonProps {
  isLoading?: boolean;
  onClick: () => void;
  text?: string;
}
