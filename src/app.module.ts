import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { IndicadorModule } from './indicador/indicador.module';
import { PoblacionModule } from './poblacion/poblacion.module';
import { RespaldoIndicadoresModule } from './respaldo-indicadores/respaldo-indicadores.module';
import { ServicioModule } from './servicio/servicio.module';
import { TipoIndicadorModule } from './tipo_indicador/tipo_indicador.module';
import { UnidadDeMedidaModule } from './unidad_medida/unidad_medida.module';
import { ZonaModule } from './zona/zona.module';
import { PeriodicidadModule } from './periodicidad/periodicidad.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      synchronize: true,
    } as any),
    IndicadorModule,
    TipoIndicadorModule,
    ServicioModule,
    UnidadDeMedidaModule,
    PoblacionModule,
    ZonaModule,
    RespaldoIndicadoresModule,
    PeriodicidadModule,
  ],
})
export class AppModule { }
