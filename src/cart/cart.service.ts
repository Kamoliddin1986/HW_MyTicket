import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './models/cart.model';
import { InjectModel } from '@nestjs/sequelize';
import { AddMinutesToDate } from '../helper/addMinutes';
import { Ticket } from '../ticket/models/ticket.model';
import { TicketService } from '../ticket/ticket.service';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart) private CartRepo: typeof Cart,
    @InjectModel(Ticket) private TicketRepo: typeof Ticket,
    ) {}
  
    async create(createCartDto: CreateCartDto) {
      const { ticket_id,customer_id} = createCartDto
      const finishedAt = AddMinutesToDate(new Date(),30)
      const status_id = 4
      const TicketInCart = await this.TicketRepo.findByPk(ticket_id)
      const updatedTicket = await this.TicketRepo.update({status_id: 4}, {where: {id: ticket_id}})
      const createdCart = await this.CartRepo.create({...createCartDto,finishedAt,status_id})
      return createdCart
    }
  
    async findAll() {
  
      const verib = await this.CartRepo.findAll({include:{all: true}})
      return verib
    }
  
    async findOne(id: number) {
      const verib = await this.CartRepo.findByPk(id,{include:{all: true}})
      return verib
    }
  
    async update(id: number, updateCartDto: UpdateCartDto) {
      const verib = await this.CartRepo.update(updateCartDto, {where: {id}})
      return verib
    }
  
    remove(id: number) {
      return this.CartRepo.destroy({where: {id}})
    }
  }
