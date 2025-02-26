import { ChangeEvent } from 'react';
import TitledInput from './titled-input';
import PasswordField from './password-field';

interface InputPasswordProps {
  title: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
  required?: boolean;
}

const InputPassword = ({ title, ...rest }: InputPasswordProps) => {
  return (
    <TitledInput title={title} required={rest.required}>
      <PasswordField {...rest} />
    </TitledInput>
  );
};

export default InputPassword;
