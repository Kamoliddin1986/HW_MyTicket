import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './models/booking.model';
import { InjectModel } from '@nestjs/sequelize';
import { Ticket } from '../ticket/models/ticket.model';
import { Cart } from '../cart/models/cart.model';
import { ADDRGETNETWORKPARAMS } from 'dns';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking) private BookingRepo: typeof Booking,
    @InjectModel(Ticket) private TicketRepo: typeof Ticket,
    @InjectModel(Cart) private CartRepo: typeof Cart,
    ) {}
  
    async create(createBookingDto: CreateBookingDto) {
      const {cart_id} = createBookingDto
      const cart = await this.CartRepo.findByPk(cart_id)
      const updateStatusTicket = await this.TicketRepo.update({status_id: 2}, {where: {id: cart.ticket_id}})
      const updateStatusCart = await this.CartRepo.update({status_id: 2}, {where: {id: cart_id}})

      return this.BookingRepo.create(createBookingDto)
    }
  
    async findAll() {
  
      const verib = await this.BookingRepo.findAll({include:{all: true}})
      return verib
    }
  
    async findOne(id: number) {
      const verib = await this.BookingRepo.findByPk(id,{include:{all: true}})
      return verib
    }
  
    async update(id: number, updateBookingDto: UpdateBookingDto) {
      const verib = await this.BookingRepo.update(updateBookingDto, {where: {id}})
      return verib
    }
  
    remove(id: number) {
      return this.BookingRepo.destroy({where: {id}})
    }
  }
