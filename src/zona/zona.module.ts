import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ZonaController } from './zona.controller';
import { ZonaService } from './zona.service';

import { Zona } from './entities/zona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Zona])],
  controllers: [ZonaController],
  providers: [ZonaService],
})
export class ZonaModule { }