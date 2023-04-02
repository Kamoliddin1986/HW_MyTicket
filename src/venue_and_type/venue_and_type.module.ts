import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { VenueAndTypeService } from './venue_and_type.service';
import { VenueAndTypeController } from './venue_and_type.controller';
import { Venue } from '../venue/models/venue.model';
import { VenueAndType } from './models/venue_and_type.model';
import { VenueType } from '../venue_type/models/venue_type.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Venue,VenueAndType, VenueType]),JwtModule],
  controllers: [VenueAndTypeController],
  providers: [VenueAndTypeService]
})
export class VenueAndTypeModule {}
