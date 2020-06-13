import ListPalindromeService from './ListPalindromeService';

describe('ListPalindromes', () => {
  it('should be able to list palindromes in a given interval', () => {
    const listPalindromeService = new ListPalindromeService();

    const interval = {
      minimumValue: 5,
      maximumValue: 23,
      isLeftOpen: true,
      isRightOpen: false,
    };

    const response = listPalindromeService.execute(interval);

    const expected = [6, 7, 8, 9, 11, 22];
    expect(response).toEqual(expect.arrayContaining(expected));
  });
});
