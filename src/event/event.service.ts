import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './models/event.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event) private EventRepo: typeof Event
    ) {}
  
    create(createEventDto: CreateEventDto) {
      return this.EventRepo.create(createEventDto)
    }
  
    async findAll() {
  
      const verib = await this.EventRepo.findAll({include:{all: true}})
      return verib
    }
  
    async findOne(id: number) {
      const verib = await this.EventRepo.findByPk(id,{include:{all: true}})
      return verib
    }
  
    async update(id: number, updateEventDto: UpdateEventDto) {
      const verib = await this.EventRepo.update(updateEventDto, {where: {id}})
      return verib
    }
  
    remove(id: number) {
      return this.EventRepo.destroy({where: {id}})
    }
  }
