export interface IFakeApi {
  get(cep: string): Promise<Response>;
}

interface Address {
  cep: string;
}

interface Response {
  data: Address;
}

class FakeApi {
  public async get(cep: string): Promise<Response> {
    const response = {
      data: {
        cep: cep.split('/')[0],
      },
    };
    return response as Response;
  }
}

export default new FakeApi();
