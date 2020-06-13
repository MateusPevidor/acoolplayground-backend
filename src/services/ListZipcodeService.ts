import { AxiosInstance } from 'axios';

import { IFakeApi } from '../api/fakes/FakeViaCEPApi';

interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  unidade: string;
  ibge: string;
  gia: string;
}

export default class ListZipcodeService {
  constructor(private api: AxiosInstance | IFakeApi) {}

  public async execute(zipcodes: string[]): Promise<Address[]> {
    const zipcodesInfo: Address[] = [];

    for (const zipcode of zipcodes) {
      const response = await this.api.get<Address>(`${zipcode}/json`);
      zipcodesInfo.push(response.data as Address);
    }

    return zipcodesInfo;
  }
}
