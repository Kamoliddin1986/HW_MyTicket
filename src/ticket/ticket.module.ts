import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { Ticket } from './models/ticket.model';
import { Event } from '../event/models/event.model';
import { Seat } from '../seat/models/seat.model';
import { Status } from '../status/models/status.model';
import { Cart } from '../cart/models/cart.model';

@Module({
  imports: [SequelizeModule.forFeature([Ticket,Event,Seat, Status, Cart])],
  controllers: [TicketController],
  providers: [TicketService]
})
export class TicketModule {}
