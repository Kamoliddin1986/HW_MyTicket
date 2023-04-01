import { Injectable } from '@nestjs/common';
import { CreateDiscountMethodDto } from './dto/create-discount_method.dto';
import { UpdateDiscountMethodDto } from './dto/update-discount_method.dto';

@Injectable()
export class DiscountMethodService {
  create(createDiscountMethodDto: CreateDiscountMethodDto) {
    return 'This action adds a new discountMethod';
  }

  findAll() {
    return `This action returns all discountMethod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} discountMethod`;
  }

  update(id: number, updateDiscountMethodDto: UpdateDiscountMethodDto) {
    return `This action updates a #${id} discountMethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} discountMethod`;
  }
}
