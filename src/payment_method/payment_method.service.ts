import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { PaymentMethod } from './models/payment_method.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethod) private PaymentMethodRepo: typeof PaymentMethod
    ) {}
  
    create(createPaymentMethodDto: CreatePaymentMethodDto) {
      return this.PaymentMethodRepo.create(createPaymentMethodDto)
    }
  
    async findAll() {
  
      const verib = await this.PaymentMethodRepo.findAll({include:{all: true}})
      return verib
    }
  
    async findOne(id: number) {
      const verib = await this.PaymentMethodRepo.findByPk(id,{include:{all: true}})
      return verib
    }
  
    async update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
      const verib = await this.PaymentMethodRepo.update(updatePaymentMethodDto, {where: {id}})
      return verib
    }
  
    remove(id: number) {
      return this.PaymentMethodRepo.destroy({where: {id}})
    }
  }
