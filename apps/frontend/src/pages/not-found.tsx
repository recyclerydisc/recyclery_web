import { styled } from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <Title>404 - Page Not Found</Title>
      <Subtitle>Sorry, the page you are looking for does not exist.</Subtitle>
    </NotFoundContainer>
  );
}
