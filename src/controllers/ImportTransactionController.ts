import { Request, Response } from 'express';
import { ImportTransactionService } from '../services/ImportTransactionService';

export class ImportTransactionController {
  async handle(request: Request, response: Response) {
    const importTransactions = new ImportTransactionService();

    const transactions = await importTransactions.execute(request.file.path);

    return response.json(transactions);
  }
}
