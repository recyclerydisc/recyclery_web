import React, { useState, DragEvent, ChangeEvent } from 'react';
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

const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload file');
      }

      alert('File uploaded successfully!');
      setFile(null);
    } catch (error) {
      alert( error );
    }
  };

  return (
    <Container>
      <Title>DROP YOUR FILE HERE</Title>
      <UploadBox>
        <DragArea
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <DropImage src={drop} alt="Drop here" />
          <Paragraph>
            Drag and drop your file here, or click to browse. (jpg, jpeg, heic, png)
          </Paragraph>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            style={{ display: 'none' }}
            id="file-upload"
          />
          <label htmlFor="file-upload" style={{ cursor: 'pointer', color: '#4E85A2' }}>
            Browse
          </label>
        </DragArea>
      </UploadBox>

      {file && (
        <div style={{ marginTop: '20px' }}>
          <p>Selected File: {file.name}</p>
        </div>
      )}

      <ButtonGroup>
        <ConfirmButton onClick={handleUpload}>Upload</ConfirmButton>
        <CancelButton
          onClick={() => {
            setFile(null);
            setDragActive(false);
          }}
        >
          Cancel
        </CancelButton>
      </ButtonGroup>
    </Container>
  );
};

export default Upload;