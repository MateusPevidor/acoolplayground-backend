import CalculateTransactionService from './CalculateTransactionService';

describe('CalculateTransaction', () => {
  it('should be able to calculate transaction from given values', () => {
    const calculateTransactionService = new CalculateTransactionService();

    const transactionData = {
      transactionValue: 999,
      received: 1250,
    };

    const response = calculateTransactionService.execute(transactionData);

    const expected = {
      minimumCount: 8,
      transactionValue: 999,
      change: 251,
      amount100: 2,
      amount10: 5,
      amount1: 1,
    };
    expect(response).toEqual(expect.objectContaining(expected));
  });

  it('should not be able to calculate transaction if received value is less than transaction value', () => {
    const calculateTransactionService = new CalculateTransactionService();

    const transactionData = {
      transactionValue: 1000,
      received: 500,
    };

    expect(() =>
      calculateTransactionService.execute(transactionData),
    ).toThrowError('Not enough money');
  });

  it('should not be able to calculate transaction with negative values', () => {
    const calculateTransactionService = new CalculateTransactionService();

    const transactionData = {
      transactionValue: -100,
      received: 0,
    };

    expect(() =>
      calculateTransactionService.execute(transactionData),
    ).toThrowError('Cannot receive negative values');
  });
});
