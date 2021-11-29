import { Request, Response } from 'express';
import { ListTransactionsService } from '../services/ListTransactionsService';

export class ListTransactionsController {
  async handle(request: Request, response: Response) {
    const listTransactions = new ListTransactionsService();

    const transactions = await listTransactions.execute();

    return response.json(transactions);
  }
}
