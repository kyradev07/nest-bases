import { Body, Controller, Delete, Get, Inject, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from "./cars.service";
import { Car } from "../models/car.interface";
import { CreateCarDto } from "../models/create-car.dto";

@Controller('cars')
export class CarsController {

    @Inject()
    private readonly carsService: CarsService;

    @Get()
    findAllCars(): Car[] {
        return this.carsService.findAllCars();
    }

    @Get(':id')
    findCarById(@Param('id', ParseUUIDPipe) id: string): Car | undefined {
        return this.carsService.findCarById(id);
    }

    @Post()
    addCar(@Body() car: CreateCarDto): CreateCarDto {
        return car;
    }

    @Patch(':id')
    updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() car: Car) {
        return car;
    }

    @Delete()
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return id;
    }

}
