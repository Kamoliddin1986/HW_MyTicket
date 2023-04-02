import { Region } from './../region/models/region.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { VenueController } from './venue.controller';
import { Venue } from './models/venue.model';
import { VenueAndType } from '../venue_and_type/models/venue_and_type.model';
import { VenuePhoto } from '../venue_photo/models/venue_photo.model';
import { Seat } from '../seat/models/seat.model';
import { District } from '../district/models/district.model';
import { Event } from '../event/models/event.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([
    Venue,
    VenueAndType,
    Seat,
    VenuePhoto,
    Event,
    District,Region]),JwtModule],
  controllers: [VenueController],
  providers: [VenueService]
})
export class VenueModule {}
