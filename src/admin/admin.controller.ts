import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AuthAdminDto } from './dto/auth_admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { ActiveCreatorAdminDto } from './dto/activeCreator-admin.dto';
import { isActiveAdminGuard } from '../guard/isActiveAdmin.guard';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { isCreatorGuard } from '../guard/isCreatorAdmin.guard';


@ApiTags('admin')
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

  @UseGuards(isCreatorGuard)
  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }
  @UseGuards(isCreatorGuard)
  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(':id/setrole')
  update(@Param('id') id: string, @Body() activeCreatorAdminDto: ActiveCreatorAdminDto) {
    return this.adminService.update(+id, activeCreatorAdminDto);
  }
  @UseGuards(isCreatorGuard)
  @UseGuards(isActiveAdminGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
