import express from 'express';

import { connect } from './database/mongodb';

import routes from './routes';
const app = express();

app.use(express.json());
app.use(routes);

connect();

app.listen(3333, () => {
  console.log('server started on port 3333')
})