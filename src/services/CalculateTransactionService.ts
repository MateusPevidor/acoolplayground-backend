interface TransactionDTO {
  transactionValue: number;
  received: number;
}

interface Response {
  minimumCount: number;
  transactionValue: number;
  change: number;
  amount100: number;
  amount10: number;
  amount1: number;
}

export default class CalculateTransactionService {
  public execute({ transactionValue, received }: TransactionDTO): Response {
    if (transactionValue < 0 || received < 0) {
      throw new Error('Cannot receive negative values');
    }

    if (received < transactionValue) {
      throw new Error('Not enough money');
    }

    let change = received - transactionValue;
    const finalChange = change;

    const amount100 = Math.floor(change / 100);
    change %= 100;

    const amount10 = Math.floor(change / 10);
    change %= 10;

    const amount1 = change;

    return {
      minimumCount: amount100 + amount10 + amount1,
      transactionValue,
      change: finalChange,
      amount100,
      amount10,
      amount1,
    };
  }
}
