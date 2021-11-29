import { getCustomRepository } from 'typeorm';
import { TransactionsRepository } from '../repositories/TransactionsRepository';

export class ListTransactionsService {
  async execute() {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transactions = await transactionsRepository.find();
    const balance = await transactionsRepository.getBalance();

    return { transactions, balance };
  }
}
