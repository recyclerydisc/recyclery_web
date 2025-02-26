import React from 'react';
import { InputContainer, InputName, InputTitle, RedSpan } from './styles';

interface TitledInputProps {
  title: string;
  required?: boolean;
  children: React.ReactNode;
}

const TitledInput = ({ title, required, children }: TitledInputProps) => {
  return (
    <InputContainer>
      <InputName>
        <InputTitle>{title}</InputTitle>
        {required && <RedSpan>*</RedSpan>}
      </InputName>
      {children}
    </InputContainer>
  );
};

export default TitledInput;
