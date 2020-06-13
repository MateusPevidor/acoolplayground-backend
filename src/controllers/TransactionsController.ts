import { Request, Response } from 'express';
import CalculateTransactionService from '../services/CalculateTransactionService';

export default class TransactionsController {
  public index(request: Request, response: Response): Response {
    const { transactionValue, received } = request.body;

    const calculateTransaction = new CalculateTransactionService();

    try {
      const transactionData = calculateTransaction.execute({
        transactionValue,
        received,
      });

      return response.json(transactionData);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}
