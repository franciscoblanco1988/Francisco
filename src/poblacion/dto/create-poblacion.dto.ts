// create-poblacion.dto.ts
import { IsString, IsNotEmpty, IsArray, IsOptional, IsInt } from 'class-validator';

export class CreatePoblacionDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    codigoINE: string;

    @IsInt()
    @IsOptional() // Puedes marcar esto como opcional si no siempre se incluye
    zonaId?: number; // ID de la zona

    @IsArray()
    @IsOptional() // También opcional
    indicadoresIds?: number[]; // IDs de los indicadores
}