import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from "./models/car.interface";
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from "./models/create-car.dto";
import { UpdateCarDto } from "./models/update-car.dto";

@Injectable()
export class CarsService {

    private cars: Car[];

    findAllCars(): Car[] {
        return this.cars;
    }

    findCarById(id: string): Car {
        const car: Car | undefined = this.cars.find(car => car.id == id);

        if (!car) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }

        return car;
    }

    addCar(carDto: CreateCarDto): Car {
        const car: Car = {
            id: uuid(),
            ...carDto
        }
        this.cars.push(car);
        return car;
    }

    updateCar(id: string, updateCar: UpdateCarDto): Car {
        let carDB: Car = this.findCarById(id);

        if (updateCar.id && updateCar.id != id) {
            throw new BadRequestException(`Id ${id} is different to ${carDB.id}`)
        }

        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = {
                    id,
                    brand: updateCar.brand ? updateCar.brand : carDB.brand,
                    model: updateCar.model ? updateCar.model : carDB.model,
                };
                return carDB;
            }
            return car;
        });
        return carDB;
    }

    deleteCarById(id: string): void {
        this.findCarById(id)
        this.cars = this.cars.filter(car => car.id !== id);

    }

    fillCarsSeed(cars: Car[]): void {
        this.cars = [...cars];
    }

}
