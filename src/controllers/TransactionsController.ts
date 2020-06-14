import { Request, Response } from 'express';
import CalculateTransactionService from '../services/Transactions/CalculateTransactionService';

export default class TransactionsController {
  public index(request: Request, response: Response): Response {
    const { transactionValue, received } = request.query;

    const calculateTransaction = new CalculateTransactionService();

    try {
      const transactionData = calculateTransaction.execute({
        transactionValue: Number(transactionValue),
        received: Number(received),
      });

      return response.json(transactionData);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}
