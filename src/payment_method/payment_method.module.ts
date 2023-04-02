import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { PaymentMethodService } from './payment_method.service';
import { PaymentMethodController } from './payment_method.controller';
import { PaymentMethod } from './models/payment_method.model';
import { Booking } from '../booking/models/booking.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([PaymentMethod, Booking]),JwtModule],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService]
})
export class PaymentMethodModule {}
