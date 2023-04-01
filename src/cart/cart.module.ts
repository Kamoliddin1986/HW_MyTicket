import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Ticket } from '../ticket/models/ticket.model';
import { Status } from '../status/models/status.model';
import { Cart } from './models/cart.model';
import { Customer } from '../customer/models/customer.model';
import { Booking } from '../booking/models/booking.model';

@Module({
  imports: [SequelizeModule.forFeature([Ticket,Status,Cart,Customer,Booking])],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
