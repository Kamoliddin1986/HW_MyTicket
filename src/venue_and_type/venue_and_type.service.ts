import { Injectable } from '@nestjs/common';
import { CreateVenueAndTypeDto } from './dto/create-venue_and_type.dto';
import { UpdateVenueAndTypeDto } from './dto/update-venue_and_type.dto';
import { VenueAndType } from './models/venue_and_type.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class VenueAndTypeService {
  constructor(
    @InjectModel(VenueAndType) private venueAndTypeRepo: typeof VenueAndType
    ) {}
  
    create(createVenueAndTypeDto: CreateVenueAndTypeDto) {
      return this.venueAndTypeRepo.create(createVenueAndTypeDto)
    }
  
    async findAll() {
  
      const verib = await this.venueAndTypeRepo.findAll({include:{all: true}})
      return verib
    }
  
    async findOne(id: number) {
      const verib = await this.venueAndTypeRepo.findByPk(id,{include:{all: true}})
      return verib
    }
  
    async update(id: number, updateVenueAndTypeDto: UpdateVenueAndTypeDto) {
      const verib = await this.venueAndTypeRepo.update(updateVenueAndTypeDto, {where: {id}})
      return verib
    }
  
    remove(id: number) {
      return this.venueAndTypeRepo.destroy({where: {id}})
    }
  }