import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { router } from '../routes/routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

const server = app.listen(8050, () => {
  console.log('Server is running on port ' + 8050);
});