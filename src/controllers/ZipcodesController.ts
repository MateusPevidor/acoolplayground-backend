import { Request, Response } from 'express';
import ListZipcodeService from '../services/Zipcodes/ListZipcodeService';
import api from '../api/ViaCEPApi';

export default class ZipcodesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { zipcodes } = request.body;

    const listZipcode = new ListZipcodeService(api);

    const addresses = await listZipcode.execute(zipcodes);

    return response.json(addresses);
  }
}
