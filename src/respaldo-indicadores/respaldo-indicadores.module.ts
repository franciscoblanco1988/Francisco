import { Module } from '@nestjs/common';
import { RespaldoIndicadoresService } from './respaldo-indicadores.service';
import { RespaldoIndicadoresController } from './respaldo-indicadores.controller';

@Module({
  controllers: [RespaldoIndicadoresController],
  providers: [RespaldoIndicadoresService],
})
export class RespaldoIndicadoresModule {}
