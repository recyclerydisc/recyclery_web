import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_API_KEY || ''
);

async function testUpload() {
  try {
    // Path to the image file you want to upload
    const filePath = path.join(__dirname, 'example.jpg'); // Replace with your image file name
    const fileBuffer = fs.readFileSync(filePath); // Read the file as a buffer

    // Generate a unique file name
    const uniqueFileName = `images/test-${Date.now()}.jpg`;

    // Upload the file to Supabase storage
    const { data, error } = await supabase.storage
      .from('IMAGES') // Replace with your bucket name
      .upload(uniqueFileName, fileBuffer, {
        contentType: 'image/jpeg', // Adjust based on your file type
        upsert: true,
      });

    if (error) {
      console.error('Upload error:', error);
      return;
    }

    console.log('Upload successful:', data);

    // Get the public URL of the uploaded file
    const { data: publicUrlData } = supabase.storage.from('IMAGES').getPublicUrl(uniqueFileName);
    console.log('Public URL:', publicUrlData.publicUrl);
  } catch (err) {
    console.error('Error during upload:', err);
  }
}

testUpload();