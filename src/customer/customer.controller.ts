import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { AuthCustomerDto } from './dto/auth-customer.dto';
import { LoginCustomerDto } from './dto/login-customer.dto';
import { LogoutCustomerDto } from './dto/logout-customer.dto';

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
  @Post('logout')
  logout(@Body() logoutCustomerDto: LogoutCustomerDto) {
    return this.customerService.logout(logoutCustomerDto);
  }


  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
