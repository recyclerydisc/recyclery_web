import { FormEvent, ReactNode } from 'react';
import { styled } from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
`;

const FormHeader = styled.div`
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin: 0;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #666;
  margin: 8px 0 0;
  text-align: center;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #646cff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 16px;

  &:hover {
    background-color: #535bf2;
  }

  &:disabled {
    background-color: #a5a5a5;
    cursor: not-allowed;
  }
`;

interface FormProps {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  title?: string;
  subtitle?: string;
  submitText?: string;
  isSubmitting?: boolean;
}

export function Form({
  children,
  onSubmit,
  title,
  subtitle,
  submitText = 'Submit',
  isSubmitting = false
}: FormProps) {
  return (
    <StyledForm onSubmit={onSubmit}>
      {(title || subtitle) && (
        <FormHeader>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </FormHeader>
      )}

      {children}

      <SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Processing...' : submitText}
      </SubmitButton>
    </StyledForm>
  );
}
