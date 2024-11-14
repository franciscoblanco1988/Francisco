import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty } from 'class-validator';

export class CreateUnidadDeMedidaDto {
    @ApiProperty({ description: 'Descripción de la unidad de medida' })
    @IsNotEmpty()
    descripcion: string;
}
