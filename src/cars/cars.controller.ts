import {Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post} from '@nestjs/common';
import {CarsService} from "./cars.service";
import {Car} from "../models/car.interface";

@Controller('cars')
export class CarsController {

    @Inject()
    private readonly carsService: CarsService;

    @Get()
    findAllCars(): Car[] {
        return this.carsService.findAllCars();
    }

    @Get(':id')
    findCarById(@Param('id', ParseIntPipe) id: number): Car | undefined {
        return this.carsService.findCarById(id);
    }

    @Post()
    addCar(@Body() car: Car) {
        return car;
    }

    @Patch(':id')
    updateCar(@Param('id', ParseIntPipe) id: number, @Body() car: Car) {
        return car;
    }

    @Delete()
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        return id;
    }

}
