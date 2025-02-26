import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useUser } from '../../hooks/useUser';
import LogoutModal from './logout-modal';

const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
  padding: 10px 20px;
  font-size: 20px;
`;

const LeftAligned = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
`;

const LogoPlaceholder = styled.button`
  padding: 0;
  font-size: 1.7rem;
  font-weight: bold;
  font-family: monospace;
  background: none;
  border: none;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const PrimaryButton = styled(Button)`
  background-color: #646cff;
  color: white;
  border: 1px solid #646cff;

  &:hover {
    background-color: #535bf2;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #646cff;
  color: #646cff;

  &:hover {
    background-color: rgba(100, 108, 255, 0.1);
  }
`;

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleLogoutConfirm = async () => {
    try {
      await logout();
      setIsModalOpen(false);
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <StyledNav>
      <LeftAligned>
        <LogoPlaceholder onClick={() => navigate('/')}>[LOGO]</LogoPlaceholder>
      </LeftAligned>
      {user ? (
        <SecondaryButton onClick={handleLogoutClick}>Log Out</SecondaryButton>
      ) : (
        <>
          <PrimaryButton onClick={() => navigate('/signup')}>Sign Up</PrimaryButton>
          <SecondaryButton onClick={() => navigate('/login')}>Login</SecondaryButton>
        </>
      )}
      <LogoutModal isOpen={isModalOpen} onClose={handleModalClose} onLogout={handleLogoutConfirm} />
    </StyledNav>
  );
}
