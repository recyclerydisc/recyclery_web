import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

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
    <div className="max-w-[400px] mx-[40px] my-auto p-[20px]">
      <title>Set New Password - The Recyclery</title>
      <h2>Set New Password</h2>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <input
            className="p-[10px] border-2 rounded-[4px]"
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
          />
          <div className="h-[5px] mt-[5px] bg-amber-400 w-[full] transition-all" />
          {password && (
            <ul className="text-[0.8rem] text-amber-300 mt-[5px] pl-5">
              {validatePassword(password).map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          )}
        </div>
        <input
          className="p-[10px] border-2 rounded-[4px]"
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          className="p-[10px] bg-amber-400 text-white border-none rounded-[4px] cursor-pointer disabled:bg-amber-300 disabled:cursor-not-allowed"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Updating...' : 'Update Password'}
        </button>
        {error && <div className="text-red-500 mt-[10px]">{error}</div>}
      </form>
    </div>
  );
}
