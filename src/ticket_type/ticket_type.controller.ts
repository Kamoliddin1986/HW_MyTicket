import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TicketTypeService } from './ticket_type.service';
import { CreateTicketTypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket_type.dto';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { isActiveAdminGuard } from '../guard/isActiveAdmin.guard';


@ApiTags('ticket-type')
@Controller('ticket-type')
export class TicketTypeController {
  constructor(private readonly ticketTypeService: TicketTypeService) {}

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTicketTypeDto: CreateTicketTypeDto) {
    return this.ticketTypeService.create(createTicketTypeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.ticketTypeService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketTypeService.findOne(+id);
  }

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketTypeDto: UpdateTicketTypeDto) {
    return this.ticketTypeService.update(+id, updateTicketTypeDto);
  }

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketTypeService.remove(+id);
  }
}
