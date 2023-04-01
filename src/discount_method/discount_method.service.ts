import { Injectable } from '@nestjs/common';
import { CreateDiscountMethodDto } from './dto/create-discount_method.dto';
import { UpdateDiscountMethodDto } from './dto/update-discount_method.dto';
import { DiscountMethod } from './models/discount_method.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DiscountMethodService {
  constructor(
    @InjectModel(DiscountMethod) private DiscountMethodRepo: typeof DiscountMethod
    ) {}
  
    create(createDiscountMethodDto: CreateDiscountMethodDto) {
      return this.DiscountMethodRepo.create(createDiscountMethodDto)
    }
  
    async findAll() {
  
      const verib = await this.DiscountMethodRepo.findAll({include:{all: true}})
      return verib
    }
  
    async findOne(id: number) {
      const verib = await this.DiscountMethodRepo.findByPk(id,{include:{all: true}})
      return verib
    }
  
    async update(id: number, updateDiscountMethodDto: UpdateDiscountMethodDto) {
      const verib = await this.DiscountMethodRepo.update(updateDiscountMethodDto, {where: {id}})
      return verib
    }
  
    remove(id: number) {
      return this.DiscountMethodRepo.destroy({where: {id}})
    }
  }
