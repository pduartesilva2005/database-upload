import { Router } from 'express';
import multer from 'multer';

import { uploadConfig } from './config/upload';

import { CreateTransactionController } from './controllers/CreateTransactionController';
import { DeleteTransactionController } from './controllers/DeleteTransactionController';
import { ImportTransactionController } from './controllers/ImportTransactionController';
import { ListTransactionsController } from './controllers/ListTransactionsController';

export const routes = Router();

const upload = multer(uploadConfig);

const createTransactionController = new CreateTransactionController();
const listTransactionsController = new ListTransactionsController();
const deleteTransactionController = new DeleteTransactionController();
const importTransactionController = new ImportTransactionController();

routes.get('/transactions', listTransactionsController.handle);
routes.post('/transactions', createTransactionController.handle);
routes.delete('/transactions/:id', deleteTransactionController.handle);
routes.post(
  '/transactions/import',
  upload.single('file'),
  importTransactionController.handle
);
