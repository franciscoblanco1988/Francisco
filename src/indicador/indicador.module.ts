import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Servicio } from 'src/servicio/entities/servicio.entity';
import { TipoIndicador } from 'src/tipo_indicador/entities/tipo_indicador.entity';
import { UnidadDeMedida } from 'src/unidad_medida/entities/unidad_medida.entity';

import { Poblacion } from '../poblacion/entities/poblacion.entity';

import { IndicadorController } from './indicador.controller';
import { IndicadorService } from './indicador.service';

import { Indicador } from './entities/indicador.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Indicador, TipoIndicador, Servicio, UnidadDeMedida, Poblacion]),
  ],
  controllers: [IndicadorController],
  providers: [IndicadorService],
})
export class IndicadorModule { }