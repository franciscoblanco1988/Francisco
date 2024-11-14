import { IsOptional, IsString, IsInt, IsArray } from 'class-validator';

export class UpdateIndicadorDto {
    @IsOptional()
    @IsString()
    codigo?: string;

    @IsOptional()
    @IsString()
    comentario?: string;

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsInt()
    tipoIndicadorId?: number;

    @IsOptional()
    @IsInt()
    servicioId?: number;

    @IsOptional()
    @IsInt()
    unidadMedidaId?: number;

    @IsOptional()
    @IsInt()
    periodicidadId?: number;

    @IsArray()
    @IsOptional()
    poblacionesIds?: number[];
}