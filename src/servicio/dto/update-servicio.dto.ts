import { IsString, IsOptional } from 'class-validator';

export class UpdateServicioDto {
    @IsString()
    @IsOptional()
    nombre_servicio?: string;

    @IsString()
    @IsOptional()
    descripcion?: string;
}