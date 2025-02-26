import { ChangeEvent } from 'react';
import TitledInput from './titled-input';
import TextField from './text-field';

interface InputTextProps {
  title: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
  required?: boolean;
}

const InputText = ({ title, ...rest }: InputTextProps) => {
  return (
    <TitledInput title={title} required={rest.required}>
      <TextField {...rest} />
    </TitledInput>
  );
};

export default InputText;
