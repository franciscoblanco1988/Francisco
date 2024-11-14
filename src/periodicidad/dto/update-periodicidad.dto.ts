import { PartialType } from '@nestjs/swagger';
import { CreatePeriodicidadDto } from './create-periodicidad.dto';

export class UpdatePeriodicidadDto extends PartialType(CreatePeriodicidadDto) {}
