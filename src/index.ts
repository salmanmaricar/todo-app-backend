import { config } from 'dotenv';
import express, { Application, Request, Response } from 'express';
import { User } from './models/User/User';

config();

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  const user = new User('John');

  res.send(`Hello ${user.name}, ${user.getInitials()}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express is listening on port ${port}...`);
});
