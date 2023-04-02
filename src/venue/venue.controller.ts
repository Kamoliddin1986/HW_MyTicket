import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { isActiveAdminGuard } from '../guard/isActiveAdmin.guard';
@ApiTags('Venue')
@Controller('venue')
export class VenueController {
  constructor(private readonly venueService: VenueService) {} 

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createVenueDto: CreateVenueDto) {
    return this.venueService.create(createVenueDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.venueService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueService.findOne(+id);
  }

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenueDto: UpdateVenueDto) {
    return this.venueService.update(+id, updateVenueDto);
  }

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueService.remove(+id);
  }
}
