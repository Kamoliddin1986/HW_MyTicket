import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { Region } from './models/region.model';
import { District } from '../district/models/district.model';
import { Venue } from '../venue/models/venue.model';
import { CustomerAddress } from '../customer_address/models/customer_address.model';
import { Country } from '../country/models/country.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Region,District, Venue,Country,CustomerAddress]),JwtModule],
  controllers: [RegionController],
  providers: [RegionService]
})
export class RegionModule {}
