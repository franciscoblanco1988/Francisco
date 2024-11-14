import { IsOptional, IsString } from 'class-validator';

export class FilterServicioDto {
    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    descripcion?: string;
}