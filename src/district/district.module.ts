import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictController } from './district.controller';
import { Region } from '../region/models/region.model';
import { District } from './models/district.model';
import { Venue } from '../venue/models/venue.model';

@Module({
  imports: [SequelizeModule.forFeature([Region,District,Venue])],
  controllers: [DistrictController],
  providers: [DistrictService]
})
export class DistrictModule {}
