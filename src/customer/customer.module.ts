import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { Lang } from '../lang/models/lang.model';
import { Customer } from './models/customer.model';
import { Cart } from '../cart/models/cart.model';
import { CustomerCard } from '../customer_card/models/customer_card.model';
import {JwtModule} from '@nestjs/jwt'


@Module({
  imports: [SequelizeModule.forFeature([Lang,Customer,Cart,CustomerCard]),JwtModule.register({})],
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomerModule {}
