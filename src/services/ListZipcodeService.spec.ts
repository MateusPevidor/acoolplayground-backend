import ListZipcodeService from './ListZipcodeService';
import FakeApi from './fakes/FakeViaCEPApi';

describe('ListZipcodes', () => {
  it('should be able to list retrieve info from given zipcodes', async () => {
    const listZipcodeService = new ListZipcodeService(FakeApi);

    const zipCodes = [
      '32340-020',
      '32340-010',
      '32340-000',
      '32340-030',
      '32340-040',
    ];

    const response = await listZipcodeService.execute(zipCodes);

    expect(response).toEqual(
      expect.arrayContaining([
        { cep: '32340-020' },
        { cep: '32340-010' },
        { cep: '32340-000' },
        { cep: '32340-030' },
        { cep: '32340-040' },
      ]),
    );
  });
});
