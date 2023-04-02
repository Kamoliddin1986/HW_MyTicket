import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HumanCategoryService } from './human_category.service';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { isActiveAdminGuard } from '../guard/isActiveAdmin.guard';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';


@ApiTags('human-category')
@Controller('human-category')
export class HumanCategoryController {
  constructor(private readonly humanCategoryService: HumanCategoryService) {}

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryService.create(createHumanCategoryDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.humanCategoryService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.humanCategoryService.findOne(+id);
  }

    @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHumanCategoryDto: UpdateHumanCategoryDto) {
    return this.humanCategoryService.update(+id, updateHumanCategoryDto);
  }

    @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.humanCategoryService.remove(+id);
  }
}
