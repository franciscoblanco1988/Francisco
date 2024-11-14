import { IsString, IsOptional } from 'class-validator';

export class UpdatePoblacionDto {
    @IsString()
    @IsOptional()
    codigoINE?: string;

    @IsString()
    @IsOptional()
    nombre?: string;

    @IsOptional()
    zonaId?: number; // ID de la Zona
}