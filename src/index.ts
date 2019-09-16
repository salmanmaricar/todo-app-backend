import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import { TodoItem } from './models/TodoItem/TodoItem';

import bodyParser from 'body-parser';

config();

const app: Application = express();

// register middleware that logs out req headers of all requests
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.headers);
  next();
});
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded

app.get('/todos', (req: Request, res: Response) => {
  const item1 = new TodoItem('Item 1', '16 Sep 2019');
  const item2 = new TodoItem('Item 2', '20 Sep 2019');

  res.send([item1, item2]);
});

app.post('/create', (req: Request, res: Response) => {
  const itemName = req.body.itemName;
  const itemDueDate = req.body.itemDueDate;

  console.log(req.body);
  res.send(req.body);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Express is listening on port ${port}...`);
});
