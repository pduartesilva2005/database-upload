import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';

import createConnection from './database';
import { errorHandler } from './middlewares/errorHandler';
import { routes } from './routes';

const app = express();

createConnection();
app.use(express.json());
app.use(routes);

app.use(errorHandler);

export { app };
