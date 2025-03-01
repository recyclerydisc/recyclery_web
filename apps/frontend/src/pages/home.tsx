import { styled } from 'styled-components';
import UsersList from '../components/users/users-list';
import { useUser } from '../hooks/useUser';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HomePage = styled.div`
  flex: 1 0 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
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

export default function Home() {
  const { user } = useUser();

  return (
    <div className='flex flex-col justify-center items-center p-8'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-[2.5em] font-bold m-0'>Home Page</h1>
        <h2 className='font-[1.5em] m-0 font-normal'>Welcome, {user?.firstname || 'User'}</h2>
      </div>
      <UsersList />
    </div>
  )
}
