import express from "express";
import { User } from './models/User';

require('dotenv').config();

const app: express.Application = express();

app.get('/', (req, res) => {
  const user = new User('John');

  res.send(`Hello ${user.name}!`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express is listening on port ${port}...`);
});