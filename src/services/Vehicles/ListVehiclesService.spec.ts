import ListVehiclesService from './ListVehiclesService';
import FakeVehiclesDatabase from '../../database/fakes/FakeVehiclesDatabase';

describe('ListVehicles', () => {
  it('should be able to list vehicles', () => {
    const listVehiclesService = new ListVehiclesService(
      new FakeVehiclesDatabase(),
    );

    const response = listVehiclesService.execute();

    expect(response).toHaveLength(2);
  });
});
