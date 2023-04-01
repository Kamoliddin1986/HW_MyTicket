import { Injectable } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { Venue } from './models/venue.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class VenueService {
  constructor(
    @InjectModel(Venue) private venueRepo: typeof Venue
    ) {}
  
    create(createVenueDto: CreateVenueDto) {
      return this.venueRepo.create(createVenueDto)
    }
  
    async findAll() {
  
      const venue = await this.venueRepo.findAll({include:{all: true}})
      return venue
    }
  
    async findOne(id: number) {
      const venue = await this.venueRepo.findByPk(id,{include:{all: true}})
      return venue
    }
  
    async update(id: number, updateVenueDto: UpdateVenueDto) {
      const venue = await this.venueRepo.update(updateVenueDto, {where: {id}})
      return venue
    }
  
    remove(id: number) {
      return this.venueRepo.destroy({where: {id}})
    }
  }
