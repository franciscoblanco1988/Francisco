import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PeriodicidadController } from './periodicidad.controller';
import { PeriodicidadService } from './periodicidad.service';

import { Periodicidad } from './entities/periodicidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Periodicidad])],
  providers: [PeriodicidadService],
  controllers: [PeriodicidadController],
})
export class PeriodicidadModule { }
