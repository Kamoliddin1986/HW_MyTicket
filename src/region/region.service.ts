import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './models/region.model';

@Injectable()
export class RegionService {

  constructor(
    @InjectModel(Region) private regionRepo: typeof Region
    ) {}
    create(createRegionDto: CreateRegionDto) {
      return this.regionRepo.create(createRegionDto)
    }
  
    async findAll() {
  
      const val = await this.regionRepo.findAll({include:{all: true}})
      return val
    }
  
    async findOne(id: number) {
      const val = await this.regionRepo.findByPk(id,{include:{all: true}})
      return val
    }
  
    async update(id: number, updateRegionDto: UpdateRegionDto) {
      const val = await this.regionRepo.update(updateRegionDto, {where: {id}})
      return val
    }
  
    remove(id: number) {
      return this.regionRepo.destroy({where: {id}})
    }
  }
