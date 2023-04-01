import { Injectable } from '@nestjs/common';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { VenueType } from './models/venue_type.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class VenueTypeService {
  constructor(
    @InjectModel(VenueType) private venueTypeRepo: typeof VenueType
    ) {}
  
    create(createVenueTypeDto: CreateVenueTypeDto) {
      return this.venueTypeRepo.create(createVenueTypeDto)
    }
  
    async findAll() {
  
      const verib = await this.venueTypeRepo.findAll({include:{all: true}})
      return verib
    }
  
    async findOne(id: number) {
      const verib = await this.venueTypeRepo.findByPk(id,{include:{all: true}})
      return verib
    }
  
    async update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
      const verib = await this.venueTypeRepo.update(updateVenueTypeDto, {where: {id}})
      return verib
    }
  
    remove(id: number) {
      return this.venueTypeRepo.destroy({where: {id}})
    }
  }