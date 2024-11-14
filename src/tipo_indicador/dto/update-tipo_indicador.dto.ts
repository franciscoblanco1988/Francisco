import { PartialType } from '@nestjs/swagger';

import { IsOptional, IsString } from 'class-validator';

import { CreateTipoIndicadorDto } from './create-tipo_indicador.dto';

export class UpdateTipoIndicadorDto extends PartialType(CreateTipoIndicadorDto) {
    @IsString()
    @IsOptional()
    descripcion?: string;
}
