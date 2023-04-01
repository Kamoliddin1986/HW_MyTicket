import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { InjectModel } from '@nestjs/sequelize';
import { District } from './models/district.model';

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District) private districtRepo: typeof District
    ) {}
    create(createDistrictDto: CreateDistrictDto) {

      console.log("Service>>>>>>>>");
      
      return this.districtRepo.create(createDistrictDto)
    }
  
    async findAll() {
  
      const val = await this.districtRepo.findAll({include:{all: true}})
      return val
    }
  
    async findOne(id: number) {
      const val = await this.districtRepo.findByPk(id,{include:{all: true}})
      return val
    }
  
    async update(id: number, updateDistrictDto: UpdateDistrictDto) {
      const val = await this.districtRepo.update(updateDistrictDto, {where: {id}})
      return val
    }
  
    remove(id: number) {
      return this.districtRepo.destroy({where: {id}})
    }
  }
