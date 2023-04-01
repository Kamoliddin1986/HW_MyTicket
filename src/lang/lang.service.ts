import { Injectable } from '@nestjs/common';
import { CreateLangDto } from './dto/create-lang.dto';
import { UpdateLangDto } from './dto/update-lang.dto';
import { Lang } from './models/lang.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class LangService {
  constructor(
    @InjectModel(Lang) private LangRepo: typeof Lang
    ) {}
  
    create(createLangDto: CreateLangDto) {
      return this.LangRepo.create(createLangDto)
    }
  
    async findAll() {
  
      const verib = await this.LangRepo.findAll({include:{all: true}})
      return verib
    }
  
    async findOne(id: number) {
      const verib = await this.LangRepo.findByPk(id,{include:{all: true}})
      return verib
    }
  
    async update(id: number, updateLangDto: UpdateLangDto) {
      const verib = await this.LangRepo.update(updateLangDto, {where: {id}})
      return verib
    }
  
    remove(id: number) {
      return this.LangRepo.destroy({where: {id}})
    }
  }
