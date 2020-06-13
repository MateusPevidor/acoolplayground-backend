import CreateVehicleService from './CreateVehicleService';
import FakeVehiclesDatabase from '../../database/fakes/FakeVehiclesDatabase';

describe('CreateVehicles', () => {
  it('should be able to create new vehicles', () => {
    const createVehicleService = new CreateVehicleService(
      new FakeVehiclesDatabase(),
    );

    const response = createVehicleService.execute({
      type: 'car',
      yearOfManufacture: 2014,
      brand: 'Toyota',
      model: 'Corolla',
    });

    expect(response).toHaveProperty('id');
  });

  it('should not be able to create a bike without passengers', () => {
    const createVehicleService = new CreateVehicleService(
      new FakeVehiclesDatabase(),
    );

    expect(() =>
      createVehicleService.execute({
        type: 'bike',
        yearOfManufacture: 2012,
        brand: 'Honda',
        model: 'CB650R',
      }),
    ).toThrowError('Passenger count was not given');
  });
});
