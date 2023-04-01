import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VenueAndTypeService } from './venue_and_type.service';
import { CreateVenueAndTypeDto } from './dto/create-venue_and_type.dto';
import { UpdateVenueAndTypeDto } from './dto/update-venue_and_type.dto';

@Controller('venue-and-type')
export class VenueAndTypeController {
  constructor(private readonly venueAndTypeService: VenueAndTypeService) {}

  @Post()
  create(@Body() createVenueAndTypeDto: CreateVenueAndTypeDto) {
    return this.venueAndTypeService.create(createVenueAndTypeDto);
  }

  @Get()
  findAll() {
    return this.venueAndTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueAndTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenueAndTypeDto: UpdateVenueAndTypeDto) {
    return this.venueAndTypeService.update(+id, updateVenueAndTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueAndTypeService.remove(+id);
  }
}
