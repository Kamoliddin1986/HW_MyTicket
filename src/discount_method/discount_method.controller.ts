import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiscountMethodService } from './discount_method.service';
import { CreateDiscountMethodDto } from './dto/create-discount_method.dto';
import { UpdateDiscountMethodDto } from './dto/update-discount_method.dto';

@Controller('discount-method')
export class DiscountMethodController {
  constructor(private readonly discountMethodService: DiscountMethodService) {}

  @Post()
  create(@Body() createDiscountMethodDto: CreateDiscountMethodDto) {
    return this.discountMethodService.create(createDiscountMethodDto);
  }

  @Get()
  findAll() {
    return this.discountMethodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discountMethodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscountMethodDto: UpdateDiscountMethodDto) {
    return this.discountMethodService.update(+id, updateDiscountMethodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discountMethodService.remove(+id);
  }
}
