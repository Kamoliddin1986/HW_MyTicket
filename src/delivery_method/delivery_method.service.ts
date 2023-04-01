import { Injectable } from '@nestjs/common';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';
import { DeliveryMethod } from './models/delivery_method.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DeliveryMethodService {
  constructor(
    @InjectModel(DeliveryMethod) private DeliveryMethodRepo: typeof DeliveryMethod
    ) {}
  
    create(createDeliveryMethodDto: CreateDeliveryMethodDto) {
      return this.DeliveryMethodRepo.create(createDeliveryMethodDto)
    }
  
    async findAll() {
  
      const verib = await this.DeliveryMethodRepo.findAll({include:{all: true}})
      return verib
    }
  
    async findOne(id: number) {
      const verib = await this.DeliveryMethodRepo.findByPk(id,{include:{all: true}})
      return verib
    }
  
    async update(id: number, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
      const verib = await this.DeliveryMethodRepo.update(updateDeliveryMethodDto, {where: {id}})
      return verib
    }
  
    remove(id: number) {
      return this.DeliveryMethodRepo.destroy({where: {id}})
    }
  }
