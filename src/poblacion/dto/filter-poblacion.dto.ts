import { IsOptional, IsString } from 'class-validator';

export class FilterPoblacionDto {
    @IsOptional()
    @IsString()
    codigoINE?: string;

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    zonaId?: number; // ID de la Zona
}