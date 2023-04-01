import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Status } from '../status/models/status.model';
import { DeliveryMethod } from '../delivery_method/models/delivery_method.model';
import { PaymentMethod } from '../payment_method/models/payment_method.model';
import { DiscountMethod } from '../discount_method/models/discount_method.model';
import { Booking } from './models/booking.model';

@Module({
  imports: [SequelizeModule.forFeature([Status, DeliveryMethod, PaymentMethod, DiscountMethod,Booking])],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule {}
