import { ChangeEvent } from 'react';
import { StyledInput } from './styles';

interface TextFieldProps {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
  required?: boolean;
}

const TextField = (props: TextFieldProps) => {
  return <StyledInput type="text" placeholder={props.placeholder || 'Text Here'} {...props} />;
};

export default TextField;
