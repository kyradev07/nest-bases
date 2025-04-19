import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from "../models/car.interface";
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cubic'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Volkswagen',
            model: 'Shadow'
        }
    ];

    findAllCars(): Car[] {
        return this.cars;
    }

    findCarById(id: string): Car | undefined {
        const car: Car | undefined = this.cars.find(car => car.id == id);

        if (!car) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }

        return car;
    }

}
