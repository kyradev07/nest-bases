import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from "./entities/brand.entity";

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createAt: new Date().getTime()
    }
  ]


  create(createBrandDto: CreateBrandDto): Brand {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createAt: new Date().getTime()
    }

    this.brands.push(brand);

    return brand;
  }

  findAll(): Brand[] {
    return this.brands;
  }

  findOne(id: string): Brand {
    const brand: Brand | undefined = this.brands.find(brand => brand.id == id);

    if (!brand) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto): Brand {
    let brandDB: Brand = this.findOne(id);

    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        brandDB = {
          ...brandDB,
          ...updateBrandDto,
          updateAt: new Date().getTime()
        };
        return brandDB;
      }
      return brand;
    });

    return brandDB;
  }

  remove(id: string): void {
    this.findOne(id);
    this.brands = this.brands.filter(brand => brand.id !== id);

  }
}
