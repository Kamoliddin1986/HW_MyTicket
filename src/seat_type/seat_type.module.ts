import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { SeatTypeService } from './seat_type.service';
import { SeatTypeController } from './seat_type.controller';
import { Seat } from '../seat/models/seat.model';
import { SeatType } from './models/seat_type.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Seat,SeatType]),JwtModule],
  controllers: [SeatTypeController],
  providers: [SeatTypeService]
})
export class SeatTypeModule {}
