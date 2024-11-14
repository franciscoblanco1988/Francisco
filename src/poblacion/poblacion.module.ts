import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Indicador } from 'src/indicador/entities/indicador.entity';
import { Zona } from 'src/zona/entities/zona.entity';

import { PoblacionController } from './poblacion.controller';
import { PoblacionService } from './poblacion.service';

import { Poblacion } from './entities/poblacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Poblacion, Zona, Indicador])],
  controllers: [PoblacionController],
  providers: [PoblacionService],
})
export class PoblacionModule { }