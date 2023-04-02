import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CustomerAddressService } from './customer_address.service';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';


@ApiTags('customer-address')
@Controller('customer-address')
export class CustomerAddressController {
  constructor(private readonly customerAddressService: CustomerAddressService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddressService.create(createCustomerAddressDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.customerAddressService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerAddressService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerAddressDto: UpdateCustomerAddressDto) {
    return this.customerAddressService.update(+id, updateCustomerAddressDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerAddressService.remove(+id);
  }
}
