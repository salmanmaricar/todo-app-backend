import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import { User } from './models/User/User';

config();

const app: Application = express();

// register middleware that logs out req headers of all requests
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.headers);
  next();
});

app.get('/', (req: Request, res: Response) => {
  const user = new User('John');

  res.send(`Hello ${user.name}, ${user.getInitials()}`);
});

app.get('/users', (req: Request, res: Response) => {
  const user1 = new User('John');
  const user2 = new User('John');

  res.send([user1, user2]);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Express is listening on port ${port}...`);
});
