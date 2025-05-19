import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../hooks/useUser.tsx';

export default function RequestPasswordReset() {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { requestPasswordReset } = useUser();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await requestPasswordReset(email);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to request password reset');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-[400px] mx-[40px] my-auto">
      <title>Reset Password - The Recyclery</title>
      <h2 className="text-center text-amber-400 mb-5">Reset Password</h2>
      {!success ? (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            className="p-[10px] border-2 rounded-[4px]"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <button
            className="p-[10px] bg-amber-400 text-white border-none rounded-[4px] cursor-pointer transition-colors hover:bg-amber-600 disabled:bg-amber-300"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Reset Password'}
          </button>
          {error && (
            <div className="text-red-500 mt-[10px] p-[10px] rounded-[4px] bg-amber-400">
              {error}
            </div>
          )}
          <Link className="text-amber-400 text-center mt-[10px] hover:underline" to="/login">
            Back to Login
          </Link>
        </form>
      ) : (
        <div>
          <div className="text-white mt-[10px] p-[10px] rounded-[4px] bg-amber-400">
            Password reset instructions have been sent to your email. Please check your inbox and
            follow the instructions to reset your password. If you don't receive the email within a
            few minutes, please check your spam folder.
          </div>
          <Link className="text-amber-400 text-center mt-[10px] hover:underline" to="/login">
            Back to Login
          </Link>
        </div>
      )}
    </div>
  );
}
