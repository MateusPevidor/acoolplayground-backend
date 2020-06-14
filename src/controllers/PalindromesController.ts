import { Request, Response } from 'express';
import ListPalindromeService from '../services/Palindromes/ListPalindromeService';

export default class PalindromesController {
  public index(request: Request, response: Response): Response {
    const {
      minimumValue,
      maximumValue,
      isLeftOpen,
      isRightOpen,
    } = request.query;

    const listPalindromes = new ListPalindromeService();

    const palindromes = listPalindromes.execute({
      minimumValue: Number(minimumValue),
      maximumValue: Number(maximumValue),
      isLeftOpen: isLeftOpen === 'true',
      isRightOpen: isRightOpen === 'true',
    });

    return response.json(palindromes);
  }
}
