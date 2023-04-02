import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VenueAndTypeService } from './venue_and_type.service';
import { CreateVenueAndTypeDto } from './dto/create-venue_and_type.dto';
import { UpdateVenueAndTypeDto } from './dto/update-venue_and_type.dto';
import { isActiveAdminGuard } from '../guard/isActiveAdmin.guard';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';


@ApiTags('venue-and-type')
@Controller('venue-and-type')
export class VenueAndTypeController {
  constructor(private readonly venueAndTypeService: VenueAndTypeService) {}

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createVenueAndTypeDto: CreateVenueAndTypeDto) {
    return this.venueAndTypeService.create(createVenueAndTypeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.venueAndTypeService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueAndTypeService.findOne(+id);
  }

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenueAndTypeDto: UpdateVenueAndTypeDto) {
    return this.venueAndTypeService.update(+id, updateVenueAndTypeDto);
  }

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueAndTypeService.remove(+id);
  }
}
