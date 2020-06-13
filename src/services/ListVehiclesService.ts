import { Car, Bike, IVehicleDatabase } from '../database/VehiclesDatabase';

export default class ListVehicleService {
  constructor(private vehiclesDatabase: IVehicleDatabase) {}

  public execute(): Array<Car | Bike> {
    const vehicles = this.vehiclesDatabase.read();

    return vehicles;
  }
}
