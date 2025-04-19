import {Injectable, NotFoundException} from '@nestjs/common';
import {Car} from "../models/car.interface";

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'Jeep',
            model: 'Cubic'
        },
        {
            id: 3,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: 4,
            brand: 'Volkswagen',
            model: 'Shadow'
        }
    ];

    findAllCars(): Car[] {
        return this.cars;
    }

    findCarById(id: number): Car | undefined {
        const car: Car | undefined = this.cars.find(car => car.id == id);

        if (!car) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }

        return car;
    }

}
