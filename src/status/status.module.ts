import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
import { Status } from './models/status.model';
import { Ticket } from '../ticket/models/ticket.model';
import { Cart } from '../cart/models/cart.model';

@Module({
  imports: [SequelizeModule.forFeature([Ticket,Status,Cart])],
  controllers: [StatusController],
  providers: [StatusService]
})
export class StatusModule {}
