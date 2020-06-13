import VehiclesDatabase, { Car, Bike } from '../database/VehiclesDatabase';

export default class ListVehicleService {
  public execute(): Array<Car | Bike> {
    const vehiclesDatabase = new VehiclesDatabase();

    const vehicles = vehiclesDatabase.read();

    return vehicles;
  }
}
