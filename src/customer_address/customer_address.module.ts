import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { CustomerAddressService } from './customer_address.service';
import { CustomerAddressController } from './customer_address.controller';
import { Customer } from '../customer/models/customer.model';
import { CustomerAddress } from './models/customer_address.model';
import { Region } from '../region/models/region.model';
import { District } from '../district/models/district.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Customer,CustomerAddress,Region, District]),JwtModule],
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService]
})
export class CustomerAddressModule {}
