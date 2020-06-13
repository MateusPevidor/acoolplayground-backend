import VehiclesDatabase, { Car, Bike } from '../database/VehiclesDatabase';

interface CreateVehicleDTO {
  type: 'car' | 'bike';
  yearOfManufacture: number;
  model: string;
  brand: string;
  passengerCount: 1 | 2 | null;
}

export default class CreateVehicleService {
  public execute({
    type,
    yearOfManufacture,
    model,
    brand,
    passengerCount: passengers,
  }: CreateVehicleDTO): Car | Bike {
    const vehiclesDatabase = new VehiclesDatabase();

    if (type === 'car') {
      const vehicle = new Car({ model, brand, yearOfManufacture });
      const createdCar = vehiclesDatabase.save(vehicle);
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
      const createdBike = vehiclesDatabase.save(vehicle);
      return createdBike;
    }
    throw new Error('Invalid type');
  }
}
