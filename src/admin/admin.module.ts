import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Admin } from './models/admin.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Admin]),JwtModule.register({})],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
