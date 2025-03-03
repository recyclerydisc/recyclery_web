import { ChangeEvent } from 'react';

interface TextFieldProps {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
  required?: boolean;
}

const TextField = (props: TextFieldProps) => {
  return (
    <input
      className="text-[1rem] p-2 border rounded-[8px] w-full max-w-[375px]"
      type="text"
      placeholder={props.placeholder || 'Text Here'}
      {...props}
    />
  );
};

export default TextField;
