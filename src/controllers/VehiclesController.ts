import { Request, Response } from 'express';

import VehiclesDatabase from '../database/VehiclesDatabase';

import ListVehiclesService from '../services/ListVehiclesService';
import CreateVehicleService from '../services/CreateVehicleService';

export default class VehiclesController {
  public index(request: Request, response: Response): Response {
    const listVehicles = new ListVehiclesService(new VehiclesDatabase());

    const vehicles = listVehicles.execute();

    return response.json(vehicles);
  }

  public create(request: Request, response: Response): Response {
    const createVehicles = new CreateVehicleService();

    const {
      type,
      yearOfManufacture,
      model,
      brand,
      passengerCount,
    } = request.body;

    try {
      const createdVehicle = createVehicles.execute({
        type,
        yearOfManufacture,
        model,
        brand,
        passengerCount,
      });
      return response.json(createdVehicle);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}
