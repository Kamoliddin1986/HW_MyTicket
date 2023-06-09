import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { DeliveryMethodService } from './delivery_method.service';
import { DeliveryMethodController } from './delivery_method.controller';
import { DeliveryMethod } from './models/delivery_method.model';
import { Booking } from '../booking/models/booking.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([DeliveryMethod,Booking]),JwtModule],
  controllers: [DeliveryMethodController],
  providers: [DeliveryMethodService]
})
export class DeliveryMethodModule {}
