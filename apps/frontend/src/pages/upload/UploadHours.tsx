import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 24px;
`;
const TextArea = styled.textarea` width:100%; height:300px; padding:8px; `;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color: #fff;
`;

const ConfirmButton = styled.button`
  background-color: #000;
  color: white;
  height: 40px;
  width: 120px;
  border-radius: 20px;
  margin-right: 20px;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const CancelButton = styled.button`
  background-color: white;
  color: black;
  height: 40px;
  width: 120px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 600;
`;

export default function UploadHours() {
  const [hours, setHours] = useState('');
  const { id } = useParams<{ id: string }>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!hours) {
      alert('Please enter hours text');
      return;
    }
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/uploadhours/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hours }),
    });
    const data = await res.json();
    if (!res.ok) {
      alert(data.error || 'Failed to update hours');
    } else {
      alert('Hours updated successfully');
    }
  };

  return (
    <Container>
      <Title>Update Hours</Title>
      <form onSubmit={handleSubmit}>
        <TextArea
          placeholder="Enter new hours or schedule text here"
          value={hours}
          onChange={e => setHours(e.target.value)}
        />
        <ButtonGroup>
          <ConfirmButton type="submit">Save Hours</ConfirmButton>
          <CancelButton type="button" onClick={() => setHours('')}>Cancel</CancelButton>
        </ButtonGroup>
      </form>
    </Container>
  );
}