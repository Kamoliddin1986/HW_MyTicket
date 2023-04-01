import { Injectable } from '@nestjs/common';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { CustomerCard } from './models/customer_card.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CustomerCardService {
  constructor(
    @InjectModel(CustomerCard) private CustomerCardRepo: typeof CustomerCard
    ) {}
  
    create(createCustomerCardDto: CreateCustomerCardDto) {
      return this.CustomerCardRepo.create(createCustomerCardDto)
    }
  
    async findAll() {
  
      const verib = await this.CustomerCardRepo.findAll({include:{all: true}})
      return verib
    }
  
    async findOne(id: number) {
      const verib = await this.CustomerCardRepo.findByPk(id,{include:{all: true}})
      return verib
    }
  
    async update(id: number, updateCustomerCardDto: UpdateCustomerCardDto) {
      const verib = await this.CustomerCardRepo.update(updateCustomerCardDto, {where: {id}})
      return verib
    }
  
    remove(id: number) {
      return this.CustomerCardRepo.destroy({where: {id}})
    }
  }

