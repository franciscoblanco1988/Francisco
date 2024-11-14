// src/tipo-indicador/tipo-indicador.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TipoIndicadorController } from './tipo_indicador.controller';
import { TipoIndicadorService } from './tipo_indicador.service';

import { TipoIndicador } from './entities/tipo_indicador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoIndicador])],
  controllers: [TipoIndicadorController],
  providers: [TipoIndicadorService],
})
export class TipoIndicadorModule { } 