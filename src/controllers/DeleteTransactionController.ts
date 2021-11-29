import { Request, Response } from 'express';
import { DeleteTransactionService } from '../services/DeleteTransactionService';

export class DeleteTransactionController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteTransaction = new DeleteTransactionService();

    await deleteTransaction.execute(id);

    return response.status(204).send();
  }
}
