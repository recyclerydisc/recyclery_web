import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useUser } from '../../hooks/useUser';

const Container = styled.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #646cff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

const PasswordStrength = styled.div<{ strength: 'weak' | 'medium' | 'strong' | 'none' }>`
  height: 5px;
  margin-top: 5px;
  background-color: ${({ strength }) => {
    switch (strength) {
      case 'weak':
        return '#ff4d4d';
      case 'medium':
        return '#ffd700';
      case 'strong':
        return '#32cd32';
      default:
        return '#ccc';
    }
  }};
  width: ${({ strength }) => {
    switch (strength) {
      case 'weak':
        return '33%';
      case 'medium':
        return '66%';
      case 'strong':
        return '100%';
      default:
        return '0%';
    }
  }};
  transition: all 0.3s ease;
`;

const PasswordRequirements = styled.ul`
  font-size: 0.8rem;
  color: #666;
  margin-top: 5px;
  padding-left: 20px;
`;

const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function ResetPassword() {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { updatePassword } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const hashParams = new URLSearchParams(hash);
    const access_token = hashParams.get('access_token');
    const type = hashParams.get('type');

    console.log('Hash parameters:', {
      hasAccessToken: !!access_token,
      type,
    });

    if (!access_token) {
      setError('No reset token found. Please request a new password reset link.');
    } else if (type !== 'recovery') {
      setError('Invalid reset link type. Please request a new password reset link.');
    }
  }, []);

  const checkPasswordStrength = (pass: string): 'weak' | 'medium' | 'strong' | 'none' => {
    if (!pass) return 'none';

    const hasUpperCase = /[A-Z]/.test(pass);
    const hasLowerCase = /[a-z]/.test(pass);
    const hasNumbers = /\d/.test(pass);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pass);

    const strength =
      (hasUpperCase ? 1 : 0) +
      (hasLowerCase ? 1 : 0) +
      (hasNumbers ? 1 : 0) +
      (hasSpecialChar ? 1 : 0) +
      (pass.length >= 8 ? 1 : 0);

    if (strength >= 4) return 'strong';
    if (strength >= 2) return 'medium';
    return 'weak';
  };

  const validatePassword = (pass: string): string[] => {
    const requirements: string[] = [];

    if (pass.length < 8) {
      requirements.push('Password must be at least 8 characters long');
    }
    if (!/[A-Z]/.test(pass)) {
      requirements.push('Include at least one uppercase letter');
    }
    if (!/[a-z]/.test(pass)) {
      requirements.push('Include at least one lowercase letter');
    }
    if (!/\d/.test(pass)) {
      requirements.push('Include at least one number');
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
      requirements.push('Include at least one special character');
    }

    return requirements;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    const hash = window.location.hash.substring(1);
    const hashParams = new URLSearchParams(hash);
    const access_token = hashParams.get('access_token');

    if (!access_token) {
      setError('Reset token not found. Please request a new password reset link.');
      return;
    }

    const requirements = validatePassword(password);
    if (requirements.length > 0) {
      setError(requirements.join(', '));
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      console.log('Attempting password reset with token');
      await updatePassword(password, access_token);

      navigate('/login', {
        state: {
          message: 'Password has been reset successfully. Please login with your new password.',
        },
        replace: true,
      });
    } catch (err) {
      console.error('Password reset error:', err);
      setError(err instanceof Error ? err.message : 'Failed to reset password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h2>Set New Password</h2>
      <Form onSubmit={handleSubmit}>
        <PasswordContainer>
          <Input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
          />
          <PasswordStrength strength={checkPasswordStrength(password)} />
          {password && (
            <PasswordRequirements>
              {validatePassword(password).map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </PasswordRequirements>
          )}
        </PasswordContainer>
        <Input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Updating...' : 'Update Password'}
        </Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </Container>
  );
}
