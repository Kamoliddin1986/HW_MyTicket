import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VenueTypeService } from './venue_type.service';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { isActiveAdminGuard } from '../guard/isActiveAdmin.guard';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Venue-type")
@Controller('venue-type')
export class VenueTypeController {
  constructor(private readonly venueTypeService: VenueTypeService) {}

    @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeService.create(createVenueTypeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.venueTypeService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueTypeService.findOne(+id);
  }

    @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenueTypeDto: UpdateVenueTypeDto) {
    return this.venueTypeService.update(+id, updateVenueTypeDto);
  }

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueTypeService.remove(+id);
  }
}
