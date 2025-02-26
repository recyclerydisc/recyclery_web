import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import NavBar from '../components/navigation/nav-bar';

const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function NavLayout() {
  return (
    <Layout>
      <NavBar />
      <Outlet />
    </Layout>
  );
}
