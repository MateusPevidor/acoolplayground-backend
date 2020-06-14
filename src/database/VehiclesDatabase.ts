import fs from 'fs';
import path from 'path';
import { uuid } from 'uuidv4';

interface Vehicle {
  id: string;
  model: string;
  yearOfManufacture: number;
  doorCount: 0 | 4;
  brand: string;
}

export class Car implements Vehicle {
  id: string = uuid();

  model: string;

  yearOfManufacture: number;

  doorCount: 4 = 4;

  brand: string;

  constructor({
    model,
    yearOfManufacture,
    brand,
  }: Omit<Car, 'id' | 'doorCount'>) {
    this.model = model;
    this.yearOfManufacture = yearOfManufacture;
    this.brand = brand;
  }
}

export class Bike implements Vehicle {
  id: string = uuid();

  model: string;

  yearOfManufacture: number;

  doorCount: 0 = 0;

  wheelCount = 2;

  passengers: 1 | 2;

  brand: string;

  constructor({
    model,
    yearOfManufacture,
    passengers,
    brand,
  }: Omit<Bike, 'id' | 'doorCount' | 'wheelCount'>) {
    this.model = model;
    this.yearOfManufacture = yearOfManufacture;
    this.passengers = passengers;
    this.brand = brand;
  }
}

export interface IVehicleDatabase {
  read(): Array<Car | Bike>;
  save(vehicle: Car | Bike): Car | Bike;
}

export default class VehiclesDatabase implements IVehicleDatabase {
  public read(): Array<Car | Bike> {
    const data = fs.readFileSync(
      path.resolve(__dirname, 'vehicles.json'),
      'utf8',
    );
    const vehicles = JSON.parse(data) as Array<Car | Bike>;

    return vehicles;
  }

  public save(vehicle: Car | Bike): Car | Bike {
    const data = fs.readFileSync(
      path.resolve(__dirname, 'vehicles.json'),
      'utf8',
    );
    const vehicles = JSON.parse(data);

    const newVehicle = {
      type: vehicle instanceof Car ? 'car' : 'bike',
      ...vehicle,
    };

    vehicles.push(newVehicle);

    fs.writeFileSync(
      path.resolve(__dirname, 'vehicles.json'),
      JSON.stringify(vehicles),
    );

    return newVehicle;
  }
}
