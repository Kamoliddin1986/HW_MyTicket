import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { VenuePhotoController } from './venue_photo.controller';
import { Venue } from '../venue/models/venue.model';
import { VenuePhoto } from './models/venue_photo.model';

@Module({
  imports: [SequelizeModule.forFeature([Venue,VenuePhoto])],
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService]
})
export class VenuePhotoModule {}
