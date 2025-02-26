import { useState, FormEvent, ChangeEvent } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { useUser } from '../../hooks/useUser';
import { Input } from '../../components/form/input';
import { RedSpan } from '../../components/form/styles';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 400px;
  padding: 32px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  margin: 0 0 16px 0;
  text-align: center;
  font-size: 1.8rem;
`;

const ButtonContainer = styled.div`
  margin-top: 8px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #646cff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #535bf2;
  }

  &:disabled {
    background-color: #a5a5a5;
    cursor: not-allowed;
  }
`;

const StyledLink = styled(Link)`
  color: #646cff;
  text-decoration: none;
  font-size: 0.9rem;
  margin-top: 8px;
  align-self: flex-end;

  &:hover {
    text-decoration: underline;
  }
`;

const SignupPrompt = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const ErrorMessage = styled(RedSpan)`
  text-align: center;
  display: block;
  margin-bottom: 8px;
`;

interface LoginState {
  email: string;
  password: string;
}

interface LocationState {
  from?: Location;
  message?: string;
}

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formState, setFormState] = useState<LoginState>({
    email: '',
    password: '',
  });

  const locationState = location.state as LocationState;
  const redirectPath = locationState?.from?.pathname || '/';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const success = await login(formState.email, formState.password);
      if (success) {
        navigate(redirectPath, { replace: true });
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error
        ? err.message
        : 'Login failed. Please check your credentials and try again.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <FormTitle>Log In</FormTitle>

        {locationState?.message && (
          <div style={{ color: 'green', marginBottom: '16px', textAlign: 'center' }}>
            {locationState.message}
          </div>
        )}

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Input.Text
          title="Email"
          name="email"
          placeholder="example@domain.com"
          value={formState.email}
          onChange={handleChange}
          required
        />

        <Input.Password
          title="Password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          required
        />

        <StyledLink to="/forgot-password">Forgot Password?</StyledLink>

        <ButtonContainer>
          <LoginButton type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Log In'}
          </LoginButton>
        </ButtonContainer>

        <SignupPrompt>
          Don't have an account?{' '}
          <StyledLink to="/signup">Sign up</StyledLink>
        </SignupPrompt>
      </LoginForm>
    </LoginContainer>
  );
}
