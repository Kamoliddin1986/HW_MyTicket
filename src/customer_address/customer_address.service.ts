import { Injectable } from '@nestjs/common';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { CustomerAddress } from './models/customer_address.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectModel(CustomerAddress) private CustomerAddressRepo: typeof CustomerAddress
    ) {}
  
    create(createCustomerAddressDto: CreateCustomerAddressDto) {
      return this.CustomerAddressRepo.create(createCustomerAddressDto)
    }
  
    async findAll() {
  
      const verib = await this.CustomerAddressRepo.findAll({include:{all: true}})
      return verib
    }
  
    async findOne(id: number) {
      const verib = await this.CustomerAddressRepo.findByPk(id,{include:{all: true}})
      return verib
    }
  
    async update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto) {
      const verib = await this.CustomerAddressRepo.update(updateCustomerAddressDto, {where: {id}})
      return verib
    }
  
    remove(id: number) {
      return this.CustomerAddressRepo.destroy({where: {id}})
    }
  }
