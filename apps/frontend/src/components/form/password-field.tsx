import { useState, ChangeEvent } from 'react';
import { StyledInput, PasswordContainer, IconContainer } from './styles';
import { EyeIcon, EyeClosedIcon } from './icons';

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
    <PasswordContainer>
      <StyledInput type={showPassword ? 'text' : 'password'} {...props} />
      <IconContainer onClick={toggleShowPassword}>
        {showPassword ? <EyeClosedIcon /> : <EyeIcon />}
      </IconContainer>
    </PasswordContainer>
  );
};

export default PasswordField;
