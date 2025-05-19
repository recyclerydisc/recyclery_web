import { ChangeEvent } from 'react';
import PasswordField from './password-field';
import TitledInput from './titled-input';

export type InputPasswordProps = {
  title: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
  required?: boolean;
  className?: string; // to allow for tailwind styling (?)
}

const InputPassword = ({ title, ...rest }: InputPasswordProps) => {
  return (
    <TitledInput title={title} required={rest.required}>
      <PasswordField {...rest} />
    </TitledInput>
  );
};

export default InputPassword;
