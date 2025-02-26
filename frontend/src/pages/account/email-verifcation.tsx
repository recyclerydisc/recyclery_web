import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';

const VerificationPage = styled.div`
  flex: 1 0 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 100px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: bold;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin: 0;
  font-weight: normal;
`;

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
    <VerificationPage>
      {status === 'checking' && <Title>Checking verification status...</Title>}
      {status === 'success' && (
        <>
          <Title>Email Verified!</Title>
          <Subtitle>{"You'll be redirected to login in 3 seconds..."}</Subtitle>
        </>
      )}
      {status === 'error' && (
        <>
          <Title>Verification Failed</Title>
          <Subtitle>Please try signing up again or contact support.</Subtitle>
        </>
      )}
    </VerificationPage>
  );
}
