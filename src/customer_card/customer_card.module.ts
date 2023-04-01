import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { CustomerCardService } from './customer_card.service';
import { CustomerCardController } from './customer_card.controller';
import { Customer } from '../customer/models/customer.model';
import { CustomerCard } from './models/customer_card.model';

@Module({
  imports: [SequelizeModule.forFeature([Customer, CustomerCard])],
  controllers: [CustomerCardController],
  providers: [CustomerCardService]
})
export class CustomerCardModule {}
