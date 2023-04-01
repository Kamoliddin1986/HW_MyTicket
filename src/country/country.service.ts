import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Country } from './models/country.model';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country) private countryRepo: typeof Country
    ) {}
    create(createCountryDto: CreateCountryDto) {
      return this.countryRepo.create(createCountryDto)
    }
  
    async findAll() {
  
      const val = await this.countryRepo.findAll({include:{all: true}})
      return val
    }
  
    async findOne(id: number) {
      const val = await this.countryRepo.findByPk(id,{include:{all: true}})
      return val
    }
  
    async update(id: number, updateCountryDto: UpdateCountryDto) {
      const val = await this.countryRepo.update(updateCountryDto, {where: {id}})
      return val
    }
  
    remove(id: number) {
      return this.countryRepo.destroy({where: {id}})
    }
}
