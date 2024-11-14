import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UnidadDeMedidaController } from './unidad_medida.controller';
import { UnidadDeMedidaService } from './unidad_medida.service';

import { UnidadDeMedida } from './entities/unidad_medida.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UnidadDeMedida])],
  controllers: [UnidadDeMedidaController],
  providers: [UnidadDeMedidaService],
})
export class UnidadDeMedidaModule { }