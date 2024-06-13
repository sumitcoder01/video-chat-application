import express, { Application, Request, Response } from 'express';
import { PORT } from './config/envConfig';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`video chat is running on http://localhost:${PORT}`);
});
