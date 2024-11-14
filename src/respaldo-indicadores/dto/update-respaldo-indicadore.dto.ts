import { PartialType } from '@nestjs/swagger';
import { CreateRespaldoIndicadoreDto } from './create-respaldo-indicadore.dto';

export class UpdateRespaldoIndicadoreDto extends PartialType(CreateRespaldoIndicadoreDto) {}
