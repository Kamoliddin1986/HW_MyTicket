import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { EventTypeController } from './event_type.controller';
import { EventType } from './models/event_type.model';
import { Event } from '../event/models/event.model';

@Module({
  imports: [SequelizeModule.forFeature([EventType,Event])],
  controllers: [EventTypeController],
  providers: [EventTypeService]
})
export class EventTypeModule {}
