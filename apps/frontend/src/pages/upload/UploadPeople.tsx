import { ChangeEvent, DragEvent, FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import drop from '../../assets/images/upload/drop.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 600px;
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

const UploadBox = styled.div`
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 465px;
  background-color: white;
  padding: 20px;
  margin-top: 10px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DragArea = styled.div`
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%; /* Ensure it takes the full width of the parent */
  height: 100%; /* Set height equal to width to make it square */
  aspect-ratio: 1; /* Maintain a 1:1 aspect ratio */
`;

const DropImage = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 0px;
`;

const Paragraph = styled.p`
  font-family: Montserrat, sans-serif;
  margin-bottom: 10px;
  font-size: 14px;
`;

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
const Field = styled.input` margin:8px 0; padding:8px; width:100%; `; 
const TextArea = styled.textarea` margin:8px 0; padding:8px; width:100%; height:100px; `;


export default function UploadPeople() {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dragActive, setDragActive] = useState(false);
  const { id } = useParams<{ id: string }>();

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault(); e.stopPropagation();
    setDragActive(e.type === 'dragenter' || e.type === 'dragover');
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault(); e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file || !name || !description) {
      alert('Please fill name, description and select a file.');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('description', description);

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/uploadpeople/${id}`, {
      method: 'PUT',
      body: formData,
    });
    const data = await res.json();
    if (!res.ok) {
      alert(data.error || 'Failed to update person');
    } else {
      alert('Person updated successfully');
      // reset or navigate away…
    }
  };

  return (
    <Container>
      <Title>Update Person</Title>
      <form onSubmit={handleSubmit}>
        <Field
          placeholder="Person’s Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextArea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <UploadBox>
          <DragArea
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
          >
            <DropImage src={drop} alt="Drop here" />
            <Paragraph>Drag & drop image here, or click to browse</Paragraph>
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              style={{ display: 'none' }}
              id="person-file"
            />
            <label htmlFor="person-file" style={{ cursor: 'pointer', color: '#4E85A2' }}>
              Browse
            </label>
          </DragArea>
        </UploadBox>

        {file && <p>Selected: {file.name}</p>}

        <ButtonGroup>
          <ConfirmButton type="submit">Save Person</ConfirmButton>
          <CancelButton type="button" onClick={() => {
            setFile(null); setDragActive(false);
          }}>Cancel</CancelButton>
        </ButtonGroup>
      </form>
    </Container>
  );
}