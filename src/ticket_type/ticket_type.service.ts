import { Injectable } from '@nestjs/common';
import { CreateTicketTypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket_type.dto';
import { TicketType } from './models/ticket_type.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TicketTypeService {
    constructor(
      @InjectModel(TicketType) private TicketTypeRepo: typeof TicketType
      ) {}
    
      create(createTicketTypeDto: CreateTicketTypeDto) {
        return this.TicketTypeRepo.create(createTicketTypeDto)
      }
    
      async findAll() {
    
        const verib = await this.TicketTypeRepo.findAll({include:{all: true}})
        return verib
      }
    
      async findOne(id: number) {
        const verib = await this.TicketTypeRepo.findByPk(id,{include:{all: true}})
        return verib
      }
    
      async update(id: number, updateTicketTypeDto: UpdateTicketTypeDto) {
        const verib = await this.TicketTypeRepo.update(updateTicketTypeDto, {where: {id}})
        return verib
      }
    
      remove(id: number) {
        return this.TicketTypeRepo.destroy({where: {id}})
      }
    }
