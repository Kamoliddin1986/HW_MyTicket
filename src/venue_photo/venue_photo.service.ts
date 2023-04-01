import { Injectable } from '@nestjs/common';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenuePhoto } from './models/venue_photo.model';

@Injectable()
export class VenuePhotoService {
  constructor(
  @InjectModel(VenuePhoto) private venuePhotoRepo: typeof VenuePhoto
  ) {}

  create(createVenuePhotoDto: CreateVenuePhotoDto) {
    return this.venuePhotoRepo.create(createVenuePhotoDto)
  }

  async findAll() {

    const venuePhoto = await this.venuePhotoRepo.findAll({include:{all: true}})
    return venuePhoto
  }

  async findOne(id: number) {
    const venuePhoto = await this.venuePhotoRepo.findByPk(id,{include:{all: true}})
    return venuePhoto
  }

  async update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    const venuePhoto = await this.venuePhotoRepo.update(updateVenuePhotoDto, {where: {id}})
    return venuePhoto
  }

  remove(id: number) {
    return this.venuePhotoRepo.destroy({where: {id}})
  }
}
