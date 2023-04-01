import { Injectable } from '@nestjs/common';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { EventType } from './models/event_type.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(EventType) private EventTypeRepo: typeof EventType
    ) {}
  
    create(createEventTypeDto: CreateEventTypeDto) {
      return this.EventTypeRepo.create(createEventTypeDto)
    }
  
    async findAll() {
  
      const verib = await this.EventTypeRepo.findAll({include:{all: true}})
      return verib
    }
  
    async findOne(id: number) {
      const verib = await this.EventTypeRepo.findByPk(id,{include:{all: true}})
      return verib
    }
  
    async update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
      const verib = await this.EventTypeRepo.update(updateEventTypeDto, {where: {id}})
      return verib
    }
  
    remove(id: number) {
      return this.EventTypeRepo.destroy({where: {id}})
    }
  }
