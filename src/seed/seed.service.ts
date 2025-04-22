import { Inject, Injectable } from '@nestjs/common';
import { BrandsService } from "../brands/brands.service";
import { CarsService } from "../cars/cars.service";
import { CARS_SEED } from "./data/cars.seed";
import { BRANDS_SEED } from "./data/brands.seed";

@Injectable()
export class SeedService {

    @Inject()
    private carsService: CarsService;

    @Inject()
    private brandsService: BrandsService;


    runSeed(): string {
        this.carsService.fillCarsSeed(CARS_SEED);
        this.brandsService.fillBrandsSeed(BRANDS_SEED);
        return `This action returns all seed`;
    }

}
