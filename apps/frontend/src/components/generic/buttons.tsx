import React from 'react';
import { Link } from 'react-router-dom';

export function BlueButtonLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors font-brandon"
    >
      {children}
    </Link>
  );
}

export function OrangeButtonLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="bg-orange-500 hover:bg-orange-700 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors font-brandon w-auto"
    >
      {children}
    </Link>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
}

export function BlueButton({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors font-brandon"
    >
      {children}
    </button>
  );
}

export function OrangeButton({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-orange-500 hover:bg-orange-700 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors font-brandon"
    >
      {children}
    </button>
  );
}
