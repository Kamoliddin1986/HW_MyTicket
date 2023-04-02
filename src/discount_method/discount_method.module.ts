import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { DiscountMethodService } from './discount_method.service';
import { DiscountMethodController } from './discount_method.controller';
import { DiscountMethod } from './models/discount_method.model';
import { Booking } from '../booking/models/booking.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([DiscountMethod,Booking]),JwtModule],
  controllers: [DiscountMethodController],
  providers: [DiscountMethodService]
})
export class DiscountMethodModule {}
