import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { Event } from './models/event.model';
import { Venue } from '../venue/models/venue.model';
import { EventType } from '../event_type/models/event_type.model';
import { HumanCategory } from '../human_category/models/human_category.model';
import { Lang } from '../lang/models/lang.model';

@Module({
  imports: [SequelizeModule.forFeature([Event,Lang,Venue,EventType,HumanCategory])],
  controllers: [EventController],
  providers: [EventService]
})
export class EventModule {}
