import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DiscountMethodService } from './discount_method.service';
import { CreateDiscountMethodDto } from './dto/create-discount_method.dto';
import { UpdateDiscountMethodDto } from './dto/update-discount_method.dto';
import { isActiveAdminGuard } from '../guard/isActiveAdmin.guard';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';

@Controller('discount-method')
export class DiscountMethodController {
  constructor(private readonly discountMethodService: DiscountMethodService) {}

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createDiscountMethodDto: CreateDiscountMethodDto) {
    return this.discountMethodService.create(createDiscountMethodDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.discountMethodService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discountMethodService.findOne(+id);
  }

    @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscountMethodDto: UpdateDiscountMethodDto) {
    return this.discountMethodService.update(+id, updateDiscountMethodDto);
  }

    @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discountMethodService.remove(+id);
  }
}
