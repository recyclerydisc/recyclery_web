import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, NextFunction, Request, Response, RequestHandler } from 'express';
import authRoutes from './routes/authRoutes.js';
import supabase from './config/supabase.js';

dotenv.config();

const app: Express = express();

interface CorsOptions {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) => void;
  methods: string[];
  allowedHeaders: string[];
  credentials: boolean;
  maxAge: number;
}

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [process.env.FRONTEND_URL || '', process.env.FRONTEND_URL_DEV || ''];

    if (allowedOrigins.includes(origin || '') || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400,
};

app.use(cors(corsOptions));

// if (process.env.NODE_ENV !== 'production') {
//   console.log('CORS Configuration:', {
//     origin: process.env.FRONTEND_URL,
//     credentials: true,
//   });
// }

app.use(cookieParser());
app.use(express.json());

app.use((req, res, next) => {
  req.url = req.url.replace(/\/+/g, '/');
  next();
});

app.use('/auth', authRoutes);

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

interface AppError extends Error {
  status?: number;
}

app.use((err: AppError, _req: Request, res: Response, _next: NextFunction) => {
  // console.error('Error details:', {
  //   message: err.message,
  //   stack: err.stack,
  //   status: err.status || 500,
  // });
  console.error('Error details:', {
    message: err.message,
    stack: err.stack,
    status: err.status || 500,
  });
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : err.message,
  });
});

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// PUT to upload photos 
app.put('/upload/:id', (async (req, res) => {
  try {
    const { id } = req.params;
    
    const { file, fileName } = req.body;

    if (!file || !fileName) {
      return res.status(400).json({ error: 'No file uploaded or missing file name' });
    }

    console.log('ID:', id);
    console.log('File Name:', fileName);

    const fileBuffer = Buffer.from(file, 'base64');
    console.log('File Buffer:', fileBuffer);

    const allowedExtensions = ['jpeg', 'png', 'jpg', 'heic', 'gif', 'webp'];
    const fileExtension = fileName.split('.').pop()?.toLowerCase();

    if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
      return res.status(400).json({ error: 'Unsupported file type' });
    }

    const uniqueFileName = `images/${id}-${Date.now()}.${fileExtension}`;
    console.log('Unique File Name:', uniqueFileName);
    
    const { error: uploadError } = await supabase.storage
      .from('IMAGES') // Replace with your bucket name
      .upload(uniqueFileName, fileBuffer, {
        contentType: `image/${fileExtension}`,
        upsert: true,
      });

    if (uploadError) {
      console.error('Upload Error:', uploadError);
      return res.status(500).json({ error: 'Failed to upload image to Supabase' });
    }
    
    const { data: publicUrl } = supabase.storage.from('IMAGES').getPublicUrl(uniqueFileName);
    if (!publicUrl) {
      return res.status(500).json({ error: 'Failed to generate public URL' });
    }
    // Update the database with the new bucket link
    const { data: dbdata, error: dbError } = await supabase
      .from('IMAGES') // Replace with your table name
      .update({ bucket_link: publicUrl })
      .eq('img_id', id)
      .select('*')
      .single();

    if (dbError) {
      return res.status(500).json({ error: 'Failed to update database' });
    }

    if (!dbdata) {
      return res.status(404).json({ error: 'Image not found' });
    }

    return res.status(200).json({
      message: 'Image uploaded and database updated successfully',
      dbdata,
    });

  } catch (error) {
    console.error('Unexpected Error:', error);
    res.status(500).json({ error });
  }
}) as RequestHandler
);

const PORT: number = parseInt(process.env.PORT || '3000', 10);
app.listen(PORT, () => {
  // console.log(`Server running on port ${PORT}`);
  // console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  // console.log(`Frontend URL: ${process.env.FRONTEND_URL}`);
});

export default app;
