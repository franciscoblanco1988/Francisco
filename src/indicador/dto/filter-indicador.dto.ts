import { IsOptional, IsString } from 'class-validator';

export class FilterIndicadorDto {
    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    codigo?: string;
}