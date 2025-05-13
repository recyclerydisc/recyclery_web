import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  color?: 'blue' | 'orange' | 'white';
}

export function Button({ children, onClick, className, color = 'blue' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${color === 'blue' && 'bg-blue-500 hover:bg-blue-700 text-white'} ${color === 'orange' && 'bg-orange-500 hover:bg-orange-700 text-white'} ${color === 'white' && 'bg-white hover:bg-green-800 text-darkblue-900 hover:text-white'} px-3 py-2 rounded-2xl text-body2 cursor-pointer transition-colors font-brandon ${className}`}
    >
      {children}
    </button>
  );
}
