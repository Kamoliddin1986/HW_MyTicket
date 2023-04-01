import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './models/booking.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking) private BookingRepo: typeof Booking
    ) {}
  
    create(createBookingDto: CreateBookingDto) {
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
