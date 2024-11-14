import { IsNotEmpty, IsString, IsOptional, IsInt, IsArray } from 'class-validator';

export class CreateIndicadorDto {
    @IsNotEmpty()
    @IsString()
    codigo: string;

    @IsOptional()
    @IsString()
    comentario: string;

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsInt()
    tipoIndicadorId: number;

    @IsNotEmpty()
    @IsInt()
    servicioId: number;

    @IsNotEmpty()
    @IsInt()
    unidadMedidaId: number;

    @IsNotEmpty()
    @IsInt()
    periodicidadId: number;

    @IsArray()
    @IsOptional()
    poblacionesIds?: number[];
}