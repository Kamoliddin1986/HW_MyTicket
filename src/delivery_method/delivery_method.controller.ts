import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DeliveryMethodService } from './delivery_method.service';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';
import { isActiveAdminGuard } from '../guard/isActiveAdmin.guard';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';


@ApiTags('delivery-method')
@Controller('delivery-method')
export class DeliveryMethodController {
  constructor(private readonly deliveryMethodService: DeliveryMethodService) {}

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return this.deliveryMethodService.create(createDeliveryMethodDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.deliveryMethodService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryMethodService.findOne(+id);
  }

    @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    return this.deliveryMethodService.update(+id, updateDeliveryMethodDto);
  }

    @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryMethodService.remove(+id);
  }
}
