import { ChangeEvent, useState } from 'react';
import { EyeClosedIcon, EyeIcon } from './icons';

interface PasswordFieldProps {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
  required?: boolean;
}

const PasswordField = (props: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-fit">
      <input
        className="text-[1rem] p-2 border rounded-[8px] w-full max-w-[375px]"
        type={showPassword ? 'text' : 'password'}
        {...props}
      />
      <div
        className="absolute right-[10px] top-2 bg-white cursor-pointer"
        onClick={toggleShowPassword}
      >
        {showPassword ? <EyeClosedIcon /> : <EyeIcon />}
      </div>
    </div>
  );
};

export default PasswordField;
