import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AuthAdminDto } from './dto/auth_admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { ActiveCreatorAdminDto } from './dto/activeCreator-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('auth')
  auth(@Body() authAdminDto: AuthAdminDto) {
    return this.adminService.auth(authAdminDto);
  }
  @Post('login')
  login(@Body() loginAdminDto: LoginAdminDto) {
    return this.adminService.login(loginAdminDto);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @Patch(':id/setrole')
  update(@Param('id') id: string, @Body() activeCreatorAdminDto: ActiveCreatorAdminDto) {
    return this.adminService.update(+id, activeCreatorAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
