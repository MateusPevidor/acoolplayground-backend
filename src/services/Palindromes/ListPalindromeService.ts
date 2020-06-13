interface PalindromesDTO {
  minimumValue: number;
  maximumValue: number;
  isLeftOpen: boolean;
  isRightOpen: boolean;
}

export default class ListPalindromeService {
  public execute({
    minimumValue,
    maximumValue,
    isLeftOpen,
    isRightOpen,
  }: PalindromesDTO): number[] {
    const start = isLeftOpen ? minimumValue + 1 : minimumValue;
    const end = isRightOpen ? maximumValue - 1 : maximumValue;

    const palindromes = [];

    for (let i = start; i <= end; i++) {
      const reversedNumber = Number(String(i).split('').reverse().join(''));

      if (i - reversedNumber === 0) {
        palindromes.push(i);
      }
    }

    return palindromes;
  }
}
