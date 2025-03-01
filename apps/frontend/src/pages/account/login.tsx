import { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Input } from '../../components/form/input';
import { useUser } from '../../hooks/useUser';

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
      const errorMessage =
        err instanceof Error
          ? err.message
          : 'Login failed. Please check your credentials and try again.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-[80vh]'>
      <form className='flex flex-col gap-4 w-full max-w-[400px] p-8 bg-white shadow' onSubmit={handleSubmit}>
        <h2 className='mb-4 text-center text-[1.8rem] font-roc'>Log In</h2>

        {locationState?.message && (
          <div style={{ color: 'green', marginBottom: '16px', textAlign: 'center' }}>
            {locationState.message}
          </div>
        )}

        {error && <span className='text-center block mb-2'>{error}</span>}

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

        <Link className='bg-red decoration-0 text-[0.9rem] mt-2 self-end' to="/forgot-password">Forgot Password?</Link>

        <div className='mt-2'>
          <button className='w-full p-[10px] border-none rounded-[4px] bg-maroon-500 hover:bg-maroon-800 text-white text-[1rem] cursor-pointer transition-colors' type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
        </div>

        <div className='mt-4'>
          Don't have an account? <Link className='bg-red text-[0.9rem] mt-2 self-end hover:underline' to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
}
