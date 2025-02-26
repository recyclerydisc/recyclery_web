import { useState, FormEvent, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Form } from '../components/form/form';
import { Input } from '../components/form/input';
import { RedSpan } from '../components/form/styles';
import type { SignupRequest } from '../../types/auth.ts';

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 2rem 1rem;
`;

const StyledLink = styled(Link)`
  color: #646cff;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginPrompt = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const ErrorMessage = styled(RedSpan)`
  text-align: center;
  display: block;
  margin-bottom: 8px;
`;

export default function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formState, setFormState] = useState<SignupRequest>({
    email: '',
    password: '',
    username: '',
    firstname: '',
    lastname: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev: SignupRequest) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (formState.password.length < 8) {
        throw new Error('Password must be at least 8 characters long');
      }
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formState.email,
          password: formState.password,
          username: formState.username || undefined,
          firstname: formState.firstname || undefined,
          lastname: formState.lastname || undefined,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create account');
      }
      navigate('/login', {
        state: {
          message: 'Account created successfully! Please check your email to verify your account.',
        },
        replace: true,
      });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Failed to create account. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }

  };

  return (
    <SignupContainer>
      <Form
        onSubmit={handleSubmit}
        title="Create an Account"
        subtitle="Join us to access exclusive features"
        submitText="Sign Up"
        isSubmitting={isLoading}
      >
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Input.Text
          title="Email"
          name="email"
          placeholder="example@domain.com"
          value={formState.email}
          onChange={handleChange}
          required
        />

        <Input.Text
          title="Username"
          name="username"
          placeholder="johnsmith"
          value={formState.username || ''}
          onChange={handleChange}
        />

        <Input.Text
          title="First Name"
          name="firstname"
          placeholder="John"
          value={formState.firstname || ''}
          onChange={handleChange}
        />

        <Input.Text
          title="Last Name"
          name="lastname"
          placeholder="Smith"
          value={formState.lastname || ''}
          onChange={handleChange}
        />

        <Input.Password
          title="Password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          required
        />

        <LoginPrompt>
          Already have an account?{' '}
          <StyledLink to="/login">Log in</StyledLink>
        </LoginPrompt>
      </Form>
    </SignupContainer>
  );
}
