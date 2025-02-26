import { styled } from 'styled-components';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: #333;
`;

const Message = styled.p`
  margin-bottom: 1.5rem;
  color: #666;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const CancelButton = styled(Button)`
  background-color: #e0e0e0;
  color: #333;
`;

const LogoutButton = styled(Button)`
  background-color: #dc3545;
  color: white;
`;

const LogoutModal = ({ isOpen, onClose, onLogout }: LogoutModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Title>Confirm Logout</Title>
        <Message>Are you sure you want to log out?</Message>
        <ButtonContainer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <LogoutButton onClick={onLogout}>Logout</LogoutButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default LogoutModal;
