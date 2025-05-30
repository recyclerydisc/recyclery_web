import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, NextFunction, Request, RequestHandler, Response } from 'express';
import supabase from './config/supabase.js';
import authRoutes from './routes/authRoutes.js';

import multer from 'multer';

 
interface MulterRequest extends Request {
  file?: Express.Multer.File;
}
const upload = multer({ limits: { fileSize: 50 * 1024 * 1024 } }); // 50MB limit

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
    const allowedOrigins = [process.env.FRONTEND_URL || '', process.env.FRONTEND_URL_DEV || '', "https://recyclery-web-fork-frontend-h9nt.vercel.app"];

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
app.use(cookieParser());
app.use(
  express.json({ limit: '50mb' })           // ↑ allow big JSON bodies
);
app.use(
  express.urlencoded({                       // ↑ if you ever post urlencoded too
    limit: '50mb',
    extended: true,
  })
);
app.use(cors(corsOptions));

// if (process.env.NODE_ENV !== 'production') {
//   console.log('CORS Configuration:', {
//     origin: process.env.FRONTEND_URL,
//     credentials: true,
//   });
// }


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


app.get('/images/:id', async (req: Request, res: Response) => {
  try {
    const img_ID = parseInt(req.params.id);
    const { data } = await supabase
      .from('IMAGES')
      .select('bucket_link')
      .eq('img_id', img_ID)
      .single();

    res.setHeader('Content-Type', 'application/json');
    res.json({ bucket_link: data?.bucket_link || null });
  } catch (error) {
    res.status(500).json({ err: 'Failed to fetch image', error});
  }
});


// GET for getting person in WHO
app.get('/people/:id', (async (req: Request, res: Response) => {
  try {
    const person_ID = parseInt(req.params.id);
    const { data: person,  error: dbErr} = await supabase
      .from('WHO')
      .select('*')
      .eq('person_id', person_ID)
      .single();

    if (dbErr) {
      res
        .status(500)
        .json({ error: 'Failed to update person record' });
      return 
    }
    if (!person) {
      res
        .status(404)
        .json({ error: 'Person not found' });
      return 
    }

    res.setHeader('Content-Type', 'application/json');
    res.json({ person_name: person?.name || null, person_description: person?.description || null , person_image: person?.person_image || null });
  } catch (error) {
    res.status(500).json({ err: 'Failed to fetch person', error });
  }
}) as RequestHandler
);

// GET for getting hours in HOURS
app.get('/hours/:id', (async (req: Request, res: Response) => {
  try {
    const hours_ID = parseInt(req.params.id);
    const {data: hours, error: dbErr} = await supabase
      .from('HOURS')
      .select('hours')
      .eq('id', hours_ID)
      .single();

    if (dbErr) {
      res
        .status(500)
        .json({ error: 'Failed to get hours record' });
      return 
    }
    if (!hours) {
      res
        .status(404)
        .json({ error: 'Hours not found' });
      return 
    }
    res.setHeader('Content-Type', 'application/json');
    res.json({ hours_text: hours?.hours || null });
  } catch (error) {
    res.status(500).json({ err: 'Failed to fetch hours', error });
  }
}) as RequestHandler
);

// PUT to upload photos 
app.put('/upload/:id', upload.single('file'), (async (req, res, next: NextFunction) => {
  try {
    const { id } = req.params;
    const file = req.file;

    if (!file) {
      res.status(400).json({ error: 'No file uploaded or missing file name' });
      return 
    }

    const fileBuffer = file.buffer;
    const fileName = file.originalname;

    const allowedExtensions = ['jpeg', 'png', 'jpg', 'heic', 'gif', 'webp'];
    const fileExtension = fileName.split('.').pop()?.toLowerCase();

    if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
      res.status(400).json({ error: 'Unsupported file type' });
      return 
    }

    const uniqueFileName = `images/${id}-${Date.now()}.${fileExtension}`;
    
    const { error: uploadError } = await supabase.storage
      .from('IMAGES') // Replace with your bucket name
      .upload(uniqueFileName, fileBuffer, {
        contentType: `image/${fileExtension}`,
        upsert: true,
      });

    if (uploadError) {
      res.status(500).json({ error: 'Failed to upload image to Supabase' });
      return 
    }
    
    const { data: publicUrlData } = supabase.storage
      .from('IMAGES')
      .getPublicUrl(uniqueFileName);
    
    if (!publicUrlData?.publicUrl) {
      res.status(500).json({ error: 'Failed to generate public URL' });
      return 
    }

    // Update the database with the new bucket link
    const { data: dbdata, error: dbError } = await supabase
      .from('IMAGES') 
      .update({ bucket_link: publicUrlData.publicUrl })
      .eq('img_id', id)
      .select('*')
      .single();

    if (dbError) {
      res.status(500).json({ error: 'Failed to update database' });
      return 
    }

    if (!dbdata) {
      res.status(404).json({ error: 'Image not found' });
      return 
    }

    return res.status(200).json({
      message: 'Image uploaded and database updated successfully',
      dbdata,
    });

  } catch (error) {
    //res.status(500).json({ error });
    next(error);
  }
}) as RequestHandler
);

// for UploadHours
app.put(
  '/uploadhours/:id',
  express.json({ limit: '1mb' }), (async (req, res, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { hours } = req.body as { hours?: string };
      if (!hours) {
        res.status(400).json({ error: 'Missing hours text' });
        return 
      }
      const { error: dbErr, data: dbData } = await supabase
        .from('HOURS')
        .update({ hours })
        .eq('id', id)
        .select('*')
        .single();
      if (dbErr) throw dbErr;
      res.json({ message: 'Hours updated', hours: dbData });
    } catch (error) {
      //res.status(500).json({ error });
      next(error);
    }
  }) as RequestHandler
);

// PUT for upload WHO
app.put('/uploadpeople/:id', upload.single('file'), (async (req: MulterRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body as {
      name?: string;
      description?: string;
    };

    if (!name) {
      res.status(400).json({ error: 'Missing name or description' });
      return 
    }

    const updates: Record<string, unknown> = { name, description };

    if (req.file) {
      const file = req.file
      const ext = file.originalname.split('.').pop()?.toLowerCase()
      const allowed = ['jpeg','png','jpg','heic','gif','webp']
      if (!ext || !allowed.includes(ext)) {
        res
          .status(400)
          .json({ error: 'Unsupported file type' });
        return 
      }

      const key = `people/${id}-${Date.now()}.${ext}`
      const { error: upErr } = await supabase.storage
        .from('who')               // your WHO bucket slug
        .upload(key, file.buffer, {
          contentType: `image/${ext}`,
          upsert: true,
        })
      if (upErr) {
        res
          .status(500)
          .json({ error: 'Failed to upload image to WHO bucket' });
        return 
      }
      // 4) getPublicUrl is sync
      const { data: urlData } = supabase.storage
        .from('who')
        .getPublicUrl(key)
      
      if (!urlData?.publicUrl) {
        res
          .status(500)
          .json({ error: 'Failed to generate public URL' });
        return 
      }

      updates.person_image = urlData.publicUrl
    }

    const { data: person, error: dbErr } = await supabase
        .from('WHO')
        .update(updates)
        .eq('person_id', Number(id))
        .select('*')
        .single()
      if (dbErr) {
        res
          .status(500)
          .json({ error: 'Failed to update person record' });
        return 
      }
      if (!person) {
        res
          .status(404)
          .json({ error: 'Person not found' });
        return 
      }
    res.status(200).json({
      message: 'Image uploaded and database updated successfully',
      person,
    });
    return 

  } catch (error) {
    //res.status(500).json({ error });
    next(error);
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
