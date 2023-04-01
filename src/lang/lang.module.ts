import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { LangService } from './lang.service';
import { LangController } from './lang.controller';
import { Lang } from './models/lang.model';
import { Event } from '../event/models/event.model';

@Module({
  imports: [SequelizeModule.forFeature([Lang,Event])],
  controllers: [LangController],
  providers: [LangService]
})
export class LangModule {}
