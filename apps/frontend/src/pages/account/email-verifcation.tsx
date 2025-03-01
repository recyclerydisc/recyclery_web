import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

type VerificationStatus = 'checking' | 'success' | 'error';

export default function EmailVerification() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<VerificationStatus>('checking');

  useEffect(() => {
    const error = searchParams.get('error');
    const success = searchParams.get('success');

    if (success) {
      setStatus('success');
      setTimeout(() => navigate('/login'), 3000);
    } else if (error) {
      setStatus('error');
    }
  }, [searchParams, navigate]);

  return (
    <div className="flex flex-col justify-center items-center text-center pt-[100px]">
      {status === 'checking' && (
        <h1 className="text-[2.5em] font-bold m-0">Checking verification status...</h1>
      )}
      {status === 'success' && (
        <>
          <h1 className="text-[2.5em] font-bold m-0">Email Verified!</h1>
          <h2 className="text-[1.5em] m-0 font-normal">
            {"You'll be redirected to login in 3 seconds..."}
          </h2>
        </>
      )}
      {status === 'error' && (
        <>
          <h1 className="text-[2.5em] font-bold m-0">Verification Failed</h1>
          <h2 className="text-[1.5em] m-0 font-normal">
            Please try signing up again or contact support.
          </h2>
        </>
      )}
    </div>
  );
}
