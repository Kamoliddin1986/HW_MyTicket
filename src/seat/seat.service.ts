import { Injectable } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './models/seat.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class SeatService {
  constructor(
    @InjectModel(Seat) private SeatRepo: typeof Seat
    ) {}
  
    create(createSeatDto: CreateSeatDto) {
      return this.SeatRepo.create(createSeatDto)
    }
  
    async findAll() {
  
      const verib = await this.SeatRepo.findAll({include:{all: true}})
      return verib
    }
  
    async findOne(id: number) {
      const verib = await this.SeatRepo.findByPk(id,{include:{all: true}})
      return verib
    }
  
    async update(id: number, updateSeatDto: UpdateSeatDto) {
      const verib = await this.SeatRepo.update(updateSeatDto, {where: {id}})
      return verib
    }
  
    remove(id: number) {
      return this.SeatRepo.destroy({where: {id}})
    }
  }
