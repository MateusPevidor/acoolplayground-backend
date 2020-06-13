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

export default class VehiclesDatabase {
  public read(): Array<Car | Bike> {
    const vehicles = [
      {
        id: '2cc6b89d-ce7c-450f-87c6-870f5781e59c',
        doorCount: 4,
        model: 'Civic',
        yearOfManufacture: 2017,
        brand: 'Honda',
      } as Car,
      {
        id: '75442486-0878-440c-9db1-a7006c25a39f',
        yearOfManufacture: 1999,
        doorCount: 4,
        model: 'M5',
        brand: 'BMW',
      } as Car,
    ];

    return vehicles;
  }

  public save(vehicle: Car | Bike): Car | Bike {
    return vehicle;
  }
}
