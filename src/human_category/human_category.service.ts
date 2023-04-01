import { Injectable } from '@nestjs/common';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { HumanCategory } from './models/human_category.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(HumanCategory) private HumanCategoryRepo: typeof HumanCategory
    ) {}
  
    create(createHumanCategoryDto: CreateHumanCategoryDto) {
      return this.HumanCategoryRepo.create(createHumanCategoryDto)
    }
  
    async findAll() {
  
      const verib = await this.HumanCategoryRepo.findAll({include:{all: true}})
      return verib
    }
  
    async findOne(id: number) {
      const verib = await this.HumanCategoryRepo.findByPk(id,{include:{all: true}})
      return verib
    }
  
    async update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto) {
      const verib = await this.HumanCategoryRepo.update(updateHumanCategoryDto, {where: {id}})
      return verib
    }
  
    remove(id: number) {
      return this.HumanCategoryRepo.destroy({where: {id}})
    }
  }