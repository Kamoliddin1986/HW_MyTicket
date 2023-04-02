import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { AuthCustomerDto } from './dto/auth-customer.dto';
import { LoginCustomerDto } from './dto/login-customer.dto';
import { LogoutCustomerDto } from './dto/logout-customer.dto';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { isActiveAdminGuard } from '../guard/isActiveAdmin.guard';
import { isCustomerGuard } from '../guard/isCustomer.guard copy';


@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('auth')
  auth(@Body() authCustomerDto: AuthCustomerDto) {
    return this.customerService.auth(authCustomerDto);
  }
  @Post('login')
  login(@Body() loginCustomerDto: LoginCustomerDto) {
    return this.customerService.login(loginCustomerDto);
  }


  @UseGuards(isCustomerGuard)
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  logout(@Body() logoutCustomerDto: LogoutCustomerDto) {
    return this.customerService.logout(logoutCustomerDto);
  }

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
