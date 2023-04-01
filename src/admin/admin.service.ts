import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './models/admin.model';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { AuthAdminDto } from './dto/auth_admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private AdminRepo: typeof Admin,
    private readonly jwtService: JwtService
    ) {}
  
    async auth(authAdminDto: AuthAdminDto){
      const findedCust = await this.AdminRepo.findOne({where: {login: authAdminDto.login}})
    
      if(findedCust) {
        throw new BadRequestException('Admin is exists'); 
      }
  
      if(authAdminDto.password !== authAdminDto.confirm_password) {
        throw new BadRequestException('Password is not match!');
      }

      const hashed_password = await bcrypt.hash(authAdminDto.password,7);
    const newAdmin = await this.AdminRepo.create({
      ...authAdminDto,
      hashed_password: hashed_password
    })
    const tokens = await this.getToken(newAdmin)
    console.log(tokens);
    

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7)

    const updateAdmin = await this.AdminRepo.update({
      hashed_refresh_token: hashed_refresh_token,
    },
    {
      where: {id: newAdmin.id}, returning: true
    })

    return  {msg:'Admin registrated',
               updateAdmin}  

    
    
    }


    async getToken(Admin: Admin) {
      const jwtPayload = {
        id: Admin.id
      };
  
      const [accessToken, refreshToken] =await Promise.all([
        this.jwtService.signAsync(jwtPayload, {
          secret: process.env.ACCESS_TOKEN_KEY,
          expiresIn: process.env.ACCESS_TOKEN_TIME
        }),
        this.jwtService.signAsync(jwtPayload, {
          secret: process.env.REFRESH_TOKEN_KEY,
          expiresIn: process.env.REFRESH_TOKEN_TIME
        })
      ]);
      return {
        access_token: accessToken,
        refresh_token: refreshToken
      }
    }
  
    async findAll() {
  
      const verib = await this.AdminRepo.findAll({include:{all: true}})
      return verib
    }
  
    async findOne(id: number) {
      const verib = await this.AdminRepo.findByPk(id,{include:{all: true}})
      return verib
    }
  
    async update(id: number, updateAdminDto: UpdateAdminDto) {
      const verib = await this.AdminRepo.update(updateAdminDto, {where: {id}})
      return verib
    }
  
    remove(id: number) {
      return this.AdminRepo.destroy({where: {id}})
    }
  }
