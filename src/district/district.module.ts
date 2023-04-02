import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictController } from './district.controller';
import { Region } from '../region/models/region.model';
import { District } from './models/district.model';
import { Venue } from '../venue/models/venue.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Region,District,Venue]),JwtModule],
  controllers: [DistrictController],
  providers: [DistrictService]
})
export class DistrictModule {}
