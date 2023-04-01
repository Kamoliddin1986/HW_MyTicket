import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { Country } from './models/country.model';
import { CustomerAddress } from '../customer_address/models/customer_address.model';
import { Region } from '../region/models/region.model';

@Module({
  imports: [SequelizeModule.forFeature([Country,CustomerAddress, Region])],
  controllers: [CountryController],
  providers: [CountryService]
})
export class CountryModule {}
