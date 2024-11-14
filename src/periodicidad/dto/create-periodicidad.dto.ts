import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';

export class CreatePeriodicidadDto {
    @ApiProperty({ description: 'Tipo de periodicidad' })
    @IsString()
    tipo: string;
}
