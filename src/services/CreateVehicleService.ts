import { Car, Bike, IVehicleDatabase } from '../database/VehiclesDatabase';

interface CreateVehicleDTO {
  type: 'car' | 'bike';
  yearOfManufacture: number;
  model: string;
  brand: string;
  passengerCount: 1 | 2 | null;
}

export default class CreateVehicleService {
  constructor(private vehiclesDatabase: IVehicleDatabase) {}

  public execute({
    type,
    yearOfManufacture,
    model,
    brand,
    passengerCount: passengers,
  }: CreateVehicleDTO): Car | Bike {
    if (type === 'car') {
      const vehicle = new Car({ model, brand, yearOfManufacture });
      const createdCar = this.vehiclesDatabase.save(vehicle);
      return createdCar;
    }
    if (type === 'bike') {
      if (!passengers) {
        throw new Error('Passenger count was not given');
      }

      const vehicle = new Bike({
        model,
        brand,
        yearOfManufacture,
        passengers,
      });
      const createdBike = this.vehiclesDatabase.save(vehicle);
      return createdBike;
    }
    throw new Error('Invalid type');
  }
}
