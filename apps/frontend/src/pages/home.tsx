import { styled } from 'styled-components';
import { useUser } from '../hooks/useUser';
import UsersList from '../components/users/users-list';

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
    <HomePage>
      <TextContainer>
        <Title>Home Page</Title>
        <Subtitle>Welcome, {user?.firstname || 'User'}!</Subtitle>
      </TextContainer>
      <UsersList />
    </HomePage>
  );
}
