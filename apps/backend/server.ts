import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, NextFunction, Request, Response } from 'express';
import supabase from './config/supabase.js';
import authRoutes from './routes/authRoutes.js';

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

  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : err.message,
  });
});


// GET endpoint to fetch a specific image URL
// app.get('/images/:id', async (req: Request, res: Response) => {
//   const img_ID = parseInt(req.params.id);

//   const { data } = await supabase
//     .from('IMAGES')
//     .select('bucket_link')
//     .eq('img_id', img_ID)
//     .single();


//     res.json({ bucket_link: data?.bucket_link})
//  /// 

// });

app.get('/images/:id', async (req: Request, res: Response) => {
  const img_ID = parseInt(req.params.id);
  const { data } = await supabase
    .from('IMAGES')
    .select('bucket_link')
    .eq('img_id', img_ID)
    .single();

  res.setHeader('Content-Type', 'application/json');
  res.json({ bucket_link: data?.bucket_link || null });
});



const PORT: number = parseInt(process.env.PORT || '3000', 10);
app.listen(PORT, () => {
  // console.log(`Server running on port ${PORT}`);
  // console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  // console.log(`Frontend URL: ${process.env.FRONTEND_URL}`);
});

export default app;
