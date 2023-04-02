import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SeatTypeService } from './seat_type.service';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { isActiveAdminGuard } from '../guard/isActiveAdmin.guard';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';


@ApiTags('seat-type')
@Controller('seat-type')
export class SeatTypeController {
  constructor(private readonly seatTypeService: SeatTypeService) {}

@UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeService.create(createSeatTypeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.seatTypeService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatTypeService.findOne(+id);
  }

@UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeatTypeDto: UpdateSeatTypeDto) {
    return this.seatTypeService.update(+id, updateSeatTypeDto);
  }

@UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatTypeService.remove(+id);
  }
}
