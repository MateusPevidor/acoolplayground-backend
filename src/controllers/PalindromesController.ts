import { Request, Response } from 'express';
import ListPalindromeService from '../services/ListPalindromeService';

export default class PalindromesController {
  public index(request: Request, response: Response): Response {
    const {
      minimumValue,
      maximumValue,
      isLeftOpen,
      isRightOpen,
    } = request.body;

    const listPalindromes = new ListPalindromeService();

    const palindromes = listPalindromes.execute({
      minimumValue,
      maximumValue,
      isLeftOpen,
      isRightOpen,
    });

    return response.json(palindromes);
  }
}
