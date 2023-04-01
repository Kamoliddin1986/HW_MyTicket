import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './models/customer.model';
import { InjectModel } from '@nestjs/sequelize';
import { AuthCustomerDto } from './dto/auth-customer.dto';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { LoginCustomerDto } from './dto/login-customer.dto';


@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer) private CustomerRepo: typeof Customer,
    private readonly jwtService: JwtService
    ) {}
  
    async auth(authCustomerDto: AuthCustomerDto){
      const findedCust = await this.CustomerRepo.findOne({where: {email: authCustomerDto.email}})
    
      if(findedCust) {
        throw new BadRequestException('Customer is exists');
      }
  
      if(authCustomerDto.password !== authCustomerDto.confirm_password) {
        throw new BadRequestException('Password is not match!');
      }

      const hashed_password = await bcrypt.hash(authCustomerDto.password,7);
    const newCustomer = await this.CustomerRepo.create({
      ...authCustomerDto,
      hashed_password: hashed_password
    })
    const tokens = await this.getToken(newCustomer)
    console.log(tokens);
    

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7)

    const updateCustomer = await this.CustomerRepo.update({
      hashed_refresh_token: hashed_refresh_token,
    },
    {
      where: {id: newCustomer.id}, returning: true
    })

    return  {msg:'Customer registrated',
               updateCustomer}  

    
    
    }

    async login(loginCustomerDto: LoginCustomerDto){
      const {email, password} = loginCustomerDto;
      const customer = await this.CustomerRepo.findOne({ where: {email}});
      if(!customer) {
        throw new BadRequestException('Customer not registered!!');
      }
  
  
      const isMatchPass = await bcrypt.compare(password, customer.hashed_password)
      if(!isMatchPass) {
        throw new BadRequestException('Customer not registered(pass)!!');
      }
  
      const tokens = await this.getToken(customer)
  
      const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token,7)
      
      const updateCustomer = await this.CustomerRepo.update({
        hashed_refresh_token: hashed_refresh_token},
       {where: {id: customer.id}, returning: true}
      ) 
  
     
      let msg = 'Customer signed in'
     
    
      return {msg, tokens}
    }

    async getToken(customer: Customer) {
      const jwtPayload = {
        id: customer.id,
        gender: customer.gender,
        first_name: customer.first_name
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
  
      const verib = await this.CustomerRepo.findAll({include:{all: true}})
      return verib
    }
  
    async findOne(id: number) {
      const verib = await this.CustomerRepo.findByPk(id,{include:{all: true}})
      return verib
    }
  
    async update(id: number, updateCustomerDto: UpdateCustomerDto) {
      const verib = await this.CustomerRepo.update(updateCustomerDto, {where: {id}})
      return verib
    }
  
    remove(id: number) {
      return this.CustomerRepo.destroy({where: {id}})
    }
  }
