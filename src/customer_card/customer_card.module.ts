import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { CustomerCardService } from './customer_card.service';
import { CustomerCardController } from './customer_card.controller';
import { Customer } from '../customer/models/customer.model';
import { CustomerCard } from './models/customer_card.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Customer, CustomerCard]),JwtModule],
  controllers: [CustomerCardController],
  providers: [CustomerCardService]
})
export class CustomerCardModule {}
