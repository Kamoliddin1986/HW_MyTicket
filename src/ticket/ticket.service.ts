import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './models/ticket.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket) private TicketRepo: typeof Ticket
    ) {}
  
    create(createTicketDto: CreateTicketDto) {
      return this.TicketRepo.create(createTicketDto)
    }
  
    async findAll() {
  
      const verib = await this.TicketRepo.findAll({include:{all: true}})
      return verib
    }
  
    async findOne(id: number) {
      const verib = await this.TicketRepo.findByPk(id,{include:{all: true}})
      return verib
    }
  
    async update(id: number, updateTicketDto: UpdateTicketDto) {
      const verib = await this.TicketRepo.update(updateTicketDto, {where: {id}})
      return verib
    }
  
    remove(id: number) {
      return this.TicketRepo.destroy({where: {id}})
    }
  }
