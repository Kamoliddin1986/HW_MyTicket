import { Injectable } from '@nestjs/common';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { SeatType } from './models/seat_type.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class SeatTypeService {
  constructor(
    @InjectModel(SeatType) private SeatTypeRepo: typeof SeatType
    ) {}
  
    create(createSeatTypeDto: CreateSeatTypeDto) {
      return this.SeatTypeRepo.create(createSeatTypeDto)
    }
  
    async findAll() {
  
      const verib = await this.SeatTypeRepo.findAll({include:{all: true}})
      return verib
    }
  
    async findOne(id: number) {
      const verib = await this.SeatTypeRepo.findByPk(id,{include:{all: true}})
      return verib
    }
  
    async update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
      const verib = await this.SeatTypeRepo.update(updateSeatTypeDto, {where: {id}})
      return verib
    }
  
    remove(id: number) {
      return this.SeatTypeRepo.destroy({where: {id}})
    }
  }