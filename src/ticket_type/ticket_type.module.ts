import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { TicketTypeService } from './ticket_type.service';
import { TicketTypeController } from './ticket_type.controller';
import { Ticket } from '../ticket/models/ticket.model';
import { TicketType } from './models/ticket_type.model';

@Module({
  imports: [SequelizeModule.forFeature([Ticket, TicketType])],
  controllers: [TicketTypeController],
  providers: [TicketTypeService]
})
export class TicketTypeModule {}
