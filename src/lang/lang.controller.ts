import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LangService } from './lang.service';
import { CreateLangDto } from './dto/create-lang.dto';
import { UpdateLangDto } from './dto/update-lang.dto';
import { isActiveAdminGuard } from '../guard/isActiveAdmin.guard';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';


@ApiTags('lang')
@Controller('lang')
export class LangController {
  constructor(private readonly langService: LangService) {}

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createLangDto: CreateLangDto) {
    return this.langService.create(createLangDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.langService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.langService.findOne(+id);
  }

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLangDto: UpdateLangDto) {
    return this.langService.update(+id, updateLangDto);
  }

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.langService.remove(+id);
  }
}
