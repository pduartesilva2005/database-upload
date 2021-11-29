import { Request, Response } from 'express';

import { CreateTransactionService } from '../services/CreateTransactionService';

export class CreateTransactionController {
  async handle(request: Request, response: Response) {
    const { title, value, type, category } = request.body;

    const createTransaction = new CreateTransactionService();

    const transaction = await createTransaction.execute({
      title,
      value,
      type,
      category
    });

    return response.json(transaction);
  }
}
