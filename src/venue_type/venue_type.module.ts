import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { VenueTypeService } from './venue_type.service';
import { VenueTypeController } from './venue_type.controller';
import { VenueType } from './models/venue_type.model';
import { VenueAndType } from '../venue_and_type/models/venue_and_type.model';

@Module({
  imports: [SequelizeModule.forFeature([VenueType,VenueAndType])],
  controllers: [VenueTypeController],
  providers: [VenueTypeService]
})
export class VenueTypeModule {}
