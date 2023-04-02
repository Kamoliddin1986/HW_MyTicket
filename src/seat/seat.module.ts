import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatController } from './seat.controller';
import { Seat } from './models/seat.model';
import { Venue } from '../venue/models/venue.model';
import { SeatType } from '../seat_type/models/seat_type.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Seat,Venue,SeatType]),JwtModule],
  controllers: [SeatController],
  providers: [SeatService]
})
export class SeatModule {}
