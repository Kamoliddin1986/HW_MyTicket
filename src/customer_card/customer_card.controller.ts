import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CustomerCardService } from './customer_card.service';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { isActiveAdminGuard } from '../guard/isActiveAdmin.guard';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';


@ApiTags('customer-card')
@Controller('customer-card')
export class CustomerCardController {
  constructor(private readonly customerCardService: CustomerCardService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardService.create(createCustomerCardDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.customerCardService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerCardService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerCardDto: UpdateCustomerCardDto) {
    return this.customerCardService.update(+id, updateCustomerCardDto);
  }

    @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerCardService.remove(+id);
  }
}
